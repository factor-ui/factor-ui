import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  menu: any[];

  constructor() { }

  ngOnInit() {
    this.menu = [
      {
        label: 'About',
        url: '/design-system/about'
      },
      {
        label: 'Contributing',
        url: '/design-system/contributing'
      },
      {
        label: 'Guidelines',
        type: 'collapsible',
        children: [
          {
            label: 'Color',
            url: '/design-system/guidelines/color'
          },
          {
            label: 'Spacing',
            url: '/design-system/guidelines/spacing'
          },
          {
            label: 'Typography',
            url: '/design-system/guidelines/typography'
          },
          {
            label: 'Motion',
            url: '/design-system/guidelines/motion'
          },
          {
            label: 'Icons',
            url: '/design-system/guidelines/icons'
          }
        ]
      },
      {
        label: 'Components',
        type: 'collapsible',
        children: [
          {
            label: 'Overview',
            url: '/design-system/components'
          },
          {
            label: 'Common',
            type: 'header'
          },
          {
            label: 'Icon',
            url: '/design-system/components/icon'
          },
          {
            label: 'Image',
            url: '/design-system/components/image'
          },
          {
            label: 'Progress',
            url: '/design-system/components/progress'
          },
          {
            label: 'Message',
            url: '/design-system/components/message'
          },
          {
            label: 'Inputs',
            type: 'header'
          },
          {
            label: 'File picker',
            url: '/design-system/components/file-picker'
          },
          {
            label: 'Rating',
            url: '/design-system/components/rating'
          },
          {
            label: 'Navigation',
            type: 'header'
          },
          {
            label: 'Navbar',
            url: '/design-system/components/navbar'
          },
          {
            label: 'Toolbar',
            url: '/design-system/components/toolbar'
          }
        ]
      },
      {
        label: 'Templates',
        type: 'collapsible',
        children: [
          {
            label: 'Overview',
            url: '/design-system/templates'
          },
          {
            label: 'Basic form',
            url: '/design-system/templates/basic-form'
          },
          {
            label: 'Login',
            url: '/design-system/templates/login'
          },
          {
            label: 'Search',
            url: '/design-system/templates/search'
          },
          {
            label: 'Infinite scroll',
            url: '/design-system/templates/infinite-scroll'
          },
          {
            label: 'Workflow task',
            url: '/design-system/templates/workflow-task'
          }
        ]
      }
    ];
  }

}
