import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MeteorObservable } from 'meteor-rxjs';
import { Product } from '../../../../../../imports/models/product';
import { Products } from '../../../../../../imports/collections/products';
import { PersonalizationService } from '../../../_core/_services/personalization.services';
import { FormBuilder } from '@angular/forms';
import { NotificationService } from '../../../_core/_services';

@Component({
    selector: 'app-personalization-component',
    templateUrl: './personalization.component.html',
    styleUrls: ['./personalization.component.scss']
})
export class PersonalizationComponent implements OnInit, OnDestroy {
    @Input() place: string;
    products: Observable<Product[]>;
    productsListSubscription: Subscription;
    public personalizationForm = this.fb.group({
        place: ['homepage'],
        product_big: [''],
        product_small_top: [''],
        product_small_bottom: ['']
    });
    constructor(
        private fb: FormBuilder,
        private personalizationService: PersonalizationService,
        private notifyService: NotificationService
    ) {}
    ngOnInit() {
        this.personalizationForm.patchValue({
            place: this.place
        });
        this.productsListSubscription = MeteorObservable.subscribe(
            'productsList'
        ).subscribe(() => {
            this.products = Products.find();
        });
        this.get();
    }
    ngOnDestroy() {
        if (this.productsListSubscription) {
            this.productsListSubscription.unsubscribe();
        }
    }
    get() {
        this.personalizationService.get(this.place).subscribe(data => {
            this.personalizationForm.patchValue({
                product_big: data['product_big'],
                product_small_top: data['product_small_top'],
                product_small_bottom: data['product_small_bottom']
            });
        });
    }
    save() {
        const values = this.personalizationForm.value;
        this.personalizationService.set(values).subscribe(() => {
            this.notifyService.pushSuccess('Ok', 'Zmiany zapisane');
        });
    }
}
