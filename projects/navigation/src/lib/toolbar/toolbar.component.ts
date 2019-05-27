import { Component, OnInit, Input } from '@angular/core';

import { Option } from '../models/option';

@Component({
  selector: 'ft-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() actionOptions: Option[];
  @Input() title: string;
  @Input() titleOptions: Option[];
  @Input() titleSearchbox: boolean;
  overlapped: boolean;
  rootMargin: any = { rootMargin: '32px 0px 0px 0px' };

  constructor() {
    const breakpointSm = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-sm'));
    if (window.innerWidth < breakpointSm) {
      this.rootMargin = { rootMargin: '0px 0px 0px 0px' };
    }
  }

  ngOnInit() { }
  setOverlapped(overlapped) {
    this.overlapped = !overlapped;
  }

}
