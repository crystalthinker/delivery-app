import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DeliveryboyViewComponent} from './deliveryboy-view.component';
import {DeliveryboyDashboardComponent} from './deliveryboy-dashboard/deliveryboy-dashboard.component';
import {DeliveryboyDetailsComponent} from './deliveryboy-details/deliveryboy-details.component';

const routes: Routes = [{
    path: '',
    component: DeliveryboyViewComponent,
    children: [
        {
            path: '', component: DeliveryboyDashboardComponent,
            data: {
              breadcrumb: 'Delivery Boy'
            },
        },
        {path: 'assignment-details/:id', component: DeliveryboyDetailsComponent}
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryboyViewRoutingModule { }
