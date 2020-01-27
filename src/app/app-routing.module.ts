import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { ModelsComponent } from '../app/user/modelz/models.component';
import { EmployeeComponent } from '../app/employer/employee/employee.component';


const routes : Routes = [
  {path : '', component:HomeComponent},
  {path : 'models', component:ModelsComponent},
  {path : 'employee', component:EmployeeComponent}

];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
