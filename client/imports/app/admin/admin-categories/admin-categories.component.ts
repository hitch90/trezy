import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { Meteor } from 'meteor/meteor';
import { MeteorObservable } from 'meteor-rxjs';
import {Category} from "../../../../../imports/models/categories";
import {Categories} from "../../../../../imports/collections/categories";
import {MatDialog} from "@angular/material";
import {AdminCategoryDialogComponent} from "./admin-category-dialog/admin-category-dialog.component";

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.scss']
})
export class AdminCategoriesComponent implements OnInit, OnDestroy {
  categories: Observable<Category[]>;
  categoriesListSubscription: Subscription;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.categoriesListSubscription = MeteorObservable.subscribe('categoriesList').subscribe(() => {
      this.categories = Categories.find();
    });
  }
  ngOnDestroy() {
    if (this.categoriesListSubscription) {
      this.categoriesListSubscription.unsubscribe();
    }
  }
  remove(_id: string) {
    Meteor.call('removeCategory', _id);
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
