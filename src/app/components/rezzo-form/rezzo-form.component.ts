import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroupDirective,
  FormGroup,
  NgForm,
  Validators,
  FormArray,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Months } from './form.model';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

// interface Year {
//   value: number;
//   viewValue: number;
// }
@Component({
  selector: 'app-rezzo-form',
  templateUrl: './rezzo-form.component.html',
  styleUrls: ['./rezzo-form.component.scss'],
})
export class RezzoFormComponent implements OnInit {
  isSubmitted = false;
  rezzoForm;
  name: string;
  email: string;
  months: Months[] = [
    { id: 'jan', name: 'Jan' },
    { id: 'feb', name: 'Feb' },
    { id: 'mar', name: 'Mar' },
    { id: 'apr', name: 'Apr' },
    { id: 'may', name: 'May' },
    { id: 'jun', name: 'Jun' },
    { id: 'jul', name: 'Jul' },
    { id: 'aug', name: 'Aug' },
    { id: 'sept', name: 'Sept' },
    { id: 'oct', name: 'Oct' },
    { id: 'nov', name: 'Nov' },
    { id: 'dec', name: 'Dec' },
  ];
  Days: any[] = ['01', '02', '03', '04', '05', '30', '31'];
  Years: any[] = [2022, 2023, 2024];
  Hours: any[] = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];
  Minutes: any[] = [
    '00',
    '05',
    '10',
    '15',
    '20',
    '25',
    '30',
    '35',
    '40',
    '45',
    '50',
    '55',
  ];
  Guests: any[] = [
    '1 person',
    '2 people',
    '3 people',
    '4 people',
    '5 people',
    '6 people',
    '7 people',
    '8 people',
    '9 people',
    '10 people',
  ];

  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    this.rezzoForm = this.fb.group({
      name: new FormControl('', { validators: [Validators.required] }),
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
      }),
      months: ['', [Validators.required]],
      //   days: new FormControl('31', { validators: [Validators.required] }),
      //   years: new FormControl(2022, { validators: [Validators.required] }),
      //   hours: new FormControl('07', { validators: [Validators.required] }),
      //   minutes: new FormControl('30', { validators: [Validators.required] }),
      //  meridians: new FormControl('PM', { validators: [Validators.required] }),
      //  guests: new FormControl('4 people', { validators: [Validators.required] })
    });
    // this.rezzoForm.setValues()
  }
  // setValues() {
  //   this.rezzoForm.setValue({
  //     month: 'Jul',
  //     day: '31',
  //     year: 2022,
  //     hour: '07',
  //     minute: '30',
  //     meridian: 'PM',
  //     guest: '4 people'
  //   });
  // }

  // changeMonth(e: any) {
  //   this.months?.setValue(e.target.value, {
  //     onlySelf: true,
  //   });
  // }

  changeDay(e: any) {
    this.days?.setValue(e.target.value, {
      onlySelf: true,
    });
  }
  changeYear(e: any) {
    this.years?.setValue(e.target.value, {
      onlySelf: true,
    });
  }
  changeHour(e: any) {
    this.hours?.setValue(e.target.value, {
      onlySelf: true,
    });
  }
  changeMinute(e: any) {
    this.minutes?.setValue(e.target.value, {
      onlySelf: true,
    });
  }
  changeMeridian(e: any) {
    this.meridians?.setValue(e.target.value, {
      onlySelf: true,
    });
  }
  changeGuest(e: any) {
    this.guests?.setValue(e.target.value, {
      onlySelf: true,
    });
  }
  // Access formcontrols getter

  // get months() {
  //   return this.rezzoForm.get('months');
  // }
  get days() {
    return this.rezzoForm.get('days');
  }
  get years() {
    return this.rezzoForm.get('years');
  }
  get hours() {
    return this.rezzoForm.get('hours');
  }
  get minutes() {
    return this.rezzoForm.get('minutes');
  }
  get meridians() {
    return this.rezzoForm.get('meridians');
  }
  get guests() {
    return this.rezzoForm.get('guests');
  }
  onSubmitForm(): void {
    console.log(this.rezzoForm);
    this.isSubmitted = true;
    if (!this.rezzoForm.valid) {
      false;
    } else {
      console.log(this.rezzoForm.value);
      this.rezzoForm.reset();
    }
  }
}

//   matcher = new MyErrorStateMatcher();

//   // day = '';
//   // month = '';
//   // year = 0;
//   // hour = '';
//   // minute = '';
//   // meridian = '';
//   dateForm: FormGroup;

//   selectedMonth: string;

//   selectedDay: string;

//   timeForm: FormGroup;
//
//   selectedHour: string;

//   selectedMinute: string;

//   selectedGuest: string;
//   meridians: any[] = [
//     'AM',
//     'PM'];
//   selectedMeridian: string;
//   //
//   //   maxDate: any;
//   //   isSubmitted = false;
// rezzoForm: FormGroup = new FormGroup({});

// ngOnInit() {
//     this.rezzoForm = this.formBuilder.group({
//       years: ['', { validators: [Validators.required] }]
//     })
//     // this.configureRezzoForm();
//     // name = new FormControl('')
//     // this.rezzoForm = new FormGroup({

//     // date:  new FormGroup({
//     //   month: new FormControl(''),
//     //   day: new FormControl(''),
//     //   year: new FormControl(''),
//     // }),
//     // time: new FormGroup({
//     // hours = new FormControl('');
//     // minute: new FormControl(''),
//     // amOrPm: new FormControl(''),
//     // }),

//     // });

//     //
//     // this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
//     // this.rezzoForm = new FormGroup({
//     //   email: new FormControl('', { validators: [Validators.required, Validators.email] }),
//     //   months: new FormControl('', { validators: [Validators.required] }),
//     //
//     //     })
//     // this.dateForm = new FormGroup({

//     // })
//     // this.setValues();
// }

//   // compareWithFunc = (a: any, b: any) => a == b;

//   // configureRezzoForm() {

//   // }

//   // changeAmPm(e: any) {
//   //   this.AmPm?.setValue(e.target.value, {
//   //     onlySelf: true,
//   //   });
//   // }
//   // Access formcontrols getter
//   // get amOrPm() {
//   //   return this.rezzoForm.get('amOrPm');
//   // }

//   // onMakeReservationClick() {
//   //   this.makeReservationClick.emit()
//   //   //add confirmation
//   // }

//   // incrementguest() {
//   //   if (this.guest > 26) {
//   //     //add error message
//   //     this.guest = 25
//   //   } else {
//   //     this.guest = ++this.guest;

//   //   }

//   // }

//   // decrementguest() {
//   //   if (this.guest < 1) {
//   //     this.guest = 1
//   //     //add error message
//   //   } else {
//   //     this.guest = --this.guest;
//   //   }
//   // }

// }
