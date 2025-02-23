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
  data: [
    { token: string }
  ]
}

export interface ValidateUserToken {
  header: string;
  fName: string;
  lName: string;
  token: string;
}

export interface ValidateUserTokenResponse {
  status: number;
  message: string;
  newToken: string;
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
  private token: string = "";

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
        this.setAuthenticated(response.data[0].token);

        return response.status === 200;
      }),
      catchError(error => {
        console.error(error);
        return of(false);
      })
    );
  }

  // Fetch authentication state
  fetchAuthenticationStatus(): Observable<boolean> {
    let token = localStorage.getItem(this.authKey);

    console.log("Fetching authentication status...");

    // If token exists
    if (token) {

      console.log("Token exists. Validating...")

      const payload: ValidateUserToken = {
        header: "Authenticate",
        fName: "First",
        lName: "Last",
        token: token
      }

      return this.apiService.apiPostRequest<ValidateUserToken, ValidateUserTokenResponse>(payload).pipe(
        map((response: ValidateUserTokenResponse) => {
          if (response.status === 200) {
            console.log("Token: Valid.");
            return true;
          } else {
            console.log("Token: Invalid.");
            return false;
          }
        })
      );
    } else {
      console.log("Token does not exist.")

      return of(false);
    }
  }

  checkToken() {
    console.log(!!localStorage.getItem(this.authKey));
  }

  // Set the authenticated status
  setAuthenticated(isAuthenticated: string): void {
    console.log("JWT stored -> " + isAuthenticated);
    localStorage.setItem(this.authKey, isAuthenticated);
  }

  // Un-verify user
  logout(): void {
    localStorage.removeItem(this.authKey);

    this.router.navigate(['/']);

    console.log("Bye Bye!");
  }
}
