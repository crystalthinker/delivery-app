import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShopManagementComponent} from './shop-management.component';


const routes: Routes = [
  {path: 'shops', component: ShopManagementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopManagementRoutingModule { }
