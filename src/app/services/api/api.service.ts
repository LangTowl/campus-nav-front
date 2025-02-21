import { Injectable, inject } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {catchError, map, Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // Local vars
  private url: string = 'http://127.0.0.1:5000';

  // Inject http client
  private http = inject(HttpClient);

  constructor() { }

  apiGetRequest<RESPONSE>(params?: HttpParams): Observable<RESPONSE> {
    return this.http.get<RESPONSE>(this.url, { params }).pipe(
      catchError((error) => {
        console.error(error);
        return throwError(() => error);
      })
    );
  }

  apiPostRequest<PAYLOAD, RESPONSE>(payload: PAYLOAD): Observable<RESPONSE> {
    return this.http.post<RESPONSE>(this.url, payload).pipe(
      catchError((error) => {
        console.error(error);
        return throwError(() => error);
      })
    );
  }
}
