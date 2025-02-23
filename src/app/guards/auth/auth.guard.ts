import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {UserVerificationService} from '../../services/verification/user-verification.service';
import {map} from 'rxjs';


export const authGuard: CanActivateFn = () => {
  const userVerificationService = inject(UserVerificationService);
  const router: Router = inject(Router);

  return userVerificationService.fetchAuthenticationStatus().pipe(
    map(isAuthenticated => {
      if (isAuthenticated) {
        console.log("Permission granted.");
        return true;
      } else {
        console.log("Permission denied.");
        router.navigate(['/']);
        return false;
      }
    })
  );
};
