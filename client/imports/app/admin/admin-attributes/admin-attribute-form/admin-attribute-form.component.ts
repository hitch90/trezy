import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AttributeService, NotificationService } from '../../../_core/_services';
import { MeteorObservable } from 'meteor-rxjs';
import { Attributes } from '../../../../../../imports/collections/attributes';
import { Observable, Subscription } from 'rxjs';
import { Attribute } from '../../../../../../imports/models/attributes';

@Component({
  selector: 'app-admin-attribute-form',
  templateUrl: './admin-attribute-form.component.html',
  styleUrls: ['./admin-attribute-form.component.scss']
})
export class AdminAttributeFormComponent implements OnInit, OnDestroy {
  public attributeForm = this.fb.group({
    name: ['', Validators.required],
    description: [''],
    icon: [''],
    parent: ['']
  });
  attributes: Observable<Attribute[]>;
  attributesListSubscription: Subscription;
  constructor(
    private fb: FormBuilder,
    private attributeService: AttributeService,
    private notifyService: NotificationService
  ) {}
  get fc() {
    return this.attributeForm.controls;
  }
  ngOnInit() {
    this.attributesListSubscription = MeteorObservable.subscribe(
      'attributesList'
    ).subscribe(() => {
      this.attributes = Attributes.find();
    });
  }
  ngOnDestroy() {
    if (this.attributesListSubscription) {
      this.attributesListSubscription.unsubscribe();
    }
  }
  add() {
    const values = this.attributeForm.value;
    if (this.attributeForm.valid) {
      this.attributeService.add(values).subscribe(data => {
        if (data) {
          this.notifyService.pushSuccess('Ok', 'Atrybut został dodany');
          this.attributeForm.reset();
        } else {
          this.notifyService.pushError('Błąd', 'Atrybut istnieje');
        }
      });
    }
  }
}
