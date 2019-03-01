import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { MeteorObservable } from 'meteor-rxjs';
import { MatDialog } from '@angular/material';
import { AdminProducerDialogComponent } from './admin-producer-dialog/admin-producer-dialog.component';
import { NotificationService, ProducerService } from '../../_core/_services';
import { map } from 'rxjs/operators';
import { Producers } from '../../../../../imports/collections/producers';
import { Producer } from '../../../../../imports/models/producers';

@Component({
  selector: 'app-admin-producers',
  templateUrl: './admin-producers.component.html',
  styleUrls: ['./admin-producers.component.scss']
})
export class AdminProducersComponent implements OnInit, OnDestroy {
  producers: Observable<Producer[]>;
  producersListSubscription: Subscription;

  constructor(
    public dialog: MatDialog,
    private producerService: ProducerService,
    private notifyService: NotificationService
  ) {}

  ngOnInit() {
    this.producersListSubscription = MeteorObservable.subscribe(
      'producersList'
    ).subscribe(() => {
      this.producers = Producers.find().pipe(
        map(item => {
          console.log(item);
          return item;
        })
      );
    });
  }
  ngOnDestroy() {
    if (this.producersListSubscription) {
      this.producersListSubscription.unsubscribe();
    }
  }
  remove(id: string) {
    this.producerService.remove(id).subscribe(data => {
      this.notifyService.pushSuccess('Ok', 'Producent usunięty');
    });
  }
  openDialog() {
    const dialogRef = this.dialog.open(AdminProducerDialogComponent, {
      width: '480px'
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
}
