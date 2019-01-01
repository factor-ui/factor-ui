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
      "name": "Invoicing",
      "icon": "money",
      "url": "/"
    }, {
      "name": "Timesheet",
      "url": "/timesheet",
      "icon": "clock-cronometer"
    }, {
      "name": "Contacts",
      "url": "/contacts",
      "icon": "contacts"
    }, {
      "name": "Reports",
      "icon": "report",
      "children": [
        {
          "name": "Fiscal balance",
          "url": "/reports/fiscal-balance",
          "icon": "document-text"
        }, {
          "name": "Annual balance",
          "url": "/summary",
          "icon": "document-text",
        }
      ],
    }, {
      "name": "Settings",
      "url": "/settings",
      "icon": "gear",
      "class": "d-none d-sm-block"
    }, {
      "name": "Help",
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
