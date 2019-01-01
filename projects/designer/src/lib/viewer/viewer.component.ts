import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'ft-designer-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {
  private _component: any;
  get component(): any {
    return this._component;
  }
  @Input()
  set component(value: any) {
    this._component = this.mapComponent(value);
  }
  @ViewChild('button')
  button: TemplateRef<any>;
  @ViewChild('box')
  box: TemplateRef<any>;
  @ViewChild('icon')
  icon: TemplateRef<any>;
  @ViewChild('image')
  image: TemplateRef<any>;
  @ViewChild('text')
  text: TemplateRef<any>;

  constructor() { }

  ngOnInit() { }
  mapComponent(component): any {
    if (component) {
      component.template = this[component.type];
      if (component.children) {
        component.children.forEach((child) => {
          this.mapComponent(child);
        });
      }
    }
    return component;
  }

}
