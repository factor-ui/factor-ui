import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'factor-ui';
  menu: any[];

  ngOnInit(): void {
    this.menu = [
      {
        label: 'Common',
        type: 'header'
      },
      {
        label: 'Avatar',
        url: '/common/avatar'
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
        label: 'Progress',
        url: '/common/progress'
      },
      {
        label: 'Dialogs',
        type: 'header'
      },
      {
        label: 'Message',
        url: '/dialogs/message'
      },
      {
        label: 'Inputs',
        type: 'header'
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
        label: 'Navigation',
        type: 'header'
      },
      {
        label: 'Navbar',
        url: '/navigation/navbar'
      },
      {
        label: 'Toolbar',
        url: '/navigation/toolbar'
      },
      {
        label: 'Searchbox',
        url: '/navigation/searchbox'
      },
      {
        label: 'Utils',
        type: 'header'
      },
      {
        label: 'Files service',
        url: '/utils/files'
      },
      {
        label: 'Cache',
        url: '/utils/cache'
      },
      {
        label: 'Storage',
        url: '/utils/storage'
      },
      {
        label: 'Samples',
        type: 'header'
      },
      {
        label: 'Infinite scroll',
        url: '/samples/infinite-scroll'
      }
    ];
  }
}
