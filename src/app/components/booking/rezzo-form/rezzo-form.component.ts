import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import * as moment from 'moment';
import { debounceTime } from 'rxjs';
import { Reservation } from './reservation';

@Component({
  selector: 'app-rezzo-form',
  templateUrl: './rezzo-form.component.html',
  styleUrls: ['./rezzo-form.component.scss'],
})

export class RezzoFormComponent implements OnInit {

  months: string[] = [...moment.monthsShort()];
  days: string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
  years: number[] = [moment().year(), moment().year() + 1, moment().year() + 2];
  hours: string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',];
  minutes: any[] = ['00', '15', '30', '45'];
  guests: any[] = ['1 person', '2 people', '3 people', '4 people', '5 people', '6 people', '7 people', '8 people', '9 people', '10 people', '11 people', '12 people'];


  rezzoForm: FormGroup | any;
  nameValidationErrorMessage!: string;
  emailValidationErrorMessage!: string;
  dateValidationErrorMessage!: string;
  timeValidationErrorMessage!: string;


  private nameValidationMessages: any = {
    required: 'Please enter your name.',
    minlength: 'Name must be longer than 4 characters.'
  }

  private emailValidationMessages: any = {
    required: 'Please enter your email address.',
    email: 'Please enter a valid email address.'
  }
  guestValidationMessages!: string;

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
        hour: [this.hours, Validators.required],
        minute: [this.minutes, Validators.required],
        meridian: ['PM' || ['AM', 'PM'], Validators.required],
      }),
      guests: [4, [Validators.min(1), Validators.max(12)]]
    });

    const nameControl = this.rezzoForm.get('name');
    nameControl.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(
      (value: any) =>
        this.setNameValidationErrorMessage(nameControl));

    const emailControl = this.rezzoForm.get('email');
    emailControl.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(
      (value: any) =>
        this.setEmailValidationErrorMessage(emailControl));

    const dateControl = this.rezzoForm.get('dateGroup');
    dateControl.valueChanges.pipe(
      debounceTime(3000)
    ).subscribe(
      (value: any) => {
        this.setDateValidationErrorMessage(
          this.rezzoForm.get('dateGroup.month'),
          this.rezzoForm.get('dateGroup.day'),
          this.rezzoForm.get('dateGroup.year')
        )
      });

    const timeControl = this.rezzoForm.get('timeGroup');
    timeControl.valueChanges.pipe(
      debounceTime(3000)
    ).subscribe(
      (value: any) => {
        this.setTimeValidationErrorMessage(
          this.rezzoForm.get('timeGroup.hour'),
          this.rezzoForm.get('timeGroup.minute'),
          this.rezzoForm.get('timeGroup.meridian')
        )
      });
  }

  setNameValidationErrorMessage(n: AbstractControl): void {
    this.nameValidationErrorMessage = '';
    if ((n.touched || n.dirty) && n.errors) {
      this.nameValidationErrorMessage = Object.keys(n.errors).map(
        key => this.nameValidationMessages[key]).join(' ')
    }
  }

  setEmailValidationErrorMessage(e: AbstractControl): void {
    this.emailValidationErrorMessage = '';
    if ((e.touched || e.dirty) && e.errors) {
      this.emailValidationErrorMessage = Object.keys(e.errors).map(
        key => this.emailValidationMessages[key]).join(' ')
    }
  }

  setDateValidationErrorMessage(month, day, year): void {
    this.dateValidationErrorMessage = '';
    let now = moment();
    let reservation = moment([year.value, moment(month.value, 'MMM').month(), day.value]);
    let later = moment().add(6, 'months');

    if (!reservation.isValid() || now > reservation || reservation > later) {
      this.dateValidationErrorMessage = 'Please select a valid date within the next 6 months'
    }
  }

  setTimeValidationErrorMessage(hour, min, meridian): void {
    this.timeValidationErrorMessage = '';
    /*
    Business Hours are
    MON - FRI: 09:00 AM - 10:00 PM
    SAT - SUN: 09:00 AM - 11:30 PM
    for simplicity we will use 09:00 AM - 11:30 PM
    to validate reservation hours
    */
    const open = moment('8:59am', 'h:mma')
    const close = moment('11:31pm', 'h:mma')
    let currentTime = moment([`${hour.value}:${min.value}:${meridian.value}`], "LT")

    if (!currentTime.isBetween(open, close)) {
      this.timeValidationErrorMessage = 'Please select a time during our current business hours.';
    }

  }

  decrementGuestCount() {
    if (this.selectedGuestCount > 1) {
      this.selectedGuestCount = this.selectedGuestCount - 1
      this.rezzoForm.patchValue({
        guests: this.selectedGuestCount
      })
    } else {
      this.guestValidationMessages = 'At least one person must be present to make reservation';
      setTimeout(() => {
        this.guestValidationMessages = '';
      }, 3000)
    }

  }

  incrementGuestCount() {
    if (this.selectedGuestCount < 12) {
      this.selectedGuestCount = this.selectedGuestCount + 1
      this.rezzoForm.patchValue({
        guests: this.selectedGuestCount
      })
    }
    else {
      this.guestValidationMessages = 'Please call to make reservations for parties of 12 or more.';
      setTimeout(() => {
        this.guestValidationMessages = '';
      }, 3000)
    }

  }

  saveReservation() {
    this.makeReservation();
    this.isSubmitted = true;

    setTimeout(() => {
      this.isSubmitted = false;
      this.rezzoForm.reset();
    }, 15000)
  }

  makeReservation() {
    //TO DO (Bonus) => Format Time & Date
    this.reservation = {
      name: this.rezzoForm.value.name,
      email: this.rezzoForm.value.email,
      date: this.rezzoForm.value.dateGroup,
      time: this.rezzoForm.value.timeGroup,
      guests: this.rezzoForm.value.guests
    }
  }


}






