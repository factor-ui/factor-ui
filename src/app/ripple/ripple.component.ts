import { Component, OnInit } from '@angular/core';

import { MessageService } from 'factor-common'

@Component({
  selector: 'app-ripple',
  templateUrl: './ripple.component.html',
  styleUrls: ['./ripple.component.scss']
})
export class RippleComponent implements OnInit {

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }

  alert(content) {
    this.messageService.show('dsfasd', {type:'toast'});
  }

}
