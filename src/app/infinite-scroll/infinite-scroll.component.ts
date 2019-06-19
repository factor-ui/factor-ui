import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss']
})
export class InfiniteScrollComponent implements OnInit {
  observeStatus: boolean;
  menu: any[] = [{
		"name": "Invoice",
		"locale": {
			"es": "Facturaci\u00f3n"
		},
		"icon": "money",
		"url": "\/money",
		"_roles": ["ROLE_DEFAULT"]
	}, {
		"name": "Products",
		"locale": {
			"es": "Productos"
		},
		"url": "\/catalog",
		"icon": "package",
		"_roles": ["ROLE_DEFAULT"]
	}, {
		"name": "Tasks",
		"locale": {
			"es": "Tareas"
		},
		"url": "\/tasks",
		"icon": "task",
		"_roles": ["ROLE_DEFAULT"]
	}, {
		"name": "Contacts",
		"locale": {
			"es": "Contactos"
		},
		"url": "\/contacts",
		"icon": "contacts",
		"_roles": ["ROLE_DEFAULT"]
	}, {
		"name": "Help",
		"url": "\/help",
		"icon": "help",
		"class": "d-none d-sm-block",
		"_roles": ["ROLE_DEFAULT"]
	}];

  constructor() { }

  ngOnInit() {
  }
  observeIntersecting(event) {
    console.log(event);
    this.observeStatus = event;
  }

}
