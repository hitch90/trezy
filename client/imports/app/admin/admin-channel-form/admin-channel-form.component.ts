import { Component, OnInit } from '@angular/core';
import {
  ApiService,
  ChannelService,
  NotificationService
} from '../../_core/_services';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MeteorObservable } from 'meteor-rxjs';

@Component({
  selector: 'app-admin-channel-form',
  templateUrl: './admin-channel-form.component.html',
  styleUrls: ['./admin-channel-form.component.scss']
})
export class AdminChannelFormComponent implements OnInit {
  public channelForm = this.fb.group({
    id: [
      '',
      Validators.required
    ],
    name: ['', Validators.required],
    description: ['', Validators.required],
    url: ['', Validators.required],
    image: ['', Validators.required]
  });
  channelInfo: object;
  constructor(
    private apiService: ApiService,
    private channelService: ChannelService,
    private fb: FormBuilder,
    private notifyService: NotificationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        MeteorObservable.call('getChannel', params.id).subscribe(data => {
          this.channelForm.patchValue({
            name: data['name'],
            description: data['description'],
            url: data['url'],
            image: data['image'],
            id: data['id']
          });
        });
      }
    });
  }
  get fc() {
    return this.channelForm.controls;
  }
  getChannelInfo() {
    let channelId = this.channelForm.value.id;
    if (channelId.includes('user')) {
      this.notifyService.pushError(
        'Problem',
        'Podaj link lub ID kanału, a nie użytkownika'
      );
      return;
    }
    if (channelId.includes('youtube.')) {
      channelId = channelId.split('/');
      channelId = channelId[channelId.length - 1];
    }
    this.channelService.getInfoApi(channelId).subscribe(data => {
      if (data.items.length) {
        this.channelInfo = data.items[0].snippet;
        this.channelForm.patchValue({
          name: data.items[0].snippet.localized.title,
          description: data.items[0].snippet.localized.description,
          url: `//www.youtube.com/channel/${channelId}`,
          image: data.items[0].snippet.thumbnails.high.url,
          id: channelId
        });
      }
    });
  }
  add() {
    const values = this.channelForm.value;
    this.channelService.add(values).subscribe(data => {
      if (data) {
        this.notifyService.pushSuccess('Ok', 'Kanał został dodany');
        this.channelForm.reset();
      } else {
        this.notifyService.pushError('Błąd', 'Kanał istnieje');
      }
    });
  }
}
