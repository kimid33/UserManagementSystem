import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRoute } from '../ApiRoute/api-route';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  loginAdmin(adminData:any):Observable<any>{
    return this.http.post(ApiRoute.SIGN_IN,adminData);
   }
}
