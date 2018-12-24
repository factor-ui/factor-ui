import { Component, ElementRef, forwardRef, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ft-file-picker',
  templateUrl: './file-picker.component.html',
  styleUrls: ['./file-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FilePickerComponent),
      multi: true
    }
  ]
})
export class FilePickerComponent implements OnInit, ControlValueAccessor {
  @Input()
  set accept (value: string) {
    this.fileInput.accept = value;
  }
  @Input()
  set disabled (value: boolean) {
    this.fileInput.disabled = value;
  }
  @Input()
  set multiple (value: boolean) {
    this.fileInput.multiple = value;
  }
  @HostBinding('class.dragover') dragover: boolean;
  fileInput: HTMLInputElement;
  _value: string;
  propagateChange = (_: any) => { };

  constructor(private elementRef: ElementRef) {
    this.createInput();
  }

  ngOnInit() {

  }
  createInput() {
    const componentElement = this.elementRef.nativeElement;
    this.fileInput = document.createElement('input');
    this.fileInput.style.display = 'none';
    this.fileInput.type = 'file';
    this.fileInput.addEventListener('change', (event: any) => {
      const reader = new FileReader();
      this.loadValue(event.target.files);
    });
    componentElement.appendChild(this.fileInput);
  }
  loadValue(files) {
    if (files && files.length>0) {
      let data: any[] = [];
      for (let i = 0; i<files.length; i++) {
        const file = files.item(i);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          data.push({
            data: reader.result,
            lastModifiedDate: file.lastModifiedDate,
            name: file.name,
            size: file.size,
            type: file.type
          });
          if (data.length==files.length) {
            this.value = data.length>0? data : null;
          }
        };
      }
    }
  }
  @HostListener('click')
  openDialog() {
    this.fileInput.click();
  }
  get value() {
    return this._value;
  }
  set value(value: any) {
    this._value = value;
    this.propagateChange(this._value);
  }
  writeValue(value: any) { }
  registerOnChange(fn) {
    this.propagateChange = fn;
  }
  registerOnTouched() { }
}
