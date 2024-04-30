import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRoute } from '../ApiRoute/api-route';

@Injectable({
  providedIn: 'root'
})
export class SupervisorService {

    constructor(private http: HttpClient){}

    getSupervisor(): Observable<any[]> {
      return this.http.get<any[]>(ApiRoute.LIST_OF_SUPERVISOR);
    }

    // Method to delete a supervisor
deleteSupervisor(supervisorId: number): Observable<any> {
  return this.http.delete<any>(`${ApiRoute.DELETE_SUPERVISOR}/${supervisorId}`);
}

updateSupervisor(workerId: number, data: any): Observable<any> {
  return this.http.put<any>(`${ApiRoute.UPDATE_SUPERVISOR}/${workerId}`, data);
}
}
