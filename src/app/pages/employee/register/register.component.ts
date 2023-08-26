import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { KnowledgmentService } from '../../../services/knowledgment.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'employee-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class EmployeeRegisterComponent implements OnInit {
  userName = '';

  knowledgments: any;

  validated = false;

  registred = false;

  employeeForm = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required, Validators.maxLength(100)],
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    cpf: new FormControl('', {
      validators: [Validators.required, Validators.maxLength(11)],
    }),
    phone: new FormControl(''),
    knowledgmentIds: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(3),
      ],
    }),
  });

  get name() {
    return this.employeeForm.get('name');
  }

  get email() {
    return this.employeeForm.get('email');
  }

  get cpf() {
    return this.employeeForm.get('cpf');
  }

  get knowledgmentIds() {
    return this.employeeForm.get('knowledgmentIds');
  }

  constructor(
    private employeeService: EmployeeService,
    private knowledgmentService: KnowledgmentService,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar
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
    if (this.employeeForm.invalid) {
      console.log(this.employeeForm);
      this.validated = true;
      return;
    }
    this.employeeService.createEmployee(this.employeeForm.value).subscribe({
      complete: () => {
        this.snackbar.open('Funcionário criado com sucesso!', 'OK', {
          duration: 3000,
        });
        this.employeeForm.reset();
        this.registred = true;
      },
      error: (err) => {
        console.log(err);
        var errorMessage = '';
        switch (err.error.error.code) {
          case '23505':
            errorMessage = 'CPF já cadastrado';
            break;
          default:
            errorMessage = 'Erro ao cadastrar funcionário';
        }

        if (err.error.error.message) {
          errorMessage = err.error.error.message[0].isCPF;
        }

        this.snackbar.open(errorMessage, 'error', {
          duration: 3000,
        });

        console.log(err);
      },
    });
  }
}
