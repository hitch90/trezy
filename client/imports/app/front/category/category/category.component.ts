import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../../../../imports/models/product';
import { CategoryService, ProductService } from '../../../_core/_services';
import { Category } from '../../../../../../imports/models/categories';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy {
  product: Product;
  category: Category;
  subcategories$: Subscription;
  subcategories: Category[] = [];
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.subcategories = [];
      this.category = null;
      this.get(params.id);
      this.getSubCategories(params.id);
    });
  }
  ngOnDestroy(): void {
    if (this.subcategories$) {
      this.subcategories$.unsubscribe();
    }
  }

  get(id) {
    this.categoryService.get(id).subscribe(data => {
      this.category = data;
    });
  }
  getSubCategories(id) {
    this.subcategories$ = this.categoryService.getSub(id).subscribe(data => {
      this.subcategories.push(data);
    });
  }
}
