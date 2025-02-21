import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-mobile-verification-page',
  imports: [
    FormsModule
  ],
  templateUrl: './mobile-verification-page.component.html',
  styleUrl: './mobile-verification-page.component.scss'
})
export class MobileVerificationPageComponent {
  // Local vars
  fName: string = "";
  lName: string = "";
  password: string = "";

  submitForm() {
    if (this.fName == "" || this.lName == "" || this.password == "") {
      console.log("Form is required");
    } else {
      console.log(this.fName + " " + this.lName);
    }
  }
}
