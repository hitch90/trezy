import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-product-attributes',
    templateUrl: './attributes.component.html',
    styleUrls: ['./attributes.component.scss']
})
export class ProductAttributesComponent implements OnInit {
   @Input() attributes: object[];
    constructor() {}

    ngOnInit() {

    }
}
