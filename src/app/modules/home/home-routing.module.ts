import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home.component';
import {DeliveryBoysComponent} from '../delivery-boys/delivery-boys.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {DeliveryManagementComponent} from '../delivery-management/delivery-management.component';
import {ShopManagementComponent} from '../shop-management/shop-management.component';
import {DeliveryBoysModule} from '../delivery-boys/delivery-boys.module';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'delivery-boys', loadChildren: () => DeliveryBoysModule},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'delivery', component: DeliveryManagementComponent},
    {path: 'shops', component: ShopManagementComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
