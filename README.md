# Frontend Mentor - Dine Website Challenge solution

![](./src/assets/preview.jpg)

This is a solution to the [Dine Website Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/dine-restaurant-website-yAt7Vvxt7). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- [ ] View the optimal layout for each page depending on their device's screen size
  - [x] Mobile, < 600px
  - [ ] Tablet, 600px+
  - [ ] Desktop, 800px+
- [x] See hover states for all interactive elements throughout the site
- [x] See the correct content for the Family Gatherings, Special Events, and Social Events section when the user clicks each tab
- [ ] Receive an error message when the booking form is submitted if:
  - [ ] The `Name` or `Email Address` fields are empty should show "This field is required"
  - [ ] The `Email Address` is not formatted correctly should show "Please use a valid email address"
  - [ ] Any of the `Pick a date` or `Pick a time` fields are empty should show "This field is incomplete"

### Screenshot

![](./src/assets/preview.jpg)



### Links

- Solution URL: [Github Solution](https://github.com/Chanda-Abdul/Frontend-Mentor-Angular-Dine-Restaurant-Website-Challenge)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- <b>[Angular](https://angular.io/)</b> (<b>JavaScript</b> framework)
  - Reactive Forms 😭
  - TypeScript
  - JavaScript
  - <s>[Angular Material](https://material.angular.io/)</s>
- <b>Figma</b>
- <b>Sass/CSS</b> custom properties
  - <s><b>[fxLayout API](https://github.com/angular/flex-layout/wiki/fxLayout-API)</b> Angular Flexbox API</s>
  - <b>Mobile-first</b> workflow
- Semantic <b>HTML5</b> markup


### What I learned


<!-- - While building this project I learned more about <b>Figma</b>, apparently most of the <b>CSS</b> variables and styles may be available in your <b>Figma</b> file, which saves SO much time. Who knew? 😋
- This is also one of my first "real" projects using <b>Angular</b>, <s>overall everything went very smoothly, and I enjoy working with <b>Angular</b>. <b>Angular</b>, it seems much more intuitive and organized than <b>React</b>🤡</s>.
- Please see below, for a code snippet, of the Angular Reactive Form that actually broke my soul. I will not be elaborating 👉🏾 👈🏾 -->

#### `rezzo-form.component.html`
```html
    <form class="rezForm"
      [formGroup]="rezzoForm"
      (ngSubmit)="onSubmitForm()"
      >

        <input type="text"
          placeholder="Name"
          formControlName="name"
          >
            ...

            <h3>Pick a Date</h3>
              ...
          
          <select 
              formControlName="month"
              type="text"
              (change)="selectMonth($event)">
                
                <option disabled>MM</option>
                <option *ngFor="let month of months"
                  [ngValue]="month">
                  {{ month }}
                  </option>
              </select>
              ...
          
          <img src="/assets/images/icons/icon-minus.svg"
            (click)="decrementGuestCount()" />
              {{guests[selectedGuestCount-1]}}
          <img src="/assets/images/icons/icon-plus.svg"
          (click)="incrementGuestCount()" />
            
            ...
      
      <button 
          class="on-light"
          [disabled]="!rezzoForm.valid"
          type="submit">
          Make Reservation
        </button>
      </form>
```
#### `rezzo-form.component.ts`
```js
    import { FormBuilder, FormGroup, } from '@angular/forms';

    ...

    export class RezzoFormComponent implements OnInit {
      rezzoForm: FormGroup;
      ...
      months: string[] = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
        'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
        ];
      ...
      guests: string[] = [
        '1 person', '2 people', '3 people', '4 people', '5 people', 
        '6 people', '7 people', '8 people', '9 people', '10 people'
        ];
      selectedGuestCount: number = 4;
      ...

      constructor(private fb: FormBuilder) { }

      ngOnInit(): void {
        this.initializeForm();
      }

      initializeForm(): void {
        this.rezzoForm = this.fb.group({
          ...
          month: 'MM',
          ...
          meridian: 'PM',
          guests: this.guests[this.selectedGuestCount + 1],
        })
      };

      decrementGuestCount() {
        if (this.selectedGuestCount > 1) {
          this.selectedGuestCount = this.selectedGuestCount - 1
        }
      }
      incrementGuestCount() {
        ...
      }

      onSubmitForm() {
        ...
      }

      selectMonth(event): void {
        this.rezzoForm.patchValue({
          month: event.target.value
        })
      }
      ...
    }
```


### Continued development

- [ ] Add animations



#### Features to Add
##### Authenticate/Authorization with ability to update
- [ ] Add authentication /Authorization
- [ ] Login/logout, with a password, for managers/admins so that they can update menu options, reservations, and events
  - [ ] view/edit menu options
  - [ ] view/edit menu event options
  - [ ] view/edit menu reservations
- [ ] button? reset to default menu/event data default. for testing purposes
##### Authenticate/Authorization with ability to view only
- [ ] add a view only option for admins to view menu, reservations, and events

##### menu page
- [ ] add menu component to show list of all current offerings.
<!-- many resturaunt sites have a menu for users to view. -->
##### About page
- [ ] add about chef/restaraunt section/page

##### Event Booking Component
- [ ] add event booking component so that users can book events, similar to the reservation component
### Useful resources

- [Reactive forms](https://angular.io/guide/reactive-forms) - This helped me... I really liked this pattern and will use it going forward.
- 🙌🏾 [Angular Reactive Forms in 10 Minutes](https://youtu.be/MMP_OcjWNQo) - This is an amazing YouTube which helped me finally understand how to build Reactive Forms with Angular. I'd recommend it to anyone still learning this concept.
- [/angular/flex-layout](https://github.com/angular/flex-layout) - <s>This helped me because it's much easier to incorporate <b>Flexbox</b> into a <b>template</b> than a <b>CSS</b> stylesheet 🤔 . I really liked this pattern and will use it going forward.</s> Now, I prefer to create flex styles with <i>Sass</i>
- [Udemy: Angular (Full App) with Angular Material, Angularfire & NgRx Created by Maximilian Schwarzmüller](https://www.udemy.com/share/101WvC3@iwU-zs0EjLuBHrh2IFqrITl0TXzocf5BeqTXM5rBHhVGmHco65hhIW8VnrsMxYA=/) - Great Tutorials. Would Recommend.
- [Managing Image Breakpoints With Angular](https://www.smashingmagazine.com/2019/02/image-breakpoints-angular/) - Yes. And then I moved the resonsive images into a seperate component👌🏽
<!-- - <s>[SelectControlValueAccessor](https://angular.io/api/forms/SelectControlValueAccessor) - This is NOT an amazing article which DID NOT help me finally understand selectors/options/reactive forms. I'd NEVER EVER recommend it to anyone still learning this concept.</s> -->
- [Using forms for user input](https://angular.io/start/start-forms) - I guess.
- [Angular 13 Select Dropdown with Reactive Forms Examples](https://www.positronx.io/angular-select-dropdown-with-reactive-forms-examples/) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- Frontend Mentor - [@Chanda-Abdul](https://www.frontendmentor.io/profile/Chanda-Abdul)
- Website - [Chanda Codes](https://chandacodes.com/)
- GitHub - [github.com/Chanda-Abdul](https://github.com/Chanda-Abdul)

## Acknowledgments
