import { Component, OnInit, Input } from '@angular/core';

import { Option } from '../models/option';

@Component({
  selector: 'ft-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  host: { class: 'd-flex' }
})
export class ToolbarComponent implements OnInit {
  @Input()
  children: Option[];

  constructor() { }

  ngOnInit() {
  }

}
