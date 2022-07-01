import {
  Component, OnInit, EventEmitter,
  Output
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Output() bookTableClick = new EventEmitter();


  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onBookTableClick() {
    this.bookTableClick.emit()
    this.router.navigateByUrl('/booking')
  }
}
