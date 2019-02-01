import { Component, OnInit, Input, HostBinding, forwardRef, ElementRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ft-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true
    }
  ]
})
export class TextInputComponent implements OnInit, ControlValueAccessor {
  @Input()
  disabled: boolean;
  @Input()
  type: string = 'text';
  @Input()
  placeholder: string;
  @Input()
  readOnly: boolean;
  @Input()
  style: 'default' | 'rounded-outline' | 'outline';
  @HostBinding('class')
  get hostClasses(): string {
    return [
      this.style ? `style-${this.style}` : ''
    ].join(' ');
  }
  @ViewChild('field')
  field: ElementRef<any>;
  _value: string;
  propagateChange = (_: any) => { };

  constructor() { }

  ngOnInit() {
  }
  get value() {
    return this._value;
  }
  @Input()
  set value(value: any) {
    this.field.nativeElement.value = value;
    this._value = value;
    this.propagateChange(this._value);
  }
  registerOnChange(fn) {
    this.propagateChange = fn;
  }
  registerOnTouched() { }
  updateValue(event: any) {
    this.value =  event.target.value;
  }
  writeValue(value: string) {
    this.value = value;
  }

}
