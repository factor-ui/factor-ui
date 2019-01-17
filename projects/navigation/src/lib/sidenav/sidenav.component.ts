import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ft-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input()
  docked: boolean;
  @Input()
  options: string;
  @Input()
  position: 'left' | 'right' = 'left';
  shown: boolean;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  hide() {
    this.shown = false;
  }
  @HostBinding('class')
	get hostClasses(): string {
		return [
			this.docked? 'docked' : '',
			this.position,
			this.shown? 'show': ''
		].join(' ');
	}
  selectOption(option) {
    if (option.url) {
      this.router.navigateByUrl(option.url);
    } else if (option.click) {
      option.click();
    }
    this.hide();
  }
  show() {
    this.shown = true;
  }
  toggle() {
    this.shown = !this.shown;
  }

}
