import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'ft-designer-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  host: { class: 'd-flex' }
})
export class EditorComponent implements OnInit {
  components: any[] = [
    {
      type: 'box',
      label: 'Box'
    },
    {
      type: 'button',
      label: 'Button'
    },
    {
      type: 'icon',
      label: 'Icon'
    },
    {
      icon: 'media-image',
      type: 'image',
      label: 'Image'
    },
    {
      type: 'text',
      label: 'Text'
    },
    {
      type: 'heading',
      label: 'Heading'
    },
    {
      type: 'paragraph',
      label: 'Paragraph'
    }
  ];
  currentComponent: any;
  dragging: boolean;
  overElement: any;

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
  @ViewChild('heading')
  heading: TemplateRef<any>;
  @ViewChild('paragraph')
  paragraph: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
    this.component = this.mapComponent({ type: 'box', properties: { class: 'container' } });
  }
  add(component, parent) {
    let newComponent = this.mapComponent({ type: component.type, properties: {} });
    if (newComponent.type == 'button') {
      const label = prompt('Type a label');
      if (label) {
        newComponent.children = [this.mapComponent({ type: 'text', value: label })];
      }
    }
    if (newComponent.type == 'icon') {
      newComponent.properties.name = prompt('Type an icon name');
    }
    if (newComponent.type == 'image') {
      newComponent.properties.src = prompt('Type a url');
    }
    if (['text', 'heading', 'paragraph'].indexOf(newComponent.type)>=0) {
      newComponent.value = prompt('Type text');
    }
    parent.children = parent.children || [];
    parent.children.push(newComponent);
    this.currentComponent = newComponent;
  }
  remove(component) {
    
  }
  select(component, event) {
    event.stopPropagation();
    this.currentComponent = component;
  }
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
