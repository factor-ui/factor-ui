import { Component, OnInit } from '@angular/core';

import { ColorService } from 'factor-common';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent implements OnInit {
  value: number = 0;

  constructor(
    private colorService: ColorService
  ) { }

  ngOnInit() {
    let interval = setInterval(() => {
      this.value += 2;
      if (this.value>=100) {
        clearInterval(interval);
      }
    }, 100);

    console.log(this.colorService.hex('Juan Altamirano'));
  }

}
