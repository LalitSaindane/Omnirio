import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddEmployeeComponent} from './add-employee/add-employee.component';

const routes: Routes = [
  {
    path:"",
    component:DashboardComponent
  },
  {
    path:"addEmployee",
    component:AddEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
