import {Component, OnDestroy, OnInit} from '@angular/core';
import {
  NotificationService, TestService
} from '../../_core/_services';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MeteorObservable } from 'meteor-rxjs';
import {Subscription} from "rxjs";
import {Product} from "../../../../../imports/models/product";
import {Products} from "../../../../../imports/collections/products";

@Component({
  selector: 'app-admin-tests-form',
  templateUrl: './admin-tests-form.component.html',
  styleUrls: ['./admin-tests-form.component.scss']
})
export class AdminTestsFormComponent implements OnInit, OnDestroy {
  public testForm = this.fb.group({
    type: [''],
    id: [''],
    name: [''],
    description: [''],
    link: [''],
    channel: [''],
    product: [''],
    image: ['']
  });
  products$:Subscription;
  products;
  constructor(
    private testService: TestService,
    private fb: FormBuilder,
    private notifyService: NotificationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        MeteorObservable.call('getTest', params.id).subscribe(data => {
          this.testForm.patchValue({

          });
        });
      }
    });
    this.products$ = MeteorObservable.subscribe(
        'productsList'
    ).subscribe(() => {
      this.products = Products.find();
    });
  }
  ngOnDestroy() {
    if (this.products$) {
      this.products$.unsubscribe();
    }
  }
  get fc() {
    return this.testForm.controls;
  }

  add() {
    const values = this.testForm.value;
    if (this.testForm.valid) {
      this.testService.add(values).subscribe(data => {
        if (data) {
          this.notifyService.pushSuccess('Ok', 'Test został dodany');
          this.testForm.reset();
        } else {
          this.notifyService.pushError('Błąd', 'Test istnieje');
        }
      });
    }
  }
}
