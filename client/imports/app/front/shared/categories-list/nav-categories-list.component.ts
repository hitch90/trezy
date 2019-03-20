import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Category } from '../../../../../../imports/models/categories';
import { CategoryService } from '../../../_core/_services';
import { count, first, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-nav-categories-list',
  templateUrl: './nav-categories-list.component.html',
  styleUrls: ['./nav-categories-list.component.scss']
})
export class NavCategoriesListComponent implements OnInit, OnDestroy {
  categories: Category[] = [];
  categories$: Subscription;
  categoryCount;
  categoriesName = '';
  filterCategories: Category[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categories$ = this.categoryService
      .getAll()
      .subscribe(data => {
        this.categories.push(data);
        this.searchCategories();
      });
  }
  ngOnDestroy() {
    if (this.categories$) {
      this.categories$.unsubscribe();
    }
  }
  searchCategories() {
    this.filterCategories = this.categories.filter(item => {
      return item.name.toLowerCase().includes(this.categoriesName.toLowerCase());
    });
  }
}
