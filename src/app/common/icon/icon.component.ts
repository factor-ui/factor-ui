import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  codeCollection: string = '<ft-icon name="search" size="3" collection="factoricons-slim"></ft-icon>';
  codeCollection2: string = '<ft-icon name="search" size="3" collection="factoricons-regular"></ft-icon>';
  codeSize: string = '<ft-icon name="search" size="5"></ft-icon>';

  constructor() { }

  ngOnInit(): void {
  }

}
