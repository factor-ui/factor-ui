import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss']
})
export class InfiniteScrollComponent implements OnInit {
  observeStatus: boolean;

  constructor() { }

  ngOnInit() {
  }
  observeIntersecting(event) {
    console.log(event);
    this.observeStatus = event;
  }

}
