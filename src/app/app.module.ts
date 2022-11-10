import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BookingComponent } from './components/booking/booking.component';
import { HeroComponent } from './components/hero/hero.component';
import { FooterComponent } from './components/footer/footer.component';
import { EventSliderComponent } from './components/event-slider/event-slider.component';

import { HeaderComponent } from './components/header/header.component';
import { RezzoFormComponent } from './components/rezzo-form/rezzo-form.component';
import { MenuPreviewComponent } from './components/menu-preview/menu-preview.component';
import { PictureResponsiveComponent } from './components/picture-responsive/picture-responsive.component';



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
    PictureResponsiveComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
