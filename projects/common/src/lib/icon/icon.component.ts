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
  @Input()
  mode: 'inline' | 'external';
  @Input()
  path: string;
  @Input()
  size: string;
  @Input()
  src: string;
  url: string;

  constructor(
    @Inject('FactorCommonConfiguration') private configuration
  ) { }

  ngOnInit() {
    // Set the default collection if the mode is external
    if (!this.collection) {
      if (this.configuration.icon && this.configuration.icon.collection) {
        this.collection = this.configuration.icon.collection;
      } else if (this.mode === 'external') {
        this.collection = 'icons';
      }
    }
    if (!this.mode) {
      if (this.configuration.icon && this.configuration.icon.mode) {
        this.mode = this.configuration.icon.mode;
      } else {
        this.mode = 'external';
      }
    }
    if (this.mode === 'external') {
      // If the icon mode is external
      if (!this.path) {
        if (this.configuration.icon && this.configuration.icon.path) {
          this.path = this.configuration.icon.path;
        } else {
          this.path = 'assets';
        }
      }
      this.url = `${ this.path }/${ this.collection }.svg#${this.name}`;
    } else {
      // If the icon mode is inline
      const name = this.collection && this.collection !== 'unset' ? `${this.collection}--${this.name}` : this.name;
      this.url = `#${name}`;
    }
  }
}
