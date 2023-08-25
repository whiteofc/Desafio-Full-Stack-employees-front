import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeDetailsComponent } from './details/details.component';
import { EmployeeListComponent } from './list/list.component';
import { EmployeeRegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';

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
  imports: [RouterModule.forChild(routes)],
  providers: [],
  bootstrap: [EmployeeDetailsComponent],
})
export class EmployeeModule {}
