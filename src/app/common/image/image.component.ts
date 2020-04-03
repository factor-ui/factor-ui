import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  code = '<ft-image src="https://..."></ft-image>';

  constructor() { }

  ngOnInit(): void {
  }

}
