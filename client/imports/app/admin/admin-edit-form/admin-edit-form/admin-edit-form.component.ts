import { Component, OnInit } from '@angular/core';
import {
  AttributeService,
  CategoryService,
  NotificationService,
  ProducerService
} from '../../../_core/_services';
import { ActivatedRoute } from '@angular/router';
import { Producer } from '../../../../../../imports/models/producers';
import { Category } from '../../../../../../imports/models/categories';
import { Attribute } from '../../../../../../imports/models/attributes';
import { Subscription } from 'rxjs';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-edit-form',
  templateUrl: './admin-edit-form.component.html',
  styleUrls: ['./admin-edit-form.component.scss']
})
export class AdminEditFormComponent implements OnInit {
  type: string;
  data: Producer | Category | Attribute;
  categories: Category[] = [];
  categories$: Subscription;
  _id = new FormControl('');
  name = new FormControl('');
  description = new FormControl('');
  image = new FormControl('');
  icon = new FormControl('');
  parent = new FormControl('');
  editForm: FormGroup;
  constructor(
    private categoryService: CategoryService,
    private attributeService: AttributeService,
    private producerService: ProducerService,
    private route: ActivatedRoute,
    private builder: FormBuilder,
    private notifyService: NotificationService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.type && params.id) {
        this.type = params.type;
        if (params.type == 'category') {
          this.buildCategoryForm();
          this.getCategory(params.id);
          this.categories$ = this.categoryService.getAll().subscribe(data => {
            this.categories.push(data);
          });
        }
        if (params.type == 'attribute') {
          this.buildAttrForm();
          this.getAttribute(params.id);
        }
        if (params.type == 'producer') {
          this.buildProducerForm();
          this.getProducer(params.id);
        }
      }
    });
  }
  ngOnDestroy() {
    if (this.categories$) {
      this.categories$.unsubscribe();
    }
  }
  buildCategoryForm() {
    this.editForm = this.builder.group({
      _id: this._id,
      name: this.name,
      description: this.description,
      image: this.image,
      parent: this.parent
    });
  }
  buildProducerForm() {
    this.editForm = this.builder.group({
      _id: this._id,
      name: this.name,
      description: this.description,
      image: this.image
    });
  }
  buildAttrForm() {
    this.editForm = this.builder.group({
      _id: this._id,
      name: this.name,
      description: this.description,
      icon: this.icon
    });
  }
  getCategory(id: string): void {
    this.categoryService.get(id).subscribe(data => {
      this.data = data;
      this.editForm.patchValue({
        _id: data._id,
        name: data.name,
        description: data.description,
        image: data.image,
        parent: data.parent
      });
    });
  }
  getAttribute(id: string): void {
    this.attributeService.get(id).subscribe(data => {
      this.data = data;
      this.editForm.patchValue({
        _id: data._id,
        name: data.name,
        description: data.description,
        icon: data.icon
      });
    });
  }
  getProducer(id: string): void {
    this.producerService.get(id).subscribe(data => {
      this.data = data;
      this.editForm.patchValue({
        _id: data._id,
        name: data.name,
        description: data.description,
        image: data.image
      });
    });
  }
  save() {
    const values = this.editForm.value;
    if (this.editForm.valid) {
      if (this.type == 'category') {
        this.categoryService.update(values).subscribe(data => {
          this.notifyService.pushSuccess('Ok', 'Zapisane poprawnie');
        });
      }
      if (this.type == 'attribute') {
        this.attributeService.update(values).subscribe(data => {
          this.notifyService.pushSuccess('Ok', 'Zapisane poprawnie');
        });
      }
      if (this.type == 'producer') {
        this.producerService.update(values).subscribe(data => {
          this.notifyService.pushSuccess('Ok', 'Zapisane poprawnie');
        });
      }
    }
  }
}
