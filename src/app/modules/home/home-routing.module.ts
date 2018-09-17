import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {DeliveryManagementComponent} from '../delivery-management/delivery-management.component';
import {DeliveryBoysModule} from '../delivery-boys/delivery-boys.module';
import {ShopManagementModule} from '../shop-management/shop-management.module';
import {DeliveryManagementModule} from '../delivery-management/delivery-management.module';
import {LoggedUserGuard} from '../../core/guards/logged-user.guard';
import {DeliveryboyViewModule} from '../deliveryboy-view/deliveryboy-view.module';
import {RoleGuard} from '../../core/guards/role.guard';
import {LockGuard} from '../../core/guards/lock.guard';
import {DeliveryboyRoleGuard} from '../../core/guards/deliveryboy-role.guard';
import {LockedModule} from '../locked/locked.module';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  canActivate: [LoggedUserGuard],
  children: [
    {
      path: 'locked-page',
      loadChildren: '../locked/locked.module#LockedModule',
      canActivate: [LockGuard]
    },
    {
      path: 'delivery-boys',
      loadChildren: '../delivery-boys/delivery-boys.module#DeliveryBoysModule',
      canActivate: [RoleGuard],
      data: {
        breadcrumb: 'Delivery Boys'
      }
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
      canActivate: [RoleGuard],
      data: {
        breadcrumb: 'Dashboard'
      }
    },
    {
      path: 'deliveryboy-dashboard',
      loadChildren: '../deliveryboy-view/deliveryboy-view.module#DeliveryboyViewModule',
      canActivate: [DeliveryboyRoleGuard],
      data: {
        breadcrumb: 'Delivery Boy'
      }
    },
    {
      path: 'delivery',
      loadChildren: '../delivery-management/delivery-management.module#DeliveryManagementModule',
      canActivate: [RoleGuard],
      data: {
        breadcrumb: 'Delivery'
      },
    },
    {
      path: 'shops', loadChildren: '../shop-management/shop-management.module#ShopManagementModule',
      canActivate: [RoleGuard],
      data: {
        breadcrumb: 'Shops'
      },
    }
  ],
  data: {
    breadcrumb: 'App'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
