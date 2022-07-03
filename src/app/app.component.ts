import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Frontend Mentor | Angular Dine Restaurant Website Challenge';
  // imagePath;

  // constructor(public breakpointObserver: BreakpointObserver) { }

  // ngOnInit() {
  //   this.breakpointObserver.observe([
  //     Breakpoints.XSmall,
  //     Breakpoints.Small,
  //     Breakpoints.Medium,
  //     Breakpoints.Large,
  //     Breakpoints.XLarge
  //   ]).subscribe(result => {
  //     if (result.breakpoints[Breakpoints.XSmall]) {
  //       // handle XSmall breakpoint
  //     }
  //     if (result.breakpoints[Breakpoints.Small]) {
  //       // handle Small breakpoint
  //     }
  //     if (result.breakpoints[Breakpoints.Medium]) {
  //       // handle Medium breakpoint
  //     }
  //     if (result.breakpoints[Breakpoints.Large]) {
  //       // handle Large breakpoint
  //     }
  //     if (result.breakpoints[Breakpoints.XLarge]) {
  //       // handle XLarge breakpoint
  //     }
  //   });
  // }

}
