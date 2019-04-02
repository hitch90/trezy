import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {Title} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  constructor(@Inject(DOCUMENT) private dom,
              private title: Title,) {}

  createCanonicalURL(url?:string) {
    let link: HTMLLinkElement = this.dom.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.dom.head.appendChild(link);
    link.setAttribute('href', this.dom.URL);
  }
  setPageTitle(title: string) {
    this.title.setTitle(title + ' - Trezy.pl - zbiór recenzji i testów video');
  }
}
