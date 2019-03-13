import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Category } from '../../../../../../imports/models/categories';
import { CategoryService } from '../../../_core/_services';
import { count, first, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit, OnDestroy {
  categories: Category[] = [];
  categories$: Subscription;
  categoryCount;

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categories$ = this.categoryService
      .getMain()
      .pipe(
        map(item => {
          this.categoryService.countSubcategories(item._id).subscribe(data => {
            item['count'] = data;
          });
          return item;
        })
      )
      .subscribe(data => {
        this.categories.push(data);
      });
  }
  ngOnDestroy() {
    if (this.categories$) {
      this.categories$.unsubscribe();
    }
  }
}
