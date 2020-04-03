import { ElementRef, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare class FilePickerComponent implements OnInit, ControlValueAccessor {
    private elementRef;
    set accept(value: string);
    set disabled(value: boolean);
    set multiple(value: boolean);
    dragover: boolean;
    fileInput: HTMLInputElement;
    _value: string;
    propagateChange: (_: any) => void;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    createInput(): void;
    loadValue(files: any): void;
    openDialog(): void;
    get value(): any;
    set value(value: any);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    updateValue(event: any): void;
    writeValue(value: string): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FilePickerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<FilePickerComponent, "ft-file-picker", never, { "accept": "accept"; "disabled": "disabled"; "multiple": "multiple"; "value": "value"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1waWNrZXIuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImZpbGUtcGlja2VyLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBGaWxlUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmO1xuICAgIHNldCBhY2NlcHQodmFsdWU6IHN0cmluZyk7XG4gICAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKTtcbiAgICBzZXQgbXVsdGlwbGUodmFsdWU6IGJvb2xlYW4pO1xuICAgIGRyYWdvdmVyOiBib29sZWFuO1xuICAgIGZpbGVJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBfdmFsdWU6IHN0cmluZztcbiAgICBwcm9wYWdhdGVDaGFuZ2U6IChfOiBhbnkpID0+IHZvaWQ7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZik7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBjcmVhdGVJbnB1dCgpOiB2b2lkO1xuICAgIGxvYWRWYWx1ZShmaWxlczogYW55KTogdm9pZDtcbiAgICBvcGVuRGlhbG9nKCk6IHZvaWQ7XG4gICAgZ2V0IHZhbHVlKCk6IGFueTtcbiAgICBzZXQgdmFsdWUodmFsdWU6IGFueSk7XG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZDtcbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZDtcbiAgICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkO1xuICAgIHVwZGF0ZVZhbHVlKGV2ZW50OiBhbnkpOiB2b2lkO1xuICAgIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQ7XG59XG4iXX0=