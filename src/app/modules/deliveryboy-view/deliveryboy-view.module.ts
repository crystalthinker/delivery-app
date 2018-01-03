import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryboyViewRoutingModule } from './deliveryboy-view-routing.module';
import { DeliveryboyViewComponent } from './deliveryboy-view.component';
import { DeliveryboyDashboardComponent } from './deliveryboy-dashboard/deliveryboy-dashboard.component';
import { DeliveryboyProfileComponent } from './deliveryboy-profile/deliveryboy-profile.component';
import { DeliveryboyAssignmentsComponent } from './deliveryboy-assignments/deliveryboy-assignments.component';
import {DeliveryBoysService} from '../../core/services/delivery-boys/delivery-boys.service'

@NgModule({
  imports: [
    CommonModule,
    DeliveryboyViewRoutingModule
  ],
  declarations: [DeliveryboyViewComponent, DeliveryboyDashboardComponent, DeliveryboyProfileComponent, DeliveryboyAssignmentsComponent],
  providers: [DeliveryBoysService]
})
export class DeliveryboyViewModule { }
