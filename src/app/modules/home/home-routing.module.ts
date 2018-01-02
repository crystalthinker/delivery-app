import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {DeliveryManagementComponent} from '../delivery-management/delivery-management.component';
import {DeliveryBoysModule} from '../delivery-boys/delivery-boys.module';
import {ShopManagementModule} from '../shop-management/shop-management.module';
import {DeliveryManagementModule} from '../delivery-management/delivery-management.module';
import {LoggedUserGuard} from '../../core/guards/logged-user.guard';
import {AuthGuard} from '../../core/guards/auth.guard';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  canActivate: [LoggedUserGuard],
  canActivateChild: [AuthGuard],
  children: [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'delivery-boys', loadChildren: () => DeliveryBoysModule},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'delivery', loadChildren: () => DeliveryManagementModule},
    {path: 'shops', loadChildren: () => ShopManagementModule}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
