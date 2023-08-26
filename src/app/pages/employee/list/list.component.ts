import { Component } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { Router } from '@angular/router';

export interface Employee {
  id: number;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  knowledgments: string[];
}

@Component({
  selector: 'employee-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class EmployeeListComponent {
  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'cpf',
    'phone',
    'status',
    'knowledgments',
    'actions',
  ];

  employees: any | undefined = undefined;

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {
    this.employeeService.getEmployees().subscribe({
      next: (v) => (this.employees = v),
    });
  }

  goToDetails(employeeId: any) {
    this.router.navigate([`${employeeId}/validar`]);
  }
}
