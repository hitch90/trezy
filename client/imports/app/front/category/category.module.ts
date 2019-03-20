import { NgModule } from '@angular/core';
import { CategoryComponent } from './category/category.component';
import { CommonModule } from '@angular/common';
import { FrontSharedModule } from '../shared/front-shared.module';
import {
  MatFormFieldModule,
  MatIconModule,
  MatInputModule
} from '@angular/material';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FrontSharedModule,
    MatIconModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  declarations: [
    CategoryComponent,
    CategoriesListComponent,
    ProductsListComponent
  ],
  exports: [CategoryComponent],
  providers: []
})
export class CategoryModule {}
