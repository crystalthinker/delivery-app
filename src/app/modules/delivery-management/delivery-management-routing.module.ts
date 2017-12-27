import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DeliveryManagementComponent} from './delivery-management.component';

const routes: Routes = [
  {path: 'delivery', component: DeliveryManagementComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryManagementRoutingModule { }
