import { __decorate } from 'tslib';
import { ElementRef, Input, HostBinding, HostListener, Component, forwardRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonModule as CommonModule$1 } from 'factor-common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

var FilePickerComponent_1;
let FilePickerComponent = FilePickerComponent_1 = class FilePickerComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.propagateChange = (_) => { };
        this.createInput();
    }
    set accept(value) {
        this.fileInput.accept = value;
    }
    set disabled(value) {
        this.fileInput.disabled = value;
    }
    set multiple(value) {
        this.fileInput.multiple = value;
    }
    ngOnInit() {
    }
    createInput() {
        const componentElement = this.elementRef.nativeElement;
        this.fileInput = document.createElement('input');
        this.fileInput.style.display = 'none';
        this.fileInput.type = 'file';
        this.fileInput.addEventListener('change', (event) => {
            const reader = new FileReader();
            this.loadValue(event.target.files);
        });
        componentElement.appendChild(this.fileInput);
    }
    loadValue(files) {
        if (files && files.length > 0) {
            let data = [];
            for (let i = 0; i < files.length; i++) {
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
                    if (data.length == files.length) {
                        this.value = data.length > 0 ? data : null;
                    }
                };
            }
        }
    }
    openDialog() {
        this.fileInput.click();
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
        this.propagateChange(this._value);
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) {
        //this.propagateChange = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    updateValue(event) {
        this.value = event.target.value;
    }
    writeValue(value) {
        this.value = value;
    }
};
FilePickerComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], FilePickerComponent.prototype, "accept", null);
__decorate([
    Input()
], FilePickerComponent.prototype, "disabled", null);
__decorate([
    Input()
], FilePickerComponent.prototype, "multiple", null);
__decorate([
    HostBinding('class.dragover')
], FilePickerComponent.prototype, "dragover", void 0);
__decorate([
    HostListener('click')
], FilePickerComponent.prototype, "openDialog", null);
__decorate([
    Input()
], FilePickerComponent.prototype, "value", null);
FilePickerComponent = FilePickerComponent_1 = __decorate([
    Component({
        selector: 'ft-file-picker',
        template: "<ng-content></ng-content>\n",
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => FilePickerComponent_1),
                multi: true
            }
        ],
        styles: [":host{display:inline-block}"]
    })
], FilePickerComponent);

var RatingComponent_1;
let RatingComponent = RatingComponent_1 = class RatingComponent {
    constructor() {
        this.propagateChange = (_) => { };
        this.stars = [
            { value: 1 },
            { value: 2 },
            { value: 3 },
            { value: 4 },
            { value: 5 }
        ];
    }
    ngOnInit() {
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
        this.propagateChange(this._value);
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) {
        //this.propagateChange = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    setRate(value, isHover) {
        if (isHover) {
            this.hover = value;
        }
        else {
            this.value = value;
        }
    }
    updateValue(event) {
        this.value = event.target.value;
    }
    writeValue(value) {
        this.value = value;
    }
};
__decorate([
    Input()
], RatingComponent.prototype, "readOnly", void 0);
__decorate([
    Input()
], RatingComponent.prototype, "value", null);
RatingComponent = RatingComponent_1 = __decorate([
    Component({
        selector: 'ft-rating',
        template: "<ng-container *ngFor=\"let star of stars\">\n  <ng-container *ngTemplateOutlet=\"!readOnly? buttonTemplate : starTemplate; context:{star:star}\"></ng-container>\n</ng-container>\n<ng-template #buttonTemplate let-star=\"star\">\n  <button type=\"button\" *ngIf=\"!readOnly; else starTemplate\" [disabled]=\"disabled\" (mouseover)=\"setRate(star.value, true)\" (focus)=\"setRate(star.value, true)\" (blur)=\"setRate(0, true)\" (mouseout)=\"setRate(0, true)\" (click)=\"setRate(star.value)\">\n    <ng-container *ngTemplateOutlet=\"starTemplate; context:{star:star}\"></ng-container>\n  </button>\n</ng-template>\n<ng-template #starTemplate let-star=\"star\">\n  <svg [ngClass]=\"{hover: hover >= star.value, active: value >= star.value}\" viewBox=\"0 0 24 24\">\n    <path d=\"M17.93 21.315c-.534.408-5.22-3.186-5.881-3.181-.663 0-5.307 3.656-5.846 3.254-.537-.403 1.29-6.165 1.081-6.822-.209-.656-4.972-4.138-4.772-4.796.201-.658 6.015-.627 6.55-1.036.533-.41 2.233-6.215 2.895-6.219.663 0 2.43 5.779 2.968 6.182.539.403 6.352.297 6.56.953.21.656-4.513 4.197-4.714 4.856-.2.658 1.692 6.398 1.159 6.808z\" />\n  </svg>\n</ng-template>\n",
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => RatingComponent_1),
                multi: true
            }
        ],
        styles: [":host{line-height:0;display:inline-flex}:host:hover button{color:var(--primary)}:host:hover button svg:not(.hover){color:var(--gray)}:host[size=\"1\"]{font-size:1rem}:host[size=\"2\"]{font-size:1.5rem}:host[size=\"3\"]{font-size:2rem}:host[size=\"4\"]{font-size:3rem}:host[size=\"5\"]{font-size:4.5rem}:host[size=\"6\"]{font-size:8rem}:host[size=\"7\"]{font-size:16rem}:host[size=\"8\"]{font-size:32rem}svg{width:1em;height:1em;display:block}svg path{fill:none;stroke-width:1;stroke:currentColor}svg.active path,svg.hover path{fill:currentColor}button{border:0;background:0 0;padding:0}button:active,button:focus{outline:0}"]
    })
], RatingComponent);

let InputsModule = class InputsModule {
};
InputsModule = __decorate([
    NgModule({
        declarations: [
            FilePickerComponent,
            RatingComponent
        ],
        imports: [
            CommonModule,
            CommonModule$1
        ],
        exports: [
            FilePickerComponent,
            RatingComponent
        ]
    })
], InputsModule);

/*
 * Public API Surface of inputs
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FilePickerComponent, InputsModule, RatingComponent };
//# sourceMappingURL=factor-inputs.js.map
