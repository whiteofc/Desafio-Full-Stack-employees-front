import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './pages/employee/list/list.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/employee/employee.module').then((m) => m.EmployeeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
