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
  iconCollection: string;
  @Input()
  options: any[];
  @Input()
  labelField: string;
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
      this.docked ? 'docked' : '',
      this.position,
      this.shown ? 'show' : ''
    ].join(' ');
  }
  selectOption(option) {
    if (option.url) {
      if (option.url.match(/^(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/)) {
        window.location.href = option.url;
      } else {
        this.router.navigateByUrl(option.url);
      }
    } else if (option.click) {
      option.click();
    }
    this.hide();
  }
  toggleShow(option) {
    option.show = !option.show;
  }
  show() {
    this.shown = true;
  }
  toggle() {
    this.shown = !this.shown;
  }

}
