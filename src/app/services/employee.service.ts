import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../pages/employee/list/list.component';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  createEmployee(employee: any) {
    return this.http.post('http://localhost:3000/employees/create', employee);
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('http://localhost:3000/employees');
  }

  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`http://localhost:3000/employees/${id}`);
  }

  approveEmployee(id: number, valid: boolean) {
    return this.http.post(`http://localhost:3000/employees/approve/${id}/`, {
      valid,
    });
  }
}
