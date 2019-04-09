import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

import { Option } from '../models/option';

@Component({
  selector: 'ft-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input()
  iconCollection: string;
  @Input()
  iconNameField: string = 'iconName';
  @Input()
  labelField: string = 'label';
  @Input()
  mode: 'docked' | 'collapsed';
  @Input()
  children: Option[];
  @Input()
  position: 'left' | 'right' = 'left';
  @Input()
  shown: boolean;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  hide() {
    this.shown = false;
  }
  @HostBinding('class')
  get hostClasses(): string {
    return [
      this.mode,
      this.position,
      this.shown ? 'show' : ''
    ].join(' ');
  }
  getComponentType(option) {
    let type: string = 'text';
    if (!option.url || option.url.match(/^(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/)) {
      type = 'button';
    } else {
      type = 'link';
    }
    return type;
  }
  setOption(option) {
    if (option.url) {
      if (option.url.match(/^(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/)) {
        window.location.href = option.url;
      }
    } else if (option.click) {
      option.click();
    }
    this.hide();
  }
  toggleCollapsible(option) {
    option.show = !option.show;
  }
  show() {
    this.shown = true;
  }
  toggle() {
    this.shown = !this.shown;
  }

}
