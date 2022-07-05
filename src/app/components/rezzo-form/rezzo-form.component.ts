import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rezzo-form',
  templateUrl: './rezzo-form.component.html',
  styleUrls: ['./rezzo-form.component.scss']
})
export class RezzoFormComponent implements OnInit {
  isSubmitted = false;

  day: any = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri'];
  month: any = ['Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  year: any = ['2023', '2024', '2025'];
  hour: any = ['01', '02', '03', '04', '05', '06', '08', '09', '10'];
  minute: any = [ '05', '10',  '15', '20', '25', '30', '35', '40', '45', '50', '55'];
  AmPm: any = ['PM'];
  guest: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,17, 18, 19, 20, 21, 22,23,24,25];;

  @Output() makeReservationClick = new EventEmitter()
  name = new FormControl('')
  rezzoForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    date: new FormGroup({
      month: new FormControl(''),
      day: new FormControl(''),
      year: new FormControl(''),
    }),
    time: new FormGroup({
      hour: new FormControl(''),
      minute: new FormControl(''),
      amOrPm: new FormControl(''),
    }),
    guests: new FormControl('')

  });

  constructor(private route: Router, private router: ActivatedRoute, public fb: FormBuilder) { }

  ngOnInit(): void {
  }

  changeAmPm(e: any) {
    this.AmPm?.setValue(e.target.value, {
      onlySelf: true,
    });
  }
  // Access formcontrols getter
  get amOrPm() {
    return this.rezzoForm.get('amOrPm');
  }
  onSubmit(): void {
    console.log(this.rezzoForm);
    this.isSubmitted = true;
    if (!this.rezzoForm.valid) {
      false;
    } else {
      console.log(JSON.stringify(this.rezzoForm.value));
    }
  }

  onMakeReservationClick() {
    this.makeReservationClick.emit()
    //add confirmation
  }

  incrementguest() {
    if (this.guest > 26) {
      //add error message
      this.guest = 25
    } else {
      this.guest = ++this.guest;

    }

  }

  decrementguest() {
    if (this.guest < 1) {
      this.guest = 1
      //add error message
    } else {
      this.guest = --this.guest;
    }
  }

}
