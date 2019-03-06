import { Component, OnInit, Input, HostBinding, forwardRef, ElementRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ft-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextAreaComponent),
      multi: true
    }
  ]
})
export class TextAreaComponent implements OnInit, ControlValueAccessor {
  @Input()
  autofocus: boolean;
  @Input()
  @HostBinding('class.autosize')
  autosize: boolean;
  @Input()
  disabled: boolean;
  @ViewChild('input')
  input: ElementRef<any>;
  @Input()
  label: string;
  @Input()
  maxHeight: number;
  @Input()
  maxLength: boolean;
  @Input()
  minHeight: number;
  propagateChange = (_: any) => { };
  @Input()
  readOnly: boolean;
  @Input()
  required: boolean;
  _value: string;

  constructor() { }

  ngOnInit() { }
  get value() {
    return this._value;
  }
  @Input()
  set value(value: any) {
    this.input.nativeElement.value = value;
    this._value = value;
    this.propagateChange(this._value);
  }
  fitToContent(maxHeight: number) {
    const input = this.input.nativeElement;
    let adjustedHeight = input.clientHeight;
    if (!maxHeight || maxHeight > adjustedHeight) {
      adjustedHeight = Math.max(input.scrollHeight, adjustedHeight);
      if (maxHeight) {
        adjustedHeight = Math.min(maxHeight, adjustedHeight);
      }
      input.style.height = adjustedHeight + "px";
    }
  }
  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }
  registerOnTouched() { }
  updateValue(event: any) {
    this.value = event.target.value;
    if (this.autosize) {
      this.fitToContent(this.maxHeight);
    }
  }
  writeValue(value: string) {
    this.value = value;
  }

}
