import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../../../services/employee.service';
import { ActivatedRoute } from '@angular/router';
import { KnowledgmentService } from '../../../services/knowledgment.service';

@Component({
  selector: 'employee-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class EmployeeRegisterComponent implements OnInit {
  userName = '';

  knowledgments: any;

  employeeForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    cpf: new FormControl(''),
    phone: new FormControl(''),
    knowledgmentIds: new FormControl(''),
  });

  constructor(
    private employeeService: EmployeeService,
    private knowledgmentService: KnowledgmentService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params: any) => {
      this.userName = params.nome;
    });
  }

  ngOnInit(): void {
    this.knowledgmentService.getKnowledgments().subscribe({
      next: (v) => (this.knowledgments = v),
    });
  }

  createEmployee() {
    this.employeeService.createEmployee(this.employeeForm.value).subscribe({
      complete: () => {
        alert('Funcionário criado com sucesso!');
        this.employeeForm.reset();
      },
      error: (err) => {
        console.log(this.employeeForm.value);
        alert('Erro ao criar funcionário!');
        console.log(err);
      },
    });
  }
}
