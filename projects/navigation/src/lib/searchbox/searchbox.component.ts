import { Component, OnInit, ViewChild, ElementRef, forwardRef, Input, HostBinding, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ft-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchboxComponent),
      multi: true
    }
  ]
})
export class SearchboxComponent implements OnInit {
  @ViewChild('input')
  input: ElementRef<any>;
  disabled: boolean;
  onChange = (_: any) => { };
  onTouched = (_: any) => { };
  @Input()
  set show(value: boolean) {
    this.shown = value;
    if (value) {
      setTimeout(() => {
        this.input.nativeElement.focus();
      }, 300);
    }
  }
  @Output()
  showChange = new EventEmitter<boolean>();
  shown: boolean;
  @Output()
  execute = new EventEmitter<string>();
  _value: string;

  constructor() { }

  ngOnInit() {
  }
  closeSearch() {
    this.showChange.emit(false);
  }
  @HostBinding('class')
  get hostClasses(): string {
    return [
      this.shown ? 'show' : ''
    ].join(' ');
  }
  get value() {
    return this._value;
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
  @Input()
  set value(value: any) {
    this._value = value || '';
    this.input.nativeElement.value = this._value;
    this.onChange(this._value);
    this.onTouched(this._value);
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  onSearch(event) {
    event.preventDefault();
    this.input.nativeElement.value = '';
    this.execute.emit(this._value);
  }
  updateValue(event: any) {
    this.value = event.target.value;
  }
  writeValue(value: string) {
    this.value = value;
  }

}
