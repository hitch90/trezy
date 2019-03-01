import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProducerService, NotificationService } from '../../../_core/_services';
import { MeteorObservable } from 'meteor-rxjs';
import { Observable, Subscription } from 'rxjs';
import { Producer } from '../../../../../../imports/models/producers';
import { Producers } from '../../../../../../imports/collections/producers';

@Component({
  selector: 'app-admin-producer-form',
  templateUrl: './admin-producer-form.component.html',
  styleUrls: ['./admin-producer-form.component.scss']
})
export class AdminProducerFormComponent implements OnInit, OnDestroy {
  public producerForm = this.fb.group({
    name: ['', Validators.required],
    description: [''],
    image: ['']
  });
  producers: Observable<Producer[]>;
  producersListSubscription: Subscription;
  constructor(
    private fb: FormBuilder,
    private producerService: ProducerService,
    private notifyService: NotificationService
  ) {}
  get fc() {
    return this.producerForm.controls;
  }
  ngOnInit() {}
  ngOnDestroy() {}
  add() {
    const values = this.producerForm.value;
    if (this.producerForm.valid) {
      this.producerService.add(values).subscribe(data => {
        if (data) {
          this.notifyService.pushSuccess('Ok', 'Producent został dodany');
          this.producerForm.reset();
        } else {
          this.notifyService.pushError('Błąd', 'Producent istnieje');
        }
      });
    }
  }
}
