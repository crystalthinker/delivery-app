import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DeliveryBoysComponent} from './delivery-boys.component';
import {DeliveryboyListComponent} from './deliveryboy-list/deliveryboy-list.component';
import {DeliveryboyEditComponent} from './deliveryboy-edit/deliveryboy-edit.component';
import {DeliveryboyCreateComponent} from './deliveryboy-create/deliveryboy-create.component';

const routes: Routes = [{
  path: '',
  component: DeliveryBoysComponent,
  children: [
    {
      path: '', component: DeliveryboyListComponent,
      data: {
        breadcrumb: 'List'
      },
    },
    {
      path: 'create', component: DeliveryboyCreateComponent,
      data: {
        breadcrumb: 'Create'
      },
    },
    {path: 'detail/:id', component: DeliveryboyEditComponent,
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryBoysRoutingModule {
}
