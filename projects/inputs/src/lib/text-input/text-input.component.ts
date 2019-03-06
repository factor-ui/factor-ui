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
  autofocus: boolean;
  @Input()
  disabled: boolean;
  @ViewChild('input')
  input: ElementRef<any>;
  @Input()
  label: string;
  @Input()
  max: boolean;
  @Input()
  maxLength: boolean;
  @Input()
  min: boolean;
  propagateChange = (_: any) => { };
  @Input()
  readOnly: boolean;
  @Input()
  required: boolean;
  @Input()
  type: string = 'text';
  _value: string;

  constructor() { }

  ngOnInit() {
  }
  get value() {
    return this._value;
  }
  @Input()
  set value(value: any) {
    this.input.nativeElement.value = value;
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
