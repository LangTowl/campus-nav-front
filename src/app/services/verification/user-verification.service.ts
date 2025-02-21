import { Injectable, inject } from '@angular/core';
import {ApiService} from '../api/api.service';

export interface VerifyUser {
  fName: string;
  lName: string;
  password: string;
}

export interface VerifyUserResponse {
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
  verifyUser(fName: string, lName: string, password: string) {
    // Build payload
    const payload: VerifyUser = {
      fName: fName,
      lName: lName,
      password: password
    }

    this.apiService.apiPostRequest<VerifyUser, VerifyUserResponse>(payload).subscribe(response => {
        console.log(response.message);
      }
    );
  }
}
