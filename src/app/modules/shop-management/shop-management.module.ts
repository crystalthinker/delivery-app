import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopManagementRoutingModule } from './shop-management-routing.module';
import { ShopManagementComponent } from './shop-management.component';

@NgModule({
  imports: [
    CommonModule,
    ShopManagementRoutingModule
  ],
  declarations: [ShopManagementComponent]
})
export class ShopManagementModule { }
