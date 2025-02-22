import { Injectable, inject } from '@angular/core';
import { ApiService } from '../api/api.service';
import {catchError, map, Observable, of} from 'rxjs';
import {Router} from '@angular/router';

export interface VerifyUser {
  fName: string;
  lName: string;
  password: string;
}

export interface VerifyUserResponse {
  status: number;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserVerificationService {
  // Inject API service
  private apiService: ApiService = inject(ApiService);
  private router: Router = inject(Router);

  // Auth key
  private readonly authKey: string = "user-authentication-status";

  constructor() { }

  // Load user fields
  verifyUser(fName: string, lName: string, password: string): Observable<boolean> {
    // Build payload
    const payload: VerifyUser = {
      fName: fName,
      lName: lName,
      password: password
    }

    // Call apiPostRequest and pass results to processor function
    return this.apiService.apiPostRequest<VerifyUser, VerifyUserResponse>(payload).pipe(
      map((response: VerifyUserResponse) => {
        this.setAuthenticated(true);
        return response.status === 200;
      }),
      catchError(error => {
        console.error(error);
        return of(false);
      })
    );
  }

  // Fetch authentication state
  get authenticationStatus(): boolean {
    return localStorage.getItem(this.authKey) === 'true';
  }

  // Set the authenticated status
  setAuthenticated(isAuthenticated: boolean): void {
    localStorage.setItem(this.authKey, String(isAuthenticated));
  }

  // Un-verify user
  logout(): void {
    localStorage.removeItem(this.authKey);

    this.router.navigate(['/']);

    console.log("Bye Bye!");
  }
}
