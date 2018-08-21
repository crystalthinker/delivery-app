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
    {
      path: '', component: ShopListComponent,
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
    {path: 'detail/:id', component: ShopEditComponent,
     data: {
      breadcrumb: 'Detail'
     }
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopManagementRoutingModule {
}
