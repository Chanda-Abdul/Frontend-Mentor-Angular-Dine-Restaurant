import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-rezzo-form',
  templateUrl: './rezzo-form.component.html',
  styleUrls: ['./rezzo-form.component.scss'],
})
export class RezzoFormComponent implements OnInit {

  // name: string = '';
  // email: string = '';
  months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  days: string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
  years: number[] = [2022, 2023, 2024];
  hours: string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',];
  minutes: any[] = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];
  guests: any[] = ['1 person', '2 people', '3 people', '4 people', '5 people', '6 people', '7 people', '8 people', '9 people', '10 people'];



  reservation = {
    name: null,
    email: null,
    date: {
      month: 'MM',
      day: 'DD',
      year: 'YYYY',
    },
    time: {
      hour: '07',
      minute: '30',
      meridian: 'PM',
    },
    guests: null
  }
  rezzoForm: FormGroup;
  selectedGuestCount: number = 4;
  isSubmitted: boolean = false;

  // constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.rezzoForm = new FormGroup({
      name: new FormControl(this.reservation.name, [
        Validators.required,
        Validators.minLength(4)]),
      email: new FormControl(this.reservation.email, [
        Validators.required,
        Validators.email]),
      date: new FormGroup({
        month: new FormControl(this.reservation.date.month, Validators.required),
        day: new FormControl(this.reservation.date.day, Validators.required),
        year: new FormControl(this.reservation.date.year, Validators.required),

      }),
      time: new FormGroup({
        hour: new FormControl(this.reservation.time.hour, Validators.required),
        minute: new FormControl(this.reservation.time.minute, Validators.required),
        meridian: new FormControl(this.reservation.time.meridian, Validators.required),
      }),
      guests: new FormControl(this.reservation.guests)
    });

  }

  decrementGuestCount(count) {
    console.log(count)
    if (this.selectedGuestCount > 1) {
      this.selectedGuestCount = this.selectedGuestCount - 1
    }

    //TODO => handle < 1 guest error here
  }
  incrementGuestCount(event) {

    console.log(event)

    if (this.selectedGuestCount < 10) {
      this.selectedGuestCount = this.selectedGuestCount + 1
    }
    //TODO => handle > 10 guests error here

   }

  onSubmitForm() {
    // TODO => reset form default values.
    this.selectGuestCount()
    this.isSubmitted = true;
    // console.warn(this.rezzoForm.value);
    // console.log(this.rezzoForm.value);
    this.rezzoForm.reset();

  }

  selectMonth(event): void {
    this.rezzoForm.patchValue({
      date: {
        month: event.target.value
      }
    })
  }

  selectDay(event): void {
    this.rezzoForm.patchValue({
      date: {
        day: event.target.value
      }
    })
  }

  selectYear(event): void {
    this.rezzoForm.patchValue({
      date: {
        year: event.target.value
      }
    })
  }

  selectHour(event): void {
    this.rezzoForm.patchValue({
      time: { hour: event.target.value }

    })
  }
  selectMinute(event): void {
    this.rezzoForm.patchValue({
      time: { minute: event.target.value }

    })
  }

  selectMeridian(event): void {
    this.rezzoForm.patchValue({
      time: { meridian: event.target.value }

    })
  }


  selectGuestCount(): void {
    this.rezzoForm.patchValue({
      guests: { guest: this.guests[this.selectedGuestCount-1] }

    })
  }

  makeReservation() {
    //TODO => add confirmation
    //TODO => add rezzo to database
  }


}






