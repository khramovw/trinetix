import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// Modules
import {ServicesRoutingModule} from './services-routing.module';
import {SharedModule} from "../../shared/shared.module";

// Components
import {ServicesComponent} from "./services.component";

@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule
  ]
})
export class ServicesModule {
}
