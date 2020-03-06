import { Component, OnInit } from '@angular/core';

import { AuthService } from 'factor-auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    console.log(this.authService);
  }

}
