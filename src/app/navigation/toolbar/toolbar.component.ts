import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  actionOptions: any[];

  constructor() { }

  ngOnInit(): void {
    this.actionOptions = [
      {
        iconName: 'search',
        label: $localize`Search`,
        click: () => {
          
        }
      },
      {
        iconName: 'plus',
        label: $localize`Add`,
        click: () => {

        }
      },
      {
        id: 'menu',
        iconName: 'ellipsis-vertical',
        children: [
          {
            label: $localize`Refresh`,
            click: () => {

            }
          }
        ]
      }
    ];
  }

}
