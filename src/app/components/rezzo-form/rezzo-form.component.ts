import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, } from '@angular/forms';

@Component({
  selector: 'app-rezzo-form',
  templateUrl: './rezzo-form.component.html',
  styleUrls: ['./rezzo-form.component.scss'],
})
export class RezzoFormComponent implements OnInit {
  rezzoForm: FormGroup;
  name: any;
  email: any;
  months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  days: string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '11', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
  years: number[] = [2022, 2023, 2024];
  hours: string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',];
  minutes: any[] = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];
  guests: any[] = ['1 person', '2 people', '3 people', '4 people', '5 people', '6 people', '7 people', '8 people', '9 people', '10 people'];
 
  selectedGuestCount: number = 4;
  isSubmitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();

  }

  initializeForm(): void {
    this.rezzoForm = this.fb.group({
      name: '',
      email: '',
      month: 'MM',
      day: 'DD',
      year: 'YYYY',
      hour: '07',
      minute: '30',
      meridian: 'PM',
      guests: this.guests[this.selectedGuestCount + 1],
    })
  };
  decrementGuestCount() {
    if (this.selectedGuestCount > 1) {
      this.selectedGuestCount = this.selectedGuestCount - 1
    }
    //TODO => handle < 1 guest error here
  }
  incrementGuestCount() {
    if (this.selectedGuestCount < 10) {
      this.selectedGuestCount = this.selectedGuestCount + 1
    }
    //TODO => handle > 10 guests error here
  }

  onSubmitForm() {
    this.rezzoForm.patchValue({
      guests: this.guests[this.selectedGuestCount + 1]
    })
    console.warn(this.rezzoForm.value);
    console.log(this.rezzoForm);
    this.selectedGuestCount = 4;
    this.rezzoForm.reset();
  }

  selectMonth(event): void {
    this.rezzoForm.patchValue({
      month: event.target.value
    })
  }

  selectDay(event): void {
    this.rezzoForm.patchValue({
      day: event.target.value
    })
  }

  selectYear(event): void {
    this.rezzoForm.patchValue({
      year: event.target.value
    })
  }

  selectHour(event): void {
    this.rezzoForm.patchValue({
      hour: event.target.value
    })
  }
  selectMinute(event): void {
    this.rezzoForm.patchValue({
      minute: event.target.value
    })
  }

  selectMeridian(event): void {
    this.rezzoForm.patchValue({
      meridian: event.target.value
    })
  }

  makeReservation() {
    //TODO => add confirmation
    //TODO => add rezzo to database
  }


}






