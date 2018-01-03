import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryboyDashboardComponent } from './deliveryboy-dashboard/deliveryboy-dashboard.component';
import { DeliveryboyProfileComponent } from './deliveryboy-profile/deliveryboy-profile.component';
import { DeliveryboyAssignmentsComponent } from './deliveryboy-assignments/deliveryboy-assignments.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DeliveryboyDashboardComponent, DeliveryboyProfileComponent, DeliveryboyAssignmentsComponent]
})
export class DeliveryBoyViewModule { }
