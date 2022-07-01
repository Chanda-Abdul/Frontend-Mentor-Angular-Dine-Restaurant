import {
  Component, OnInit, EventEmitter,
  Output
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() bookTableClick = new EventEmitter();


  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onBookTableClick() {
    this.bookTableClick.emit()
    this.router.navigateByUrl('/booking')
  }
}
