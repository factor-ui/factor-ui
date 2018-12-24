import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Injectable, NgModule, Component, ElementRef, forwardRef, HostBinding, HostListener, Input, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputsService {
    constructor() { }
}
InputsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
InputsService.ctorParameters = () => [];
/** @nocollapse */ InputsService.ngInjectableDef = defineInjectable({ factory: function InputsService_Factory() { return new InputsService(); }, token: InputsService, providedIn: "root" });

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
class InputsModule {
}
InputsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    FilePickerComponent,
                    InvalidFeedbackComponent
                ],
                imports: [],
                exports: [
                    FilePickerComponent,
                    InvalidFeedbackComponent
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

export { InputsService, InputsModule, FilePickerComponent, InvalidFeedbackComponent };

//# sourceMappingURL=factor-inputs.js.map