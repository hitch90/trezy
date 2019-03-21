import {Component, Inject, OnInit} from '@angular/core';
import {InjectUser} from "../../accounts/annotations";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
@InjectUser('user')

export class HeaderComponent implements OnInit {
  user: Meteor.User;
  showCategories = false;
  query: string;
  constructor() {}

  ngOnInit() {}

  displayName(): string {
    let user: any = this.user;

    if (!user) return '';

    if (user.profile && user.profile.name) return user.profile.name;

    if (user.username) return user.username;

    if (user.emails && user.emails[0] && user.emails[0].address)
      return user.emails[0].address;

    return '';
  }
  toggleCat(ev) {
    ev.preventDefault();
    this.showCategories = !this.showCategories;
  }
  search() {

  }
}
