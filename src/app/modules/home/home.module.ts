import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {DeliveryBoysService} from '../../core/services/delivery-boys/delivery-boys.service';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent],
  providers: [DeliveryBoysService]
})
export class HomeModule { }
