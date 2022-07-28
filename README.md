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
- [ ] See hover states for all interactive elements throughout the site
- [x] See the correct content for the Family Gatherings, Special Events, and Social Events section when the user clicks each tab
- [ ] Receive an error message when the booking form is submitted if:
  - [ ] The `Name` or `Email Address` fields are empty should show "This field is required"
  - [ ] The `Email Address` is not formatted correctly should show "Please use a valid email address"
  - [ ] Any of the `Pick a date` or `Pick a time` fields are empty should show "This field is incomplete"

### Screenshot

![](./src/assets/preview.jpg)

<!-- Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above. -->



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
- <b>Sass/CSS</b> custom properties
  - 😘 <b>[fxLayout API](https://github.com/angular/flex-layout/wiki/fxLayout-API)</b> Angular Flexbox API
  - <b>Mobile-first</b> workflow
- Semantic <b>HTML5</b> markup
- <b>Figma</b>

### What I learned

<!-- Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge. -->

- While building this project I learned more about <b>Figma</b>, apparently most of the <b>CSS</b> variables and styles may be available in your <b>Figma</b> file, which saves SO much time. Who knew? 😋
- This is also one of my first "real" projects using <b>Angular</b>, <s>overall everything went very smoothly, and I enjoy working with <b>Angular</b>. <b>Angular</b>, it seems much more intuitive and organized than <b>React</b>🤡</s>.

Please see below, for a code snippet, of the Angular Reactive Form that actually broke my soul. I will not be elaborating 👉🏾 👈🏾

#### `rezzo-form.component.html`

```html
<form class="rezForm"
  [formGroup]="rezzoForm"
  (ngSubmit)="onSubmitForm()"
  fxLayout="column"
  fxLayoutAlign="space-evenly center"
  fxLayoutGap="20px">

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
      
      <img src="../../../assets/images/icons/icon-minus.svg"
        (click)="decrementGuestCount()" />
          {{guests[selectedGuestCount-1]}}
      <img src="../../../assets/images/icons/icon-plus.svg"
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
  months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  ...
  guests: string[] = ['1 person', '2 people', '3 people', '4 people', '5 people', '6 people', '7 people', '8 people', '9 people', '10 people'];
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
- [ ] Add an authentication option, where a manager/admin can login with a password and
  - [ ] view/edit menu options
  - [ ] view/edit menu event options
  - [ ] view/edit menu reservations
- [ ] add about chef/restaraunt section/page
- [ ] add menu component
- [ ] add event booking component

### Useful resources

- 🙌🏾 [Angular Reactive Forms in 10 Minutes](https://youtu.be/MMP_OcjWNQo) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.
- [/angular/flex-layout](https://github.com/angular/flex-layout) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Udemy: Angular (Full App) with Angular Material, Angularfire & NgRx Created by Maximilian Schwarzmüller](https://www.udemy.com/share/101WvC3@iwU-zs0EjLuBHrh2IFqrITl0TXzocf5BeqTXM5rBHhVGmHco65hhIW8VnrsMxYA=/) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.
- [Managing Image Breakpoints With Angular](https://www.smashingmagazine.com/2019/02/image-breakpoints-angular/) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [SelectControlValueAccessor](https://angular.io/api/forms/SelectControlValueAccessor) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.
- [Using forms for user input](https://angular.io/start/start-forms) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Angular 13 Select Dropdown with Reactive Forms Examples](https://www.positronx.io/angular-select-dropdown-with-reactive-forms-examples/) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- Frontend Mentor - [@Chanda-Abdul](https://www.frontendmentor.io/profile/Chanda-Abdul)
- Website - [Chanda Codes](https://chandacodes.com/)
- GitHub - [github.com/Chanda-Abdul](https://github.com/Chanda-Abdul)

## Acknowledgments
