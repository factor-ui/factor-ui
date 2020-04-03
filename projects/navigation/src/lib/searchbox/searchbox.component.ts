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
  /**
   * Clase o clases asignadas al componente
   */
  @Input()
  class: string;
  @ViewChild('input', { static: true })
  input: ElementRef<any>;
  disabled: boolean;
  private _value: string;
  private shown: boolean;
  @Output()
  execute = new EventEmitter<string>();
  @Output()
  showChange = new EventEmitter<boolean>();
  @HostBinding('class')
  get hostClasses(): string {
    return [
      this.class,
      this.shown ? 'show' : ''
    ].join(' ');
  }
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
  @Input()
  set value(value: any) {
    this._value = value || '';
    this.input.nativeElement.value = this._value;
    this.onChange(this._value);
    this.onTouched(this._value);
  }
  get value() {
    return this._value;
  }

  constructor() { }

  ngOnInit() {
  }
  closeSearch() {
    this.showChange.emit(false);
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
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
