import { CommonModule } from '@angular/common';
import { Component, ElementRef, forwardRef, HostBinding, HostListener, Input, ViewChild, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FilePickerComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.propagateChange = (_) => { };
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
        this.fileInput.addEventListener('change', (event) => {
            /** @type {?} */
            const reader = new FileReader();
            this.loadValue(event.target.files);
        });
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
     * @param {?} value
     * @return {?}
     */
    writeValue(value) { }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    /**
     * @return {?}
     */
    registerOnTouched() { }
}
FilePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ft-file-picker',
                template: "<ng-content></ng-content>\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => FilePickerComponent),
                        multi: true
                    }
                ],
                styles: [""]
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
    openDialog: [{ type: HostListener, args: ['click',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            'required': (params) => 'Is required',
            'min': (params) => 'Should be a valid',
            'max': (params) => 'Should be a valid',
            'minlength': (params) => '##FIELD## should be minimum ' + params.requiredLength + ' characters',
            'maxlength': (params) => '##FIELD## should not be greater then ' + params.requiredLength + ' characters',
            'pattern': (params) => 'Should be a valid',
            'email': (params) => "Should be valid email.",
            'file': (params) => 'File must be valid'
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
                .map(field => this.getMessage(field, this.control.errors[field], this.control));
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
        fname = fname.replace(/\b\w/g, l => l.toUpperCase());
        /** @type {?} */
        var msg = this.messages[type] || this.defaultMessages[type](params) || 'Error';
        return control.dirty ? msg.replace("##FIELD##", fname) : '';
    }
    /**
     * Obtiene el name del control (input)
     * @param {?} control AbstractControl es el control con sus propiedades
     * @return {?}
     */
    getControlName(control) {
        /** @type {?} */
        const formGroup = control.parent.controls;
        return Object.keys(formGroup).find(name => control === formGroup[name]) || null;
    }
}
InvalidFeedbackComponent.decorators = [
    { type: Component, args: [{
                selector: 'ft-invalid-feedback',
                template: "{{ getError() }}\n",
                styles: [""]
            }] }
];
InvalidFeedbackComponent.propDecorators = {
    messages: [{ type: Input }],
    control: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TextInputComponent {
    constructor() {
        this.type = 'text';
        this.propagateChange = (_) => { };
    }
    /**
     * @return {?}
     */
    get hostClasses() {
        return [
            this.style ? `style-${this.style}` : ''
        ].join(' ');
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
        this.field.nativeElement.value = value;
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
     * @return {?}
     */
    registerOnTouched() { }
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
                template: "<input #field [type]=\"type\" class=\"form-control\" [ngClass]=\"{'placeholder-shown':!value || value===''}\" (keyup)=\"updateValue($event)\" (change)=\"updateValue($event)\" [readonly]=\"readOnly\" [disabled]=\"disabled\" />\n<label>{{ placeholder }}</label>\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => TextInputComponent),
                        multi: true
                    }
                ],
                styles: [":host{display:block;position:relative;padding-top:.8rem;background-color:#fff}:host input{background-color:#fff;border-radius:0;border-width:0 0 1px;padding-left:0;padding-right:0;font-weight:500;display:block}:host input+label{white-space:nowrap;width:100%;overflow:hidden;background:#fff;color:#6c757d;position:absolute;pointer-events:none;padding:.375rem 0;transition:.2s;top:.8rem;margin:0}:host input:focus{box-shadow:0 1px #007bff;border-color:#007bff}:host input:focus+label,:host input:not(.placeholder-shown)+label{top:0;padding:0;font-size:.8rem}:host input:focus+label{color:#007bff!important}"]
            }] }
];
/** @nocollapse */
TextInputComponent.ctorParameters = () => [];
TextInputComponent.propDecorators = {
    disabled: [{ type: Input }],
    type: [{ type: Input }],
    placeholder: [{ type: Input }],
    readOnly: [{ type: Input }],
    style: [{ type: Input }],
    hostClasses: [{ type: HostBinding, args: ['class',] }],
    field: [{ type: ViewChild, args: ['field',] }],
    value: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SelectComponent {
    constructor() {
        this.propagateChange = (_) => { };
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
     * @return {?}
     */
    registerOnTouched() { }
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
                template: "<select class=\"custom-select\" [ngClass]=\"{'placeholder-shown':!value || value===''}\" (change)=\"updateValue($event)\" [disabled]=\"disabled\">\n  <option value=\"\"></option>\n  <option *ngFor=\"let option of options\" [value]=\"option.value\" [selected]=\"option.value==value\">{{ option.label }}</option>\n</select>\n<label>{{ placeholder }}</label>\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => SelectComponent),
                        multi: true
                    }
                ],
                styles: [":host{background-color:#fff;display:block;position:relative;padding-top:.8rem}:host select{border-radius:0;border-width:0 0 1px;padding-left:0;padding-right:0;font-weight:500;display:block;background-color:#fff}:host select+label{white-space:nowrap;width:100%;overflow:hidden;background-color:#fff;color:#6c757d;position:absolute;pointer-events:none;padding:.375rem 0;transition:.2s;top:.8rem;margin:0}:host select:focus{box-shadow:0 1px #007bff;border-color:#007bff}:host select:focus+label,:host select:not(.placeholder-shown)+label{top:0;padding:0;font-size:.8rem}:host select:focus+label{color:#007bff!important}"]
            }] }
];
/** @nocollapse */
SelectComponent.ctorParameters = () => [];
SelectComponent.propDecorators = {
    disabled: [{ type: Input }],
    options: [{ type: Input }],
    placeholder: [{ type: Input }],
    style: [{ type: Input }],
    field: [{ type: ViewChild, args: ['field',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputsModule {
}
InputsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    FilePickerComponent,
                    InvalidFeedbackComponent,
                    SelectComponent,
                    TextInputComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    FilePickerComponent,
                    InvalidFeedbackComponent,
                    SelectComponent,
                    TextInputComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { InputsModule, FilePickerComponent, SelectComponent, TextInputComponent, InvalidFeedbackComponent };

//# sourceMappingURL=factor-inputs.js.map