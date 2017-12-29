import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTableComponent } from './list-table/list-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListTableComponent],
  exports: [ListTableComponent]
})
export class SharedModule { }
