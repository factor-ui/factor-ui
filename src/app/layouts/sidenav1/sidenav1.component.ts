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
      label: 'About',
      url: '/about'
    },
    {
      label: 'Contributing',
      url: '/contributing'
    },
    {
      label: 'Guidelines',
      type: 'collapsible'
    },
    {
      label: 'Components',
      type: 'collapsible',
      children: [
        {
          label: 'Common',
          type: 'header'
        },
        {
          label: 'Icon',
          url: '/common/icon'
        },
        {
          label: 'Image',
          url: '/common/image'
        },
        {
          label: 'Inputs',
          type: 'header'
        },
        {
          label: 'Text input',
          url: '/inputs/text-input'
        },
        {
          label: 'Text area',
          url: '/inputs/text-area'
        },
        {
          label: 'Select',
          url: '/inputs/select'
        },
        {
          label: 'File picker',
          url: '/inputs/file-picker'
        },
        {
          label: 'Rating',
          url: '/inputs/rating'
        },
        {
          label: 'List',
          url: '/inputs/list'
        },
        {
          label: 'Sidenav',
          url: '/components/navigation/sidenav'
        }
      ]
    },
    {
      label: 'Templates',
      type: 'collapsible',
      children: [
        {
          label: 'Workflow task',
          url: '/templates/workflow-task'
        },
        {
          label: 'Search',
          url: '/templates/search'
        },
        {
          label: 'Login',
          url: '/templates/login'
        },
        {
          label: 'Wizard',
          url: '/inputs/text-area'
        }
      ]
    },
    {
      label: 'Icons',
      type: '/icons'
    },
    {
      label: 'Style guide',
      type: '/style-guide'
    }
  ];
  /*
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
  */

  constructor(
    public layoutService: LayoutService
  ) { }

  ngOnInit() {
  }

}
