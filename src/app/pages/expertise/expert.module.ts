import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpertRoutingModule } from './expert-routing.module';
import { ExpertiseComponent } from './expertise.component';


// @ts-ignore
@NgModule({
  declarations: [ExpertiseComponent],
  imports: [
    CommonModule,
    ExpertRoutingModule
  ]
})
export class ExpertModule {
}
