import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DeliveryBoysComponent} from './delivery-boys.component';
import {DeliveryboyListComponent} from './deliveryboy-list/deliveryboy-list.component';
import {DeliveryboyEditComponent} from './deliveryboy-edit/deliveryboy-edit.component';
import {DeliveryboyCreateComponent} from './deliveryboy-create/deliveryboy-create.component';

const routes: Routes = [{
  path: '',
  component: DeliveryBoysComponent,
  children: [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'list', component: DeliveryboyListComponent},
    {path: 'create', component: DeliveryboyCreateComponent},
    {path: ':id', component: DeliveryboyEditComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryBoysRoutingModule { }
