import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

// Components
import {MainNavComponent} from './component/main-nav/main-nav.component';
import {FooterComponent} from './component/footer/footer.component';
import {SocialShareComponent} from './component/social-share/social-share.component';
import {MainHeaderComponent} from "./component/main-header/main-header.component";
import { FilterCategoryComponent } from './component/filter-category/filter-category.component';


@NgModule({
  declarations: [
    FooterComponent, SocialShareComponent,
    MainHeaderComponent, MainNavComponent, FilterCategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    FooterComponent, SocialShareComponent,
    MainHeaderComponent, MainNavComponent, FilterCategoryComponent
  ]
})
export class SharedModule {
}
