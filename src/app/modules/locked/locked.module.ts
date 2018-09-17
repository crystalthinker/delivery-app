import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LockedRoutingModule } from './locked-routing.module';
import { ViewComponent } from './view/view.component';

@NgModule({
  imports: [
    CommonModule,
    LockedRoutingModule
  ],
  declarations: [ViewComponent]
})
export class LockedModule { }
