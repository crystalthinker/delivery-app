import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopManagementRoutingModule } from './shop-management-routing.module';
import { ShopManagementComponent } from './shop-management.component';
import {ShopsService} from '../../core/services/shops/shops.service';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ShopEditComponent } from './shop-edit/shop-edit.component';
import { ShopCreateComponent } from './shop-create/shop-create.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ShopManagementRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ShopManagementComponent, ShopListComponent, ShopEditComponent, ShopCreateComponent],
  providers: [ShopsService]
})
export class ShopManagementModule { }
