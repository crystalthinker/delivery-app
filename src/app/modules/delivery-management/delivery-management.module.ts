import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryManagementRoutingModule } from './delivery-management-routing.module';
import { DeliveryManagementComponent } from './delivery-management.component';
import {DeliveryService} from '../../core/services/delivery/delivery.service';

@NgModule({
  imports: [
    CommonModule,
    DeliveryManagementRoutingModule
  ],
  declarations: [DeliveryManagementComponent],
  providers: [DeliveryService]
})
export class DeliveryManagementModule { }
