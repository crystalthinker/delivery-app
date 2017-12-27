import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryManagementRoutingModule } from './delivery-management-routing.module';
import { DeliveryManagementComponent } from './delivery-management.component';

@NgModule({
  imports: [
    CommonModule,
    DeliveryManagementRoutingModule
  ],
  declarations: [DeliveryManagementComponent]
})
export class DeliveryManagementModule { }
