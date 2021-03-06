import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiServerUrl = '';
  constructor(private httpClient: HttpClient) { }
  
  public getEmployees(): Observable<Employee>{
    return this.httpClient.get<any>(`${this.apiServerUrl}/employee/all`);
  }

  public addEmploye(employee: Employee): Observable<Employee>{
    return this.httpClient.post<Employee>(`${this.apiServerUrl}/employee/add`, employee);
  }

  public updateEmploye(employee: Employee): Observable<Employee>{
    return this.httpClient.put<Employee>(`${this.apiServerUrl}/employee/update`, employee);
  }

  public deleteEmploye(employeeId: number): Observable<void>{
    return this.httpClient.delete<void>(`${this.apiServerUrl}/employee/delete/${employeeId}`);
  }
}
