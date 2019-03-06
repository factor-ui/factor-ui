import { Component, OnInit } from '@angular/core';

import { NavigationService } from '../navigation.service';

@Component({
  selector: 'ft-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  
  constructor(
    private navigationService: NavigationService
  ) { }

  ngOnInit() {
  }

}
