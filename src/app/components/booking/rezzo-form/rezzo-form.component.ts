import { getLocaleDateFormat } from '@angular/common';
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
  years: number[] = [moment().year(), moment().year()+1, moment().year()+2];
  hours: string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',];
  minutes: any[] = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];
  guests: any[] = ['1 person', '2 people', '3 people', '4 people', '5 people', '6 people', '7 people', '8 people', '9 people', '10 people', '11 people', '12 people'];


  rezzoForm: FormGroup | any;
  nameValidationErrorMessage!: string;
  emailValidationErrorMessage!: string;
  dateValidationErrorMessage!: string;

  private nameValidationMessages: any = {
    required: 'Please enter your name.',
    minlength: 'Name must be longer than 4 characters.'
  }

  private emailValidationMessages: any = {
    required: 'Please enter your email address.',
    email: 'Please enter a valid email address.'
  }

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

    console.log(moment.monthsShort())
    //re-evalute for validation messages everytime controls are changes
    const nameControl = this.rezzoForm.get('name');
    nameControl.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(
      (value: any) => this.setNameValidationErrorMessage(nameControl));

    const emailControl = this.rezzoForm.get('email');
    emailControl.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(
      (value: any) => this.setEmailValidationErrorMessage(emailControl));

    const dateControl = this.rezzoForm.get('dateGroup');
    dateControl.valueChanges.pipe(
      debounceTime(3000)
    ).subscribe(
      (value: any) => {
        this.setDateErrorMessage(
          this.rezzoForm.get('dateGroup.month'),
          this.rezzoForm.get('dateGroup.day'),
          this.rezzoForm.get('dateGroup.year')
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
    this.nameValidationErrorMessage = '';
    if ((e.touched || e.dirty) && e.errors) {
      this.emailValidationErrorMessage = Object.keys(e.errors).map(
        key => this.emailValidationMessages[key]).join(' ')
    }
  }

  setDateErrorMessage(m, d, y): void {
    this.dateValidationErrorMessage = '';

    let now = moment();
    let reservation = moment([y.value, moment(m.value, 'MMM').month(), d.value]);
    let later = moment().add(6, 'months');

    if (!reservation.isValid() || now > reservation || reservation > later) {
      this.dateValidationErrorMessage = 'Please slect a valid date within the next 6 months'
    }
  }

  decrementGuestCount() {
    if (this.selectedGuestCount > 1) {
      this.selectedGuestCount = this.selectedGuestCount - 1
      this.rezzoForm.patchValue({
        guests: this.selectedGuestCount
      })
    }
    //TO DO(Bonus) => handle < 1 guest error here
  }

  incrementGuestCount() {
    if (this.selectedGuestCount < 12) {
      this.selectedGuestCount = this.selectedGuestCount + 1
    }
    this.rezzoForm.patchValue({
      guests: this.selectedGuestCount
    })
    //TO DO(Bonus) => handle > 12 guests error here
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
    //TO DO (Bonus) => Format Time & Date
    this.reservation = { ...this.rezzoForm.value }
    console.log(this.reservation);
  }


}






