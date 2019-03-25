import { CommonModule } from '@angular/common';
import { CommonModule as CommonModule$1 } from 'factor-common';
import { Component, ElementRef, forwardRef, HostBinding, HostListener, Input, ViewChild, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FilePickerComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.propagateChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        this.createInput();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set accept(value) {
        this.fileInput.accept = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this.fileInput.disabled = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set multiple(value) {
        this.fileInput.multiple = value;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    createInput() {
        /** @type {?} */
        const componentElement = this.elementRef.nativeElement;
        this.fileInput = document.createElement('input');
        this.fileInput.style.display = 'none';
        this.fileInput.type = 'file';
        this.fileInput.addEventListener('change', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const reader = new FileReader();
            this.loadValue(event.target.files);
        }));
        componentElement.appendChild(this.fileInput);
    }
    /**
     * @param {?} files
     * @return {?}
     */
    loadValue(files) {
        if (files && files.length > 0) {
            /** @type {?} */
            let data = [];
            for (let i = 0; i < files.length; i++) {
                /** @type {?} */
                const file = files.item(i);
                /** @type {?} */
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = (/**
                 * @return {?}
                 */
                () => {
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
                });
            }
        }
    }
    /**
     * @return {?}
     */
    openDialog() {
        this.fileInput.click();
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._value = value;
        this.propagateChange(this._value);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        //this.propagateChange = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    updateValue(event) {
        this.value = event.target.value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
    }
}
FilePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ft-file-picker',
                template: "<ng-content></ng-content>\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => FilePickerComponent)),
                        multi: true
                    }
                ],
                styles: [":host{display:inline-block}"]
            }] }
];
/** @nocollapse */
FilePickerComponent.ctorParameters = () => [
    { type: ElementRef }
];
FilePickerComponent.propDecorators = {
    accept: [{ type: Input }],
    disabled: [{ type: Input }],
    multiple: [{ type: Input }],
    dragover: [{ type: HostBinding, args: ['class.dragover',] }],
    openDialog: [{ type: HostListener, args: ['click',] }],
    value: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Componente para mostrar mensajes de error en los inputs
 */
class InvalidFeedbackComponent {
    constructor() {
        /**
         * Catálogo de mensajes según el tipo de error
         */
        this.defaultMessages = {
            'required': (/**
             * @param {?} params
             * @return {?}
             */
            (params) => 'Is required'),
            'min': (/**
             * @param {?} params
             * @return {?}
             */
            (params) => 'Should be a valid'),
            'max': (/**
             * @param {?} params
             * @return {?}
             */
            (params) => 'Should be a valid'),
            'minlength': (/**
             * @param {?} params
             * @return {?}
             */
            (params) => '##FIELD## should be minimum ' + params.requiredLength + ' characters'),
            'maxlength': (/**
             * @param {?} params
             * @return {?}
             */
            (params) => '##FIELD## should not be greater then ' + params.requiredLength + ' characters'),
            'pattern': (/**
             * @param {?} params
             * @return {?}
             */
            (params) => 'Should be a valid'),
            'email': (/**
             * @param {?} params
             * @return {?}
             */
            (params) => "Should be valid email."),
            'file': (/**
             * @param {?} params
             * @return {?}
             */
            (params) => 'File must be valid')
        };
        this.messages = {};
    }
    /**
     * Métoro que devuelve el error según corresponda
     * @return {?}
     */
    getError() {
        /** @type {?} */
        let objects = this.control.errors;
        if (objects !== null) {
            /** @type {?} */
            var errors = Object.keys(this.control.errors)
                .map((/**
             * @param {?} field
             * @return {?}
             */
            field => this.getMessage(field, this.control.errors[field], this.control)));
            return errors[0];
        }
    }
    /**
     * Método que obtiene el mensaje de error
     * @private
     * @param {?} type
     * @param {?} params
     * @param {?} control
     * @return {?}
     */
    getMessage(type, params, control) {
        /** @type {?} */
        var fname = this.getControlName(control);
        fname = fname.replace("_", " ").replace(" id", "").toLowerCase();
        fname = fname.replace(/\b\w/g, (/**
         * @param {?} l
         * @return {?}
         */
        l => l.toUpperCase()));
        /** @type {?} */
        var msg = this.messages[type] || this.defaultMessages[type](params) || 'Error';
        return control.dirty || control.touched ? msg.replace("##FIELD##", fname) : '';
    }
    /**
     * Obtiene el name del control (input)
     * @param {?} control AbstractControl es el control con sus propiedades
     * @return {?}
     */
    getControlName(control) {
        /** @type {?} */
        const formGroup = control.parent.controls;
        return Object.keys(formGroup).find((/**
         * @param {?} name
         * @return {?}
         */
        name => control === formGroup[name])) || null;
    }
}
InvalidFeedbackComponent.decorators = [
    { type: Component, args: [{
                selector: 'ft-invalid-feedback',
                template: "{{ getError() }}\n",
                styles: [":host{font-size:80%;color:#dc3545}"]
            }] }
];
InvalidFeedbackComponent.propDecorators = {
    messages: [{ type: Input }],
    control: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ListComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ListComponent.decorators = [
    { type: Component, args: [{
                selector: 'ft-list',
                template: "<p>\n  list works!\n</p>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
ListComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RatingComponent {
    constructor() {
        this.propagateChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        this.stars = [
            { value: 1 },
            { value: 2 },
            { value: 3 },
            { value: 4 },
            { value: 5 }
        ];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._value = value;
        this.propagateChange(this._value);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.propagateChange = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    /**
     * @param {?} value
     * @param {?=} isHover
     * @return {?}
     */
    setRate(value, isHover) {
        if (isHover) {
            this.hover = value;
        }
        else {
            this.value = value;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    updateValue(event) {
        this.value = event.target.value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
    }
}
RatingComponent.decorators = [
    { type: Component, args: [{
                selector: 'ft-rating',
                template: "<ng-container *ngFor=\"let star of stars\">\n  <ng-container *ngTemplateOutlet=\"!readOnly? buttonTemplate : starTemplate; context:{star:star}\"></ng-container>\n</ng-container>\n<ng-template #buttonTemplate let-star=\"star\">\n  <button type=\"button\" *ngIf=\"!readOnly; else starTemplate\" [disabled]=\"disabled\" (mouseover)=\"setRate(star.value, true)\" (focus)=\"setRate(star.value, true)\" (blur)=\"setRate(0, true)\" (mouseout)=\"setRate(0, true)\" (click)=\"setRate(star.value)\">\n    <ng-container *ngTemplateOutlet=\"starTemplate; context:{star:star}\"></ng-container>\n  </button>\n</ng-template>\n<ng-template #starTemplate let-star=\"star\">\n  <svg [ngClass]=\"{hover: hover >= star.value, active: value >= star.value}\" viewBox=\"0 0 24 24\">\n    <path d=\"M17.93 21.315c-.534.408-5.22-3.186-5.881-3.181-.663 0-5.307 3.656-5.846 3.254-.537-.403 1.29-6.165 1.081-6.822-.209-.656-4.972-4.138-4.772-4.796.201-.658 6.015-.627 6.55-1.036.533-.41 2.233-6.215 2.895-6.219.663 0 2.43 5.779 2.968 6.182.539.403 6.352.297 6.56.953.21.656-4.513 4.197-4.714 4.856-.2.658 1.692 6.398 1.159 6.808z\" />\n  </svg>\n</ng-template>\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => RatingComponent)),
                        multi: true
                    }
                ],
                styles: [":host{line-height:0;display:inline-flex}:host:hover button{color:#007bff}:host:hover button svg:not(.hover){color:#6c757d}:host[size=\"1\"]{font-size:1rem}:host[size=\"2\"]{font-size:1.5rem}:host[size=\"3\"]{font-size:2rem}:host[size=\"4\"]{font-size:3rem}:host[size=\"5\"]{font-size:4.5rem}:host[size=\"6\"]{font-size:8rem}:host[size=\"7\"]{font-size:16rem}:host[size=\"8\"]{font-size:32rem}svg{width:1em;height:1em;display:block}svg path{fill:none;stroke-width:1;stroke:currentColor}svg.active path,svg.hover path{fill:currentColor}button{border:0;background:0 0;padding:0}button:active,button:focus{outline:0}"]
            }] }
];
/** @nocollapse */
RatingComponent.ctorParameters = () => [];
RatingComponent.propDecorators = {
    readOnly: [{ type: Input }],
    value: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SelectComponent {
    constructor() {
        this.propagateChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        //this.input.nativeElement.value = value;
        this._value = value;
        this.propagateChange(this._value);
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        //this.propagateChange = fn;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    updateValue(event) {
        this.value = event.target.value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
    }
}
SelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'ft-select',
                template: "<select\n  #select\n  (change)=\"updateValue($event)\"\n  class=\"custom-select\"\n  [disabled]=\"disabled\"\n  [ngClass]=\"{'placeholder-shown':!value || value===''}\"\n>\n  <option value=\"\"></option>\n  <option *ngFor=\"let option of options\" [value]=\"option.value\" [selected]=\"option.value==value\">{{ option.label }}</option>\n</select>\n<label>{{ label }} <span *ngIf=\"required\" class=\"required-mark text-danger\">*</span></label>\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => SelectComponent)),
                        multi: true
                    }
                ],
                styles: [":host{background-color:#fff;display:block;position:relative;padding-top:.8rem}:host select{border-radius:0;border-width:0 0 1px;padding-left:0;padding-right:0;font-weight:500;display:block;background-color:#fff}:host select+label{white-space:nowrap;width:100%;overflow:hidden;color:#6c757d;position:absolute;pointer-events:none;padding:.375rem 0;transition:.2s;top:.8rem;margin-bottom:0;margin-top:1px}:host select+label .required-mark{opacity:1;transition:opacity .2s}:host select:focus{box-shadow:0 1px #007bff;border-color:#007bff}:host select:focus+label,:host select:not(.placeholder-shown)+label{top:0;padding:0;font-size:.8rem}:host select:focus+label .required-mark,:host select:not(.placeholder-shown)+label .required-mark{opacity:0}:host select:focus+label{color:#007bff!important}:host.ng-touched.ng-invalid select{border-color:#dc3545}:host.ng-touched.ng-invalid select:focus{box-shadow:0 1px #dc3545}"]
            }] }
];
/** @nocollapse */
SelectComponent.ctorParameters = () => [];
SelectComponent.propDecorators = {
    options: [{ type: Input }],
    label: [{ type: Input }],
    required: [{ type: Input }],
    style: [{ type: Input }],
    select: [{ type: ViewChild, args: ['select',] }],
    value: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TextInputComponent {
    constructor() {
        this.propagateChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        this.type = 'text';
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this.input.nativeElement.value = value;
        this._value = value;
        this.propagateChange(this._value);
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        //this.propagateChange = fn;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    updateValue(event) {
        this.value = event.target.value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
    }
}
TextInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'ft-text-input',
                template: "<input\n  #input\n  [autofocus]=\"autofocus\"\n  (change)=\"updateValue($event)\"\n  class=\"form-control\"\n  [disabled]=\"disabled\"\n  (keyup)=\"updateValue($event)\"\n  [max]=\"max\"\n  [attr.maxlength]=\"maxLength\"\n  [min]=\"min\"\n  [ngClass]=\"{'placeholder-shown':!value || value===''}\"\n  [type]=\"type\"\n  [readonly]=\"readOnly\"\n/>\n<label>{{ label }} <span *ngIf=\"required\" class=\"required-mark text-danger\">*</span></label>\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => TextInputComponent)),
                        multi: true
                    }
                ],
                styles: [":host{display:block;position:relative;padding-top:.8rem;padding-bottom:1px;background-color:#fff}:host input{background-color:#fff;border-radius:0;border-width:0 0 1px;padding-left:0;padding-right:0;font-weight:500;display:block}:host input+label{white-space:nowrap;width:100%;overflow:hidden;background:#fff;color:#6c757d;position:absolute;pointer-events:none;padding:.375rem 0;transition:.2s;top:.8rem;margin-bottom:0;margin-top:1px}:host input+label .required-mark{opacity:1;transition:opacity .2s}:host input:focus{box-shadow:0 1px #007bff;border-color:#007bff}:host input:focus+label,:host input:not(.placeholder-shown)+label{top:0;padding:0;font-size:.8rem}:host input:focus+label .required-mark,:host input:not(.placeholder-shown)+label .required-mark{opacity:0}:host input:focus+label{color:#007bff!important}:host.ng-touched.ng-invalid input{border-color:#dc3545}:host.ng-touched.ng-invalid input:focus{box-shadow:0 1px #dc3545}"]
            }] }
];
/** @nocollapse */
TextInputComponent.ctorParameters = () => [];
TextInputComponent.propDecorators = {
    autofocus: [{ type: Input }],
    input: [{ type: ViewChild, args: ['input',] }],
    label: [{ type: Input }],
    max: [{ type: Input }],
    maxLength: [{ type: Input }],
    min: [{ type: Input }],
    readOnly: [{ type: Input }],
    required: [{ type: Input }],
    type: [{ type: Input }],
    value: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TextAreaComponent {
    constructor() {
        this.propagateChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this.input.nativeElement.value = value;
        this._value = value;
        this.propagateChange(this._value);
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        //this.propagateChange = fn;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    updateValue(event) {
        this.value = event.target.value;
        if (this.autosize) ;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
    }
}
TextAreaComponent.decorators = [
    { type: Component, args: [{
                selector: 'ft-text-area',
                template: "<textarea\n  #input\n  [autofocus]=\"autofocus\"\n  (change)=\"updateValue($event)\"\n  class=\"form-control\"\n  [disabled]=\"disabled\"\n  (keyup)=\"updateValue($event)\"\n  [attr.maxlength]=\"maxLength\"\n  [ngClass]=\"{'placeholder-shown':!value || value===''}\"\n  [readonly]=\"readOnly\"\n  rows=\"1\"\n></textarea>\n<label>{{ label }} <span *ngIf=\"required\" class=\"required-mark text-danger\">*</span></label>\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => TextAreaComponent)),
                        multi: true
                    }
                ],
                styles: [":host{display:block;position:relative;padding-top:.8rem;padding-bottom:1px;background-color:#fff}:host.autosize textarea{resize:none;overflow:hidden}:host textarea{background-color:#fff;border-radius:0;border-width:0 0 1px;padding-left:0;padding-right:0;font-weight:500;display:block;transition:height .2s}:host textarea+label{white-space:nowrap;width:100%;overflow:hidden;background:#fff;color:#6c757d;position:absolute;pointer-events:none;padding:.375rem 0;transition:.2s;top:.8rem;margin-bottom:0;margin-top:1px}:host textarea+label .required-mark{opacity:1;transition:opacity .2s}:host textarea:focus{box-shadow:0 1px #007bff;border-color:#007bff}:host textarea:focus+label,:host textarea:not(.placeholder-shown)+label{top:0;padding:0;font-size:.8rem}:host textarea:focus+label .required-mark,:host textarea:not(.placeholder-shown)+label .required-mark{opacity:0}:host textarea:focus+label{color:#007bff!important}:host.ng-touched.ng-invalid textarea{border-color:#dc3545}:host.ng-touched.ng-invalid textarea:focus{box-shadow:0 1px #dc3545}"]
            }] }
];
/** @nocollapse */
TextAreaComponent.ctorParameters = () => [];
TextAreaComponent.propDecorators = {
    autofocus: [{ type: Input }],
    autosize: [{ type: Input }, { type: HostBinding, args: ['class.autosize',] }],
    input: [{ type: ViewChild, args: ['input',] }],
    label: [{ type: Input }],
    maxHeight: [{ type: Input }],
    maxLength: [{ type: Input }],
    minHeight: [{ type: Input }],
    readOnly: [{ type: Input }],
    required: [{ type: Input }],
    value: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputsModule {
}
InputsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    FilePickerComponent,
                    InvalidFeedbackComponent,
                    ListComponent,
                    RatingComponent,
                    SelectComponent,
                    TextInputComponent,
                    TextAreaComponent
                ],
                imports: [
                    CommonModule,
                    CommonModule$1
                ],
                exports: [
                    FilePickerComponent,
                    InvalidFeedbackComponent,
                    ListComponent,
                    RatingComponent,
                    SelectComponent,
                    TextInputComponent,
                    TextAreaComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { InputsModule, FilePickerComponent, InvalidFeedbackComponent, ListComponent, RatingComponent, SelectComponent, TextAreaComponent, TextInputComponent };

//# sourceMappingURL=factor-inputs.js.map