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
import {DeliveryboyRoleGuard} from '../../core/guards/deliveryboy-role.guard';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  canActivate: [LoggedUserGuard],
  children: [
    {
      path: 'delivery-boys',
      loadChildren: () => DeliveryBoysModule,
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
      loadChildren: () => DeliveryboyViewModule,
      canActivate: [DeliveryboyRoleGuard],
      data: {
        breadcrumb: 'Delivery Boy'
      }
    },
    {
      path: 'delivery',
      loadChildren: () => DeliveryManagementModule,
      canActivate: [RoleGuard],
      data: {
        breadcrumb: 'Delivery'
      },
    },
    {
      path: 'shops', loadChildren: () => ShopManagementModule,
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
