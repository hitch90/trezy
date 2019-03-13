import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MeteorObservable } from 'meteor-rxjs';
import { MatDialog } from '@angular/material';
import { AdminAttributeDialogComponent } from './admin-attribute-dialog/admin-attribute-dialog.component';
import {AttributeService, NotificationService} from '../../_core/_services';
import { map } from 'rxjs/operators';
import { Attributes } from '../../../../../imports/collections/attributes';
import { Attribute } from '../../../../../imports/models/attributes';

@Component({
  selector: 'app-admin-attributes',
  templateUrl: './admin-attributes.component.html',
  styleUrls: ['./admin-attributes.component.scss']
})
export class AdminAttributesComponent implements OnInit, OnDestroy {
  attributes: Observable<Attribute[]>;
  attributesListSubscription: Subscription;

  constructor(
    public dialog: MatDialog,
    private attributeService: AttributeService,
    private notifyService: NotificationService
  ) {}

  ngOnInit() {
    this.attributesListSubscription = MeteorObservable.subscribe(
      'attributesList'
    ).subscribe(() => {
      this.attributes = Attributes.find().pipe(
        map(item => {
          return item;
        })
      );
    });
  }
  ngOnDestroy() {
    if (this.attributesListSubscription) {
      this.attributesListSubscription.unsubscribe();
    }
  }
  remove(id: string) {
    this.attributeService.remove(id).subscribe(data => {
      this.notifyService.pushSuccess('Ok', 'Atrybut usunięty');
    });
  }
  openDialog() {
    const dialogRef = this.dialog.open(AdminAttributeDialogComponent, {
      width: '480px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}
