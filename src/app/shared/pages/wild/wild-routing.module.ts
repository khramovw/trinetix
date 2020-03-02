import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WildComponent} from "./wild.component";


const routes: Routes = [
  {
    path: '',
    component: WildComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WildRoutingModule { }
