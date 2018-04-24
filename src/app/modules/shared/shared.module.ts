import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTableComponent } from './list-table/list-table.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import {RouterModule} from '@angular/router';
import {DataTableModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ListTableComponent, BreadcrumbComponent],
  exports: [ListTableComponent, BreadcrumbComponent, DataTableModule]
})
export class SharedModule { }
