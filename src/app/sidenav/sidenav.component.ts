import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
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
  
  constructor() { }

  ngOnInit() {
  }

}
