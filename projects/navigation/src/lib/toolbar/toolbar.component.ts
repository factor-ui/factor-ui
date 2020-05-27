import { Component, OnInit, Input, HostBinding } from '@angular/core';

import { Option } from '../models/option';

@Component({
  selector: 'ft-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() actionOptions: Option[];
  @Input() currentTitleOption: Option;
  @Input() title: string;
  @Input() titleOptions: Option[];
  overlapped: boolean;
  rootMargin: any = { rootMargin: '0px 0px 0px 0px' };

  constructor() {
    const breakpointSm = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-sm'));
    if (window.innerWidth < breakpointSm) {
      this.rootMargin = { rootMargin: '0px 0px 0px 0px' };
    }
  }

  ngOnInit() {
    if (this.titleOptions && !this.currentTitleOption) {
      this.currentTitleOption = this.titleOptions[0];
    }
  }
  @Input()
  class: string = '';
  @HostBinding('class')
  get hostClasses(): string {
    return [
      this.class,
      this.overlapped ? 'overlapped' : ''
    ].join(' ');
  }
  setOverlapped(overlapped) {
    this.overlapped = !overlapped;
  }

}
