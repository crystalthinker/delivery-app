import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DeliveryboyViewComponent} from './deliveryboy-view.component';
import {DeliveryboyDashboardComponent} from './deliveryboy-dashboard/deliveryboy-dashboard.component';

const routes: Routes = [{
    path: '',
    component: DeliveryboyViewComponent,
    children: [
        {path: '', component: DeliveryboyDashboardComponent}
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryboyViewRoutingModule { }
