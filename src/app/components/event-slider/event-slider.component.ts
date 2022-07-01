import {
  Component, OnInit, EventEmitter,
  Output
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EVENTS } from 'src/app/event-data';

export interface EventItem {
  id?: number;
  title: string;
  description: string;
  mobileImage: string;
  tabletDesktopImage: string;
}
@Component({
  selector: 'app-event-slider',
  templateUrl: './event-slider.component.html',
  styleUrls: ['./event-slider.component.scss']
})
export class EventSliderComponent implements OnInit {
  events: EventItem[] = EVENTS;
  @Output() bookTableClick = new EventEmitter();


  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }


  onBookTableClick() {
    this.bookTableClick.emit()
    this.router.navigateByUrl('/booking')
  }
}
