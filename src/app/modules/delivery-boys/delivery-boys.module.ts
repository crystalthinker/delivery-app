import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryBoysRoutingModule } from './delivery-boys-routing.module';
import { DeliveryBoysComponent } from './delivery-boys.component';
import {DeliveryBoysService} from '../../core/services/delivery-boys/delivery-boys.service';

@NgModule({
  imports: [
    CommonModule,
    DeliveryBoysRoutingModule
  ],
  declarations: [DeliveryBoysComponent],
  providers: [DeliveryBoysService]
})
export class DeliveryBoysModule { }
