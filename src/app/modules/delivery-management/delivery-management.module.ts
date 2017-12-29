import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryManagementRoutingModule } from './delivery-management-routing.module';
import { DeliveryManagementComponent } from './delivery-management.component';
import {DeliveryService} from '../../core/services/delivery/delivery.service';
import { DeliveryCreateComponent } from './delivery-create/delivery-create.component';
import { DeliveryEditComponent } from './delivery-edit/delivery-edit.component';
import { DeliveryListComponent } from './delivery-list/delivery-list.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    DeliveryManagementRoutingModule,
    SharedModule
  ],
  declarations: [DeliveryManagementComponent, DeliveryCreateComponent, DeliveryEditComponent, DeliveryListComponent],
  providers: [DeliveryService]
})
export class DeliveryManagementModule { }
