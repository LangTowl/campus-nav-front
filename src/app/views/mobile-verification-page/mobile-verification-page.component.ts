import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {UserVerificationService} from '../../services/verification/user-verification.service';

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

  // Inject UserVerificationService
  userVerificationService: UserVerificationService = inject(UserVerificationService);

  submitForm() {
    if (this.fName == "" || this.lName == "" || this.password == "") {
      console.log("Form is required");
    } else {
      console.log("Attempting to verify " + this.fName + " " + this.lName + "...");

      this.userVerificationService.verifyUser(this.fName, this.lName, this.password);
    }
  }
}
