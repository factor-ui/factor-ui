import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ft-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @HostBinding('class.docked')
  @Input()
  docked: boolean;
  @HostBinding('class.show')
  shown: boolean;
  @Input()
  options: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  hide() {
    this.shown = false;
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
