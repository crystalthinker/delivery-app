import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryBoysRoutingModule } from './delivery-boys-routing.module';
import { DeliveryBoysComponent } from './delivery-boys.component';
import {DeliveryBoysService} from '../../core/services/delivery-boys/delivery-boys.service';
import { DeliveryboyListComponent } from './deliveryboy-list/deliveryboy-list.component';
import { DeliveryboyCreateComponent } from './deliveryboy-create/deliveryboy-create.component';
import { DeliveryboyEditComponent } from './deliveryboy-edit/deliveryboy-edit.component';

@NgModule({
  imports: [
    CommonModule,
    DeliveryBoysRoutingModule
  ],
  declarations: [DeliveryBoysComponent, DeliveryboyListComponent, DeliveryboyCreateComponent, DeliveryboyEditComponent],
  providers: [DeliveryBoysService]
})
export class DeliveryBoysModule { }
