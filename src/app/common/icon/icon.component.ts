import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  codeCollection: string = '<ft-icon name="search" size="3" collection="factoricons-slim"></ft-icon>';
  codeCollection2: string = '<ft-icon name="search" size="3" collection="factoricons-regular"></ft-icon>';
  codePath: string = '<ft-icon name="search" size="3" path="assets/factoricons/symbols"></ft-icon>';
  codeSize: string = '<ft-icon name="search" size="5"></ft-icon>';
  codeMode: string = '<ft-icon name="search" size="3" mode="inline"></ft-icon>';
  codeSrc: string = '<ft-icon size="3" src="assets/factoricons/svg/slim/actions/search.svg"></ft-icon>';

  constructor() { }

  ngOnInit(): void {
  }

}
