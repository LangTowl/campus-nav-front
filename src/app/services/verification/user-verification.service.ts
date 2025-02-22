import { Injectable, inject } from '@angular/core';
import { ApiService } from '../api/api.service';
import {catchError, map, Observable, of} from 'rxjs';

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
        return response.status === 200;
      }),
      catchError(error => {
        console.error(error);
        return of(false);
      })
    );
  }
}
