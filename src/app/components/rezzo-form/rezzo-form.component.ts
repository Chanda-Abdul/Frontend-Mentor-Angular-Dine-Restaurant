import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rezzo-form',
  templateUrl: './rezzo-form.component.html',
  styleUrls: ['./rezzo-form.component.scss']
})
export class RezzoFormComponent implements OnInit {
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

  constructor(private route: Router, private router: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onMakeReservationClick() {
    this.makeReservationClick.emit()
    //add confirmation
  }

}
