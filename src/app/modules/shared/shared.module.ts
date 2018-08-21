import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTableComponent } from './list-table/list-table.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ListTableComponent, BreadcrumbComponent],
  exports: [ListTableComponent, BreadcrumbComponent]
})
export class SharedModule { }
