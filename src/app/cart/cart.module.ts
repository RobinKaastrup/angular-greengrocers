import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { TotalComponent } from './total/total.component';



@NgModule({
  declarations: [
    ListComponent,
    TotalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent,
    TotalComponent
  ]
})
export class CartModule { }
