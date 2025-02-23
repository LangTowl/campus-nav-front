import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {UserVerificationService} from '../../services/verification/user-verification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-verification-page',
  imports: [
    FormsModule,
  ],
  templateUrl: './mobile-verification-page.component.html',
  styleUrl: './mobile-verification-page.component.scss'
})
export class MobileVerificationPageComponent {
  // Local vars
  fName: string = "First";
  lName: string = "Last";
  password: string = "Password";

  // Inject UserVerificationService
  userVerificationService: UserVerificationService = inject(UserVerificationService);
  router: Router = inject(Router);

  submitForm() {
    if (this.fName == "" || this.lName == "" || this.password == "") {
      console.log("Form is required");
    } else {
      console.log("Attempting to verify " + this.fName + " " + this.lName + "...");

      this.userVerificationService.verifyUser(this.fName, this.lName, this.password)
        .subscribe(successFullLogin => {
          if (successFullLogin) {
            console.log("Successfully verified: " + this.fName + ".");

            this.router.navigate(['/map']);
          } else {
            console.log("Error logged in: " + this.fName + ".");
          }
        });
    }
  }

  checkToken() {
    this.userVerificationService.checkToken();
  }
}
