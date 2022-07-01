import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() bgcolor!: string;
  @Input() textcolor!: string;
  @Input() buttonClass!: string;
  @Output() bookTableClick = new EventEmitter();

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onBookTableClick() {
    this.bookTableClick.emit()
    this.router.navigateByUrl('/booking')
  }



}
