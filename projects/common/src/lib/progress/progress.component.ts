import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ft-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  @Input()
  mode: 'determinate' | 'indeterminate' = 'indeterminate';
  @Input()
  value: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
