import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRoute } from '../ApiRoute/api-route';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  constructor(private http:HttpClient) { }

  getWorkers(): Observable<any[]> {
    return this.http.get<any[]>(ApiRoute.LIST_OF_WORKER);
  }

  // Method to delete a worker
deleteWorker(workerId: number): Observable<any> {
  return this.http.delete<any>(`${ApiRoute.DELETE_WORKER}/${workerId}`);
}

updateWorker(workerId: number, data: any): Observable<any> {
  return this.http.put<any>(`${ApiRoute.UPDATE_WORKER}/${workerId}`, data);
}
  
}
