import { Component, OnInit } from '@angular/core';

import { AuthService } from 'factor-auth';

@Component({
  selector: 'factor-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    console.log(this.authService);
  }
}
