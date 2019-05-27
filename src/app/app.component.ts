import { Component } from '@angular/core';

import { StorageService } from 'factor-utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'factor-ui';

  constructor(
    private storageService: StorageService
  ) {
    storageService.set('demo', {name: 'demo', id: 1});
    storageService.set('demo2', {name: 'demo', id: 1}, 'localStorage');
    storageService.set('demo3', {name: 'demo', id: 1}, localStorage);
    storageService.set('demo4', {name: 'demo', id: 1}, 'sessionStorage');
    storageService.set('demo5', {name: 'demo', id: 1}, sessionStorage);
    console.log(storageService.get('demo'));
  }
}
