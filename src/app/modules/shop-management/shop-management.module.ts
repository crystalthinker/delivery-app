import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopManagementRoutingModule } from './shop-management-routing.module';
import { ShopManagementComponent } from './shop-management.component';
import {ShopsService} from '../../core/services/shops/shops.service';

@NgModule({
  imports: [
    CommonModule,
    ShopManagementRoutingModule
  ],
  declarations: [ShopManagementComponent],
  providers: [ShopsService]
})
export class ShopManagementModule { }
