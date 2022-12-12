import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BookingComponent } from './components/booking/booking.component';
import { HeroComponent } from './components/home/hero/hero.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { EventSliderComponent } from './components/home/event-slider/event-slider.component';

import { HeaderComponent } from './components/home/header/header.component';
import { RezzoFormComponent } from './components/booking/rezzo-form/rezzo-form.component';
import { MenuPreviewComponent } from './components/home/menu-preview/menu-preview.component';
import { PictureResponsiveComponent } from './components/shared/picture-responsive/picture-responsive.component';
import { EventsComponent } from './components/home/events/events.component';
import { AboutComponent } from './components/home/about/about.component';




const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'booking', component: BookingComponent }];

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    BookingComponent,
    EventSliderComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    RezzoFormComponent,
    MenuPreviewComponent,
    PictureResponsiveComponent,
    EventsComponent,
    AboutComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
