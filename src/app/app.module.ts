import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BookingComponent } from './components/booking/booking.component';
import { HeroComponent } from './components/hero/hero.component';
import { FooterComponent } from './components/footer/footer.component';
import { EventSliderComponent } from './components/event-slider/event-slider.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { RezzoFormComponent } from './components/rezzo-form/rezzo-form.component';
import { MenuPreviewComponent } from './components/menu-preview/menu-preview.component';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'booking', component: BookingComponent }];

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ButtonComponent,
    BookingComponent,
    EventSliderComponent,
    HomeComponent,
    FooterComponent, HeaderComponent, RezzoFormComponent, MenuPreviewComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
