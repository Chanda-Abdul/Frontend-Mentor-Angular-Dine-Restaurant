import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Reservation } from './reservation';

@Component({
  selector: 'app-rezzo-form',
  templateUrl: './rezzo-form.component.html',
  styleUrls: ['./rezzo-form.component.scss'],
})

export class RezzoFormComponent implements OnInit {
  //TO DO => add custom validation to make sure date is in the future
  months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  days: string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
  years: number[] = [2022, 2023, 2024];
  hours: string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',];
  minutes: any[] = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];
  guests: any[] = ['1 person', '2 people', '3 people', '4 people', '5 people', '6 people', '7 people', '8 people', '9 people', '10 people', '11 people', '12 people'];


  rezzoForm: FormGroup | any;
  reservation = new Reservation();

  selectedGuestCount: number = 4;
  isSubmitted: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.rezzoForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      dateGroup: this.fb.group({
        month: ['MM' || this.months, Validators.required],
        day: ['DD' || this.days, Validators.required],
        year: ['YYYY' || this.years, Validators.required],
      }),
      timeGroup: this.fb.group({
        hour: ['07' || this.hours, Validators.required],
        minute: ['30' || this.minutes, Validators.required],
        meridian: ['PM' || ['AM', 'PM'], Validators.required],
      }),
      guests: [4, [Validators.min(1), Validators.max(12)]]
    });

  }

  decrementGuestCount() {
    if (this.selectedGuestCount > 1) {
      this.selectedGuestCount = this.selectedGuestCount - 1
      this.rezzoForm.patchValue({
        guests: this.selectedGuestCount
      })
    }
    //TO DO => handle < 1 guest error here
  }

  incrementGuestCount() {
    if (this.selectedGuestCount < 12) {
      this.selectedGuestCount = this.selectedGuestCount + 1
    }
    this.rezzoForm.patchValue({
      guests: this.selectedGuestCount
    })
    //TO DO => handle > 12 guests error here
  }

  saveReservation() {
    this.makeReservation();
    console.log(this.rezzoForm.value);
    this.isSubmitted = true;

    setTimeout(() => {
      this.isSubmitted = false;
      this.rezzoForm.reset();
    }, 15000)
  }

  makeReservation() {
    this.reservation = { ...this.rezzoForm.value }
    console.log(this.reservation);
  }


}






