import { Component, OnInit } from '@angular/core';

import { LayoutService } from '../../core/layout.service';

@Component({
  selector: 'app-sidenav1',
  templateUrl: './sidenav1.component.html',
  styleUrls: ['./sidenav1.component.scss']
})
export class Sidenav1Component implements OnInit {
  options: any[] = [
    {
      "label": "Search",
      "icon": "search",
      "url": "https://google.com"
    }, {
      "label": "Timesheet",
      "url": "/timesheet",
      "icon": "clock-cronometer"
    }, {
      "label": "Contacts",
      "url": "/contacts",
      "icon": "contacts"
    }, {
      "label": "Reports",
      "icon": "report",
      "children": [
        {
          "label": "Fiscal balance",
          "url": "/reports/fiscal-balance",
          "icon": "document-text"
        }, {
          "label": "Annual balance",
          "url": "/summary",
          "icon": "document-text",
        }
      ],
    }, {
      "label": "Settings",
      "url": "/settings",
      "icon": "gear",
      "class": "d-none d-sm-block"
    }, {
      "label": "Help",
      "url": "/help",
      "icon": "help",
      "class": "d-none d-sm-block"
    }
  ];

  constructor(
    public layoutService: LayoutService
  ) { }

  ngOnInit() {
  }

}
