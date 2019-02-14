import { Component, OnInit, Input, HostBinding, forwardRef, ElementRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ft-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent implements OnInit, ControlValueAccessor {
  @Input()
  disabled: boolean;
  @Input()
  options: any[];
  @Input()
  label: string;
  @Input()
  required: boolean;
  @Input()
  style: 'default' | 'outline';
  @ViewChild('select')
  select: ElementRef<any>;
  _value: string;
  propagateChange = (_: any) => { };

  constructor() { }

  ngOnInit() {
  }
  get value() {
    return this._value;
  }
  set value(value: any) {
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
