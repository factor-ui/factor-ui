import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { SidenavComponent as FactorSidenavComponent } from 'factor-navigation';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  options: any[];
  pageOptions: any[];

  constructor() { }

  ngOnInit() {
    this.options = [
      {label:'Dashboard', iconName:'dashboard'},
      {label:'Calendar', iconName:'calendar'},
      {label:'Contacts', iconName:'contacts', url: '/sidenav'},
      {label:'Notifications', iconName:'bell'},
      {label:'Settings', iconName:'gear'},
      {label:'Help', iconName:'help'}
    ];
    this.pageOptions = [
      {
        id: 'search',
        label: 'Search',
        iconName: 'search',
        click: ()=>{

        }
      },
      {
        id: 'add',
        label: 'Add',
        iconName: 'plus',
        click: ()=>{

        }
      },
      {
        id: 'information',
        label: 'Info',
        iconName: 'information',
        click: ()=>{

        }
      },
      {
        id: 'menu',
        iconName: 'ellipsis-vertical',
        children: [
          {
            label: 'Refresh',
            click: ()=>{
            }
          }
        ]
      }
    ];
  }

}
