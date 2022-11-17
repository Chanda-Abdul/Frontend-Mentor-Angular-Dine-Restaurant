import { Component, OnInit } from '@angular/core';
import { MENU } from 'src/app/menu-data';
import { MenuItem } from 'src/app/menu-item.model';




@Component({
  selector: 'app-menu-preview',
  templateUrl: './menu-preview.component.html',
  styleUrls: ['./menu-preview.component.scss']
})
export class MenuPreviewComponent implements OnInit {
  menu: MenuItem[] = MENU;

  constructor() { }

  ngOnInit(): void {
  }

}
