import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ft-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  @Input()
  color: string;
  @Input()
  mode: 'determinate' | 'indeterminate' = 'indeterminate';
  @Input()
  size: number;
  @Input()
  value: number;

  constructor() { }

  ngOnInit() {
    this.color = this.color || 'var(--primary)';
    this.value = 0;
  }

}
