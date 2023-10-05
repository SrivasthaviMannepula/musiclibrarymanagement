

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  registerUser(userForm: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, userForm);
  }
}
