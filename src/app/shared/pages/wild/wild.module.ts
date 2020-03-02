import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WildRoutingModule } from './wild-routing.module';
import { WildComponent } from './wild.component';


@NgModule({
  declarations: [WildComponent],
  imports: [
    CommonModule,
    WildRoutingModule
  ],
  exports: [WildRoutingModule]
})
export class WildModule { }
