import { NgModule } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { CommonModule } from '@angular/common';
import { FrontSharedModule } from '../shared/front-shared.module';
import { ProductAttributesComponent } from './attributes/attributes.component';
import { MatIconModule } from '@angular/material';
import { ProductProducerComponent } from './producer/producer.component';
import { ProductCategoryComponent } from './category/category.component';
import {ProductTestsListComponent} from "./tests-list/tests-list.component";

@NgModule({
  imports: [CommonModule, FrontSharedModule, MatIconModule],
  declarations: [
    ProductComponent,
    ProductAttributesComponent,
    ProductProducerComponent,
    ProductCategoryComponent,
ProductTestsListComponent
  ],
  exports: [ProductComponent],
  providers: []
})
export class ProductModule {}
