import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  code = `<ft-rating size="2" [ngModel]="3"></ft-rating>
<ft-rating size="2" [ngModel]="3" [readOnly]="true"></ft-rating>
<ft-rating size="2" [ngModel]="3" [disabled]="true"></ft-rating>`;
  codeSize = '<ft-rating size="2"></ft-rating>';

  constructor() { }

  ngOnInit(): void {
  }

}
