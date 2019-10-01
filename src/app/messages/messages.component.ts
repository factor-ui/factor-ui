import { Component, OnInit } from '@angular/core';

import { MessageService } from 'factor-common';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }
  show(message, options) {
    this.messageService.show(message, options);
  }

}
