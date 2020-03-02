import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExpertiseComponent} from "./expertise.component";


const routes: Routes = [
  {
    path: '',
    component: ExpertiseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpertRoutingModule { }
