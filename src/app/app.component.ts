import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'factor-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  component: any = {
    type: 'box',
    class: 'container',
    children: [
      {
        type: 'box',
        class: 'row',
        children: [
          {
            type: 'box',
            class: ['col', 'col-sm-6'],
            children: [
              {
                type: 'button',
                class: ['btn', 'btn-primary'],
                children: [
                  {
                    type: 'box',
                    class: ['d-flex', 'align-items-center'],
                    children: [
                      {
                        type: 'icon',
                        name: 'search'
                      },
                      {
                        type: 'text',
                        value: 'Buscar'
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            type: 'box',
            class: 'col',
            children: [
              {
                type: 'text',
                value: 'Hola 2'
              }
            ]
          }
        ]
      }
    ]
  };

  constructor() { }

  ngOnInit() {

  }
}
