import { Component, OnInit } from '@angular/core';
import { MENU } from 'src/app/menu-data';


export interface MenuItem {
  id?: number;
  title: string;
  description: string;
  imageTitle?: string;
  mobileImage: string;
  tabletDesktopImage: string;
}


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
