import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EVENTS } from 'src/app/event-data';
import { EventItem } from 'src/app/event.model';


@Component({
  selector: 'app-event-slider',
  templateUrl: './event-slider.component.html',
  styleUrls: ['./event-slider.component.scss']
})
export class EventSliderComponent implements OnInit {
  events: EventItem[] = EVENTS;
  eventIndex = 0;
  selectedEvent?: EventItem = this.events[this.eventIndex];
  imageTitle: string;
  @Output() bookTableClick = new EventEmitter();

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.eventCarousel();
  }

  // eventCarousel() {
  //   TO DO(Bonus) => add observable to rotate through events every so often
  //   if (this.eventIndex < this.events.length - 1) {
  //     setTimeout(() => {
  //       this.eventIndex++;
  //       console.log(this.eventIndex, this.selectedEvent, "Hello from setTimeout");
  //     }, 1000);
  //   }
  // }


  onSelect(events: EventItem): void {
    this.selectedEvent = events;

  }

  onBookTableClick() {
    this.bookTableClick.emit()
    this.router.navigateByUrl('/booking')
  }
}
