import { Component } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { KnowledgmentService } from '../../../services/knowledgment.service';
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

  knowledgments: any;

  searchableFields: any[] = [
    {
      name: 'Nome',
      value: 'name',
    },
    {
      name: 'Email',
      value: 'email',
    },
    {
      name: 'CPF',
      value: 'cpf',
    },
    {
      name: 'Telefone',
      value: 'phone',
    },
  ];

  employees: any | undefined = undefined;

  searchName: string = '';

  searchField = 'name';

  constructor(
    private employeeService: EmployeeService,
    private knowledgmentService: KnowledgmentService,
    private router: Router
  ) {
    this.getEmployees();
    this.getKnowledgments();
  }

  getEmployees() {
    this.employeeService
      .getEmployees(this.searchName, this.searchField)
      .subscribe({
        next: (v) => (this.employees = v),
      });
  }

  getKnowledgments() {
    this.knowledgmentService.getKnowledgments().subscribe({
      next: (v) => (this.knowledgments = v),
    });
  }

  setKnowledgment(e: any) {
    console.log(e);
    if (e.value != undefined) {
      this.employeeService.getEmployees(e.value, 'knowledgmentId').subscribe({
        next: (v) => (this.employees = v),
      });
    } else {
      this.getEmployees();
    }
  }

  goToDetails(employeeId: any) {
    this.router.navigate([`${employeeId}/validar`]);
  }

  search() {
    this.getEmployees();
  }
}
