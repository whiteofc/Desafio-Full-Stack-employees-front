import { NgModule } from '@angular/core';
import { EmployeeDetailsComponent } from './details/details.component';
import { EmployeeListComponent } from './list/list.component';
import { EmployeeRegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { StatusPipe } from '../../utils/pipes/status.pipe';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { StatusColorPipe } from '../../utils/pipes/status-color.pipe';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

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
    path: ':id/validar',
    component: EmployeeDetailsComponent,
  },
];

@NgModule({
  declarations: [
    EmployeeRegisterComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    StatusPipe,
    StatusColorPipe,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    NgxMaskDirective,
    NgxMaskPipe,
    MatTableModule,
    MatChipsModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule,
  ],
  providers: [
    provideNgxMask(),
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } },
  ],
  bootstrap: [EmployeeDetailsComponent],
})
export class EmployeeModule {}
