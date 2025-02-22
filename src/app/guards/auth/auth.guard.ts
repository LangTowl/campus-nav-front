import {CanActivateFn, CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {inject} from '@angular/core';
import {UserVerificationService} from '../../services/verification/user-verification.service';


export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const userVerificationService = inject(UserVerificationService);
  const router: Router = inject(Router);

  if (userVerificationService.authenticationStatus) {
    return true;
  } else {
    console.log("Get back ye' foul intruder!");
    router.navigate(['/']);
    return false;
  }
};
