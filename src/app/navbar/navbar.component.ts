import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menu: any[];
  position: string = 'left';
  labelPlacement: string = 'left';

  constructor() { }

  ngOnInit() {
    this.menu = [
      {
        "name": "Ambientes",
        "icon": "cloud-check",
        "url": "\/environments",
      },
      {
        "name": "Respaldos",
        "icon": "history",
        "url": "\/backups",
      },
      {
        "name": "Almacenamiento",
        "icon": "storage",
        "url": "\/storage",
      },
      {
        "name": "Usuarios",
        "icon": "usergroup",
        "url": "\/users",
      },
      {
        "name": "Facturación",
        "icon": "credit-card",
        "url": "\/billing",
      }
    ];
  }

}
