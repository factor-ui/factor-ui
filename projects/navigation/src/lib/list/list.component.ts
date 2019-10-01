import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

import { Option } from '../models/option';

@Component({
  selector: 'ft-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input()
  iconCollection: string;
  @Input()
  iconNameField: string = 'iconName';
  @Input()
  labelField: string = 'label';
  @Input()
  items: Option[];

  constructor(
    private router: Router
  ) { }

  ngOnInit() { }
  @HostBinding('class')
  get hostClasses(): string {
    return [

    ].join(' ');
  }
  getComponentType(item) {
    let type: string = 'text';
    if (!item.url || item.url.match(/^(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/)) {
      type = 'button';
    } else {
      type = 'link';
    }
    return type;
  }
  setItem(item) {
    if (item.url) {
      if (item.url.match(/^(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/)) {
        window.location.href = item.url;
      }
    } else if (item.click) {
      item.click();
    }
  }
  toggleCollapsible(option) {
    option.show = !option.show;
  }

}
