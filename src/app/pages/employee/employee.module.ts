import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeDetailsComponent } from './details/details.component';
import { EmployeeListComponent } from './list/list.component';
import { EmployeeRegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: ':nome/registrar',
    component: EmployeeRegisterComponent,
  },
  {
    path: 'registros',
    component: EmployeeListComponent,
  },
  {
    path: ':nome/validar',
    component: EmployeeDetailsComponent,
  },
];

@NgModule({
  declarations: [
    EmployeeRegisterComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [EmployeeDetailsComponent],
})
export class EmployeeModule {}
