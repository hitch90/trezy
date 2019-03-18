import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationService, TestService } from '../../_core/_services';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MeteorObservable } from 'meteor-rxjs';
import { Subscription } from 'rxjs';
import { Products } from '../../../../../imports/collections/products';
import { Channels } from '../../../../../imports/collections/channels';

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
  videoInfo: object;
  products$: Subscription;
  products;
  channels$: Subscription;
  channels;
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
          this.testForm.patchValue({});
        });
      }
    });
    this.products$ = MeteorObservable.subscribe('productsList').subscribe(
      () => {
        this.products = Products.find();
      }
    );
    this.channels$ = MeteorObservable.subscribe('channelsList').subscribe(
      () => {
        this.channels = Channels.find();
      }
    );
  }
  ngOnDestroy() {
    if (this.products$) {
      this.products$.unsubscribe();
    }
    if (this.channels$) {
      this.channels$.unsubscribe();
    }
  }
  get fc() {
    return this.testForm.controls;
  }

  getVideoInfo(event) {
    event.preventDefault();
    const url = new URL(this.testForm.value.link);
    let videoId = url.searchParams.get('v');
    this.testService.getInfoApi(videoId).subscribe(data => {
      if (data.items.length) {
        this.videoInfo = data.items[0].snippet;
        this.testForm.patchValue({
          name: data.items[0].snippet.localized.title,
          description: data.items[0].snippet.localized.description,
          image: data.items[0].snippet.thumbnails.high.url
        });
      }
    });
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
