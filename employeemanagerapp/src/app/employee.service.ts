import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ServiceNameService {
  private apiServerUrl = '';
  constructor(private httpClient: HttpClient) { }
  
  public getEmployees(): Observable<any>{
    return this.httpClient.get<any>(`${this.apiserverUrl}/emploee/all`)
  }
}
