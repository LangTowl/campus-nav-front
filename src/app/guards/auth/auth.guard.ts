import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {UserVerificationService} from '../../services/verification/user-verification.service';


export const authGuard: CanActivateFn = () => {
  const userVerificationService = inject(UserVerificationService);
  const router: Router = inject(Router);

  if (userVerificationService.fetchAuthenticationStatus()) {
    return true;
  } else {
    console.log("Get back ye' foul intruder!");
    router.navigate(['/']);
    return false;
  }
};
