import {Component, Input, OnInit} from '@angular/core';
import {
    ApiService,
    ProductService,
    NotificationService
} from '../../../_core/_services';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {Observable, Subscription} from "rxjs";
import {Attribute} from "../../../../../../imports/models/attributes";
import {MeteorObservable} from "meteor-rxjs";
import {Attributes} from "../../../../../../imports/collections/attributes";

@Component({
    selector: 'app-admin-product-form-attributes',
    templateUrl: './admin-product-form-attributes.component.html',
    styleUrls: ['./admin-product-form-attributes.component.scss']
})
export class AdminProductFormAttributesComponent implements OnInit {
    @Input() productId: string;
    @Input() productAttributes: object[];
    attributes: Observable<Attribute[]>;
    attributesListSubscription: Subscription;
    attributesArr = [];
    constructor(
        private apiService: ApiService,
        private productService: ProductService,
        private fb: FormBuilder,
        private notifyService: NotificationService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.getProduct();
        this.attributesListSubscription = MeteorObservable.subscribe(
            'attributesList'
        ).subscribe(() => {
            this.attributes = Attributes.find();
        });
        if (this.productAttributes) {
            this.attributesArr = this.productAttributes;
        }
    }
    ngOnDestroy() {
        if(this.attributesListSubscription) {
            this.attributesListSubscription.unsubscribe()
        }
    }
    get fc() {
        //return this.productForm.controls;
        return;
    }
    getProduct() {
        this.route.params.subscribe(params => {
            if (params.id) {
                this.productService.get(params.id).subscribe(data => {

                });
            }
        });
    }
    add(attr) {
        const isExist = this.attributesArr.map((item) => {
            return item._id === attr._id
        });
        if(isExist.indexOf(true) === -1) {
            const item = {...attr , value: ''}
            this.attributesArr.push(item);
        }
        console.log(this.attributesArr);
    }
    save() {
        this.productService.updateAttrs(this.attributesArr, this.productId).subscribe(data => {
            this.notifyService.pushSuccess('Ok', 'Produkt został zaktualizowany');
        });
    }
}
