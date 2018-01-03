import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DeliveryManagementComponent} from './delivery-management.component';
import {DeliveryListComponent} from './delivery-list/delivery-list.component';
import {DeliveryCreateComponent} from './delivery-create/delivery-create.component';
import {DeliveryEditComponent} from './delivery-edit/delivery-edit.component';


const routes: Routes = [{
  path: '',
  component: DeliveryManagementComponent,
  children: [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'list', component: DeliveryListComponent,
      data: {
        breadcrumb: 'List'
      }},
    {path: 'create', component: DeliveryCreateComponent,
      data: {
        breadcrumb: 'Create'
      }},
    { path: ':id',
      component: DeliveryEditComponent,
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryManagementRoutingModule { }
