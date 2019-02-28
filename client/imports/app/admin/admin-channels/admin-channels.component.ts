import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { Meteor } from 'meteor/meteor';
import { MeteorObservable } from 'meteor-rxjs';
import {Channel} from "../../../../../imports/models/channels";
import {Channels} from "../../../../../imports/collections/channels";

@Component({
  selector: 'app-admin-channels',
  templateUrl: './admin-channels.component.html',
  styleUrls: ['./admin-channels.component.scss']
})
export class AdminChannelsComponent implements OnInit, OnDestroy {
  channels: Observable<Channel[]>;
  channelsListSubscription: Subscription;
  ngOnInit() {
    this.channelsListSubscription = MeteorObservable.subscribe('channelsList').subscribe(() => {
      this.channels = Channels.find();
    });
  }
  ngOnDestroy() {
    if (this.channelsListSubscription) {
      this.channelsListSubscription.unsubscribe();
    }
  }
  removeChannel(_id: string) {
    Meteor.call('removeChannel', _id);
  }
}
