import { Component, OnInit, Input, Inject } from '@angular/core';

@Component({
  selector: 'ft-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input()
  name: string;
  @Input()
  collection: string;
  libraryUrl: string;

  constructor(
    @Inject('FactorCommonConfiguration') private configuration
  ) { }

  ngOnInit() {
    if (this.collection) {
      this.libraryUrl = `assets/${this.collection}.svg`;
    } else if (this.configuration.icon && this.configuration.icon.collection) {
      this.libraryUrl = `assets/${this.configuration.icon.collection}.svg`;
    } else {
      this.libraryUrl = 'assets/icons.svg';
    }
  }
}
