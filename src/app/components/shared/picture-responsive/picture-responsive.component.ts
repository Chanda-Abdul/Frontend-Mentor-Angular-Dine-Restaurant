import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture-responsive',
  templateUrl: './picture-responsive.component.html',
  styleUrls: ['./picture-responsive.component.scss']
})
export class PictureResponsiveComponent implements OnInit {
  @Input() imageTitle: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
