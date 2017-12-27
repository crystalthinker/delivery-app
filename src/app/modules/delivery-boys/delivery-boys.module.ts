import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryBoysRoutingModule } from './delivery-boys-routing.module';
import { DeliveryBoysComponent } from './delivery-boys.component';

@NgModule({
  imports: [
    CommonModule,
    DeliveryBoysRoutingModule
  ],
  declarations: [DeliveryBoysComponent]
})
export class DeliveryBoysModule { }
