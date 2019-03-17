import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ft-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  host: { class: 'd-flex' }
})
export class RatingComponent implements OnInit {
  stars: any[] = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 }
  ];
  overRating: number;
  rating: number;

  constructor() { }

  ngOnInit() {
  }
  setRating(value, isHover?) {
    if (isHover) {
      this.overRating = value;
    } else {
      this.rating = value;
    }

  }

}
