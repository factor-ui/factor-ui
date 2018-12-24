import { ElementRef, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class FilePickerComponent implements OnInit, ControlValueAccessor {
    private elementRef;
    accept: string;
    disabled: boolean;
    multiple: boolean;
    dragover: boolean;
    fileInput: HTMLInputElement;
    _value: string;
    propagateChange: (_: any) => void;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    createInput(): void;
    loadValue(files: any): void;
    openDialog(): void;
    value: any;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(): void;
}
