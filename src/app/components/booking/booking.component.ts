import {
  Component, OnInit, EventEmitter,
  Output
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  // @Output() ReserveClick = new EventEmitter();
  // @Output() NavHomeClick = new EventEmitter();

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  // onNavHomeClick() {
  //   this.NavHomeClick.emit()
  //   this.router.navigateByUrl('/')

  // }
  // onReserveClick() {
  //   this.ReserveClick.emit()
  //   this.router.navigateByUrl('/')
  // }

}
