import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent implements OnInit {
  value: number = 0;

  constructor() { }

  ngOnInit() {
    let interval = setInterval(() => {
      this.value += 2;
      if (this.value>=100) {
        clearInterval(interval);
      }
    }, 100);
  }

}
