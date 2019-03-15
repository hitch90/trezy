import { Component, OnInit } from '@angular/core';
import {
  ApiService,
  ProductService,
  NotificationService
} from '../../_core/_services';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MeteorObservable } from 'meteor-rxjs';
import { Categories } from '../../../../../imports/collections/categories';
import { Observable, Subscription } from 'rxjs';
import { Category } from '../../../../../imports/models/categories';
import { Producer } from '../../../../../imports/models/producers';
import { Producers } from '../../../../../imports/collections/producers';
import {Product} from "../../../../../imports/models/product";

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.scss']
})
export class AdminProductFormComponent implements OnInit {
  product: Product;
  public productForm = this.fb.group({
    _id: [''],
    name: ['', Validators.required],
    description: [''],
    image: [''],
    category: ['', Validators.required],
    producer: [''],
  });
  categories: Observable<Category[]>;
  producers: Observable<Producer[]>;
  categoriesListSubscription: Subscription;
  producersListSubscription: Subscription;
  constructor(
    private apiService: ApiService,
    private productService: ProductService,
    private fb: FormBuilder,
    private notifyService: NotificationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getProduct();
    this.categoriesListSubscription = MeteorObservable.subscribe(
      'categoriesList'
    ).subscribe(() => {
      this.categories = Categories.find();
    });
    this.producersListSubscription = MeteorObservable.subscribe(
      'producersList'
    ).subscribe(() => {
      this.producers = Producers.find();
    });
  }
  ngOnDestroy() {
    if (this.categoriesListSubscription) {
      this.categoriesListSubscription.unsubscribe();
    }
    if (this.producersListSubscription) {
      this.producersListSubscription.unsubscribe();
    }
  }
  get fc() {
    return this.productForm.controls;
  }
  getProduct() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.productService.get(params.id).subscribe(data => {
          if (data) {
            this.productForm.patchValue({
              _id: data['_id'],
              name: data['name'],
              description: data['description'],
              image: data['image'],
              category: data['category'],
              producer: data['producer'],
            });
            this.product = data;
          }
        });
      }
    });
  }
  add() {
    const values = this.productForm.value;
    if (this.productForm.value._id) {
      this.productService.update(values).subscribe(data => {
        this.notifyService.pushSuccess('Ok', 'Produkt został zaktualizowany');
      });
      return;
    }
    if (this.productForm.valid) {
      values._id = undefined;
      this.productService.add(values).subscribe(data => {
        if (data) {
          this.notifyService.pushSuccess('Ok', 'Produkt został dodany');
          this.productForm.reset();
        } else {
          this.notifyService.pushError('Błąd', 'Produkt istnieje');
        }
      });
    }
  }
}
