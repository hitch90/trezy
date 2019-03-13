import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage/homepage.component';
import { CommonModule } from '@angular/common';
import {FrontSharedModule} from "../shared/front-shared.module";
import {CategoriesListComponent} from "./categories-list/categories-list.component";
import {FeaturedProductComponent} from "./featured-product/featured-product.component";
import {ProducerListComponent} from "./producer-list/producer-list.component";

@NgModule({
  imports: [CommonModule, FrontSharedModule],
  declarations: [HomepageComponent, CategoriesListComponent, FeaturedProductComponent, ProducerListComponent],
  exports: [HomepageComponent],
  providers: []
})
export class HomepageModule {}

