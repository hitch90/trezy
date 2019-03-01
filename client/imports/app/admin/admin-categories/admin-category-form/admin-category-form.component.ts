import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CategoryService, NotificationService } from '../../../_core/_services';
import { MeteorObservable } from 'meteor-rxjs';
import { Categories } from '../../../../../../imports/collections/categories';
import { Observable, Subscription } from 'rxjs';
import { Category } from '../../../../../../imports/models/categories';

@Component({
  selector: 'app-admin-category-form',
  templateUrl: './admin-category-form.component.html',
  styleUrls: ['./admin-category-form.component.scss']
})
export class AdminCategoryFormComponent implements OnInit, OnDestroy {
  public categoryForm = this.fb.group({
    name: ['', Validators.required],
    description: [''],
    image: [''],
    parent: ['']
  });
  categories: Observable<Category[]>;
  categoriesListSubscription: Subscription;
  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private notifyService: NotificationService
  ) {}
  get fc() {
    return this.categoryForm.controls;
  }
  ngOnInit() {
    this.categoriesListSubscription = MeteorObservable.subscribe(
      'categoriesList'
    ).subscribe(() => {
      this.categories = Categories.find();
    });
  }
  ngOnDestroy() {
    if (this.categoriesListSubscription) {
      this.categoriesListSubscription.unsubscribe();
    }
  }
  add() {
    const values = this.categoryForm.value;
    if (this.categoryForm.valid) {
      this.categoryService.add(values).subscribe(data => {
        if (data) {
          this.notifyService.pushSuccess('Ok', 'Kategoria została dodana');
          this.categoryForm.reset();
        } else {
          this.notifyService.pushError('Błąd', 'Kategoria istnieje');
        }
      });
    }
  }
}
