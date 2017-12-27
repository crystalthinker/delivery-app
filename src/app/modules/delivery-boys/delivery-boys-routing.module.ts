import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DeliveryBoysComponent} from './delivery-boys.component';

const routes: Routes = [
    {path: 'delivery-boys', component: DeliveryBoysComponent },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryBoysRoutingModule { }
