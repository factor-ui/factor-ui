import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'ft-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  @Input()
  class: string = '';
  @Input()
  color: string;
  @Input()
  mode: 'determinate' | 'indeterminate' = 'indeterminate';
  @Input()
  overlay: boolean;
  @Input()
  size: number;
  @Input()
  value: number;

  constructor() { }

  ngOnInit() {
    this.color = this.color || 'var(--primary)';
    this.value = 0;
  }
  @HostBinding('class')
  get hostClasses(): string {
    return [
      this.class,
      this.overlay ? 'progress--overlay' : ''
    ].join(' ');
  }

}
