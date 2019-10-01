import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { Option } from '../models/option';

@Component({
  selector: 'ft-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input()
  iconCollection: string;
  @Input()
  iconNameField: string = 'iconName';
  @Input()
  labelField: string = 'label';
  @Input()
  labelPlacement: 'left' | 'bottom' | 'tooltip' | 'none' = 'left';
  @Input()
  items: Option[];
  @Input()
  position: 'top' | 'right' | 'bottom' | 'left' | 'auto' = 'auto';
  tooltipPosition: 'above' | 'right';

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit() {
    const layoutChanges = this.breakpointObserver.observe([
      Breakpoints.HandsetPortrait
    ]);
    layoutChanges.subscribe(result => {
      this.tooltipPosition = result.matches? 'above' : 'right';
    });
  }
  @HostBinding('class')
  get hostClasses(): string {
    return [
      this.position
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
