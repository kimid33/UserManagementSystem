import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRoute } from '../ApiRoute/api-route';

@Injectable({
  providedIn: 'root'
})
export class RegisterationService {

  constructor(private http:HttpClient) { }

  registerUser(userData: any): Observable<any> {
    return this.http.post<any>(ApiRoute.REGISTERATION, userData);
  }
}
