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
  AmPm: any = ['AM', 'PM'];
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
      amOrPm: new FormControl( ''),
    }),
    guests: new FormControl('')
   
  });

  constructor(private route: Router, private router: ActivatedRoute, public fb: FormBuilder) { }

  ngOnInit(): void {
  }

  changeCity(e: any) {
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

}
