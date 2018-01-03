import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShopManagementComponent} from './shop-management.component';
import {ShopListComponent} from './shop-list/shop-list.component';
import {ShopEditComponent} from './shop-edit/shop-edit.component';
import {ShopCreateComponent} from './shop-create/shop-create.component';


const routes: Routes = [{
  path: '',
  component: ShopManagementComponent,
  children: [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {
      path: 'list', component: ShopListComponent,
      data: {
        breadcrumb: 'List'
      }
    },
    {
      path: 'create', component: ShopCreateComponent,
      data: {
        breadcrumb: 'Create'
      }
    },
    {path: ':id', component: ShopEditComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopManagementRoutingModule {
}
