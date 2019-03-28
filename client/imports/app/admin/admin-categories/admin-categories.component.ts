import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { Meteor } from 'meteor/meteor';
import { MeteorObservable } from 'meteor-rxjs';
import { Category } from '../../../../../imports/models/categories';
import { Categories } from '../../../../../imports/collections/categories';
import { MatDialog } from '@angular/material';
import { AdminCategoryDialogComponent } from './admin-category-dialog/admin-category-dialog.component';
import { CategoryService, NotificationService } from '../../_core/_services';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.scss']
})
export class AdminCategoriesComponent implements OnInit, OnDestroy {
  categories: Observable<Category[]>;
  categoriesListSubscription: Subscription;

  constructor(
    public dialog: MatDialog,
    private categoryService: CategoryService,
    private notifyService: NotificationService
  ) {}

  ngOnInit() {
    this.categoriesListSubscription = MeteorObservable.subscribe(
      'categoriesList'
    ).subscribe(() => {
      this.categories = Categories.find().pipe(
        map(item => {
          return item;
        })
      );
    });
  }
  ngOnDestroy() {
    if (this.categoriesListSubscription) {
      this.categoriesListSubscription.unsubscribe();
    }
  }
  remove(id: string) {
    this.categoryService.remove(id).subscribe(data => {
      this.notifyService.pushSuccess('Ok', 'Kategoria usunięta');
    });
  }
  getParentName(parent) {
    return Categories.findOne({ _id: parent });
  }
  openDialog() {
    const dialogRef = this.dialog.open(AdminCategoryDialogComponent, {
      width: '480px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}
