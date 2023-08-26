import { Component } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'employee-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class EmployeeDetailsComponent {
  employee: any;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar
  ) {
    this.getEmployee();
  }

  getEmployee() {
    this.route.params.subscribe((params: any) => {
      this.employeeService.getEmployee(params.id).subscribe({
        next: (v) => (this.employee = v),
      });
    });
  }

  goToList() {
    this.router.navigate(['registros']);
  }

  approve(valid: any) {
    this.employeeService.approveEmployee(this.employee.id, valid).subscribe({
      complete: () => {
        alert(`Funcionário ${valid ? 'aprovado' : 'reprovado'} com sucesso!`);
        this.goToList();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
