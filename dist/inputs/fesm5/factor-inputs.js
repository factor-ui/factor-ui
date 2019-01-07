import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Injectable, Component, NgModule, ElementRef, forwardRef, HostBinding, HostListener, Input, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InputsService = /** @class */ (function () {
    function InputsService() {
    }
    InputsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    InputsService.ctorParameters = function () { return []; };
    /** @nocollapse */ InputsService.ngInjectableDef = defineInjectable({ factory: function InputsService_Factory() { return new InputsService(); }, token: InputsService, providedIn: "root" });
    return InputsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FilePickerComponent = /** @class */ (function () {
    function FilePickerComponent(elementRef) {
        this.elementRef = elementRef;
        this.propagateChange = function (_) { };
        this.createInput();
    }
    Object.defineProperty(FilePickerComponent.prototype, "accept", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.fileInput.accept = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilePickerComponent.prototype, "disabled", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.fileInput.disabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilePickerComponent.prototype, "multiple", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.fileInput.multiple = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FilePickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FilePickerComponent.prototype.createInput = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var componentElement = this.elementRef.nativeElement;
        this.fileInput = document.createElement('input');
        this.fileInput.style.display = 'none';
        this.fileInput.type = 'file';
        this.fileInput.addEventListener('change', function (event) {
            /** @type {?} */
            var reader = new FileReader();
            _this.loadValue(event.target.files);
        });
        componentElement.appendChild(this.fileInput);
    };
    /**
     * @param {?} files
     * @return {?}
     */
    FilePickerComponent.prototype.loadValue = /**
     * @param {?} files
     * @return {?}
     */
    function (files) {
        var _this = this;
        if (files && files.length > 0) {
            /** @type {?} */
            var data_1 = [];
            var _loop_1 = function (i) {
                /** @type {?} */
                var file = files.item(i);
                /** @type {?} */
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function () {
                    data_1.push({
                        data: reader.result,
                        lastModifiedDate: file.lastModifiedDate,
                        name: file.name,
                        size: file.size,
                        type: file.type
                    });
                    if (data_1.length == files.length) {
                        _this.value = data_1.length > 0 ? data_1 : null;
                    }
                };
            };
            for (var i = 0; i < files.length; i++) {
                _loop_1(i);
            }
        }
    };
    /**
     * @return {?}
     */
    FilePickerComponent.prototype.openDialog = /**
     * @return {?}
     */
    function () {
        this.fileInput.click();
    };
    Object.defineProperty(FilePickerComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._value = value;
            this.propagateChange(this._value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    FilePickerComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) { };
    /**
     * @param {?} fn
     * @return {?}
     */
    FilePickerComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.propagateChange = fn;
    };
    /**
     * @return {?}
     */
    FilePickerComponent.prototype.registerOnTouched = /**
     * @return {?}
     */
    function () { };
    FilePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ft-file-picker',
                    template: "<ng-content></ng-content>\n",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return FilePickerComponent; }),
                            multi: true
                        }
                    ],
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    FilePickerComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    FilePickerComponent.propDecorators = {
        accept: [{ type: Input }],
        disabled: [{ type: Input }],
        multiple: [{ type: Input }],
        dragover: [{ type: HostBinding, args: ['class.dragover',] }],
        openDialog: [{ type: HostListener, args: ['click',] }]
    };
    return FilePickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Componente para mostrar mensajes de error en los inputs
 */
var InvalidFeedbackComponent = /** @class */ (function () {
    function InvalidFeedbackComponent() {
        /**
         * Catálogo de mensajes según el tipo de error
         */
        this.defaultMessages = {
            'required': function (params) { return 'Is required'; },
            'min': function (params) { return 'Should be a valid'; },
            'max': function (params) { return 'Should be a valid'; },
            'minlength': function (params) { return '##FIELD## should be minimum ' + params.requiredLength + ' characters'; },
            'maxlength': function (params) { return '##FIELD## should not be greater then ' + params.requiredLength + ' characters'; },
            'pattern': function (params) { return 'Should be a valid'; },
            'email': function (params) { return "Should be valid email."; },
            'file': function (params) { return 'File must be valid'; }
        };
        this.messages = {};
    }
    /**
     * Métoro que devuelve el error según corresponda
     */
    /**
     * Métoro que devuelve el error según corresponda
     * @return {?}
     */
    InvalidFeedbackComponent.prototype.getError = /**
     * Métoro que devuelve el error según corresponda
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var objects = this.control.errors;
        if (objects !== null) {
            /** @type {?} */
            var errors = Object.keys(this.control.errors)
                .map(function (field) { return _this.getMessage(field, _this.control.errors[field], _this.control); });
            return errors[0];
        }
    };
    /**
     * Método que obtiene el mensaje de error
     */
    /**
     * Método que obtiene el mensaje de error
     * @private
     * @param {?} type
     * @param {?} params
     * @param {?} control
     * @return {?}
     */
    InvalidFeedbackComponent.prototype.getMessage = /**
     * Método que obtiene el mensaje de error
     * @private
     * @param {?} type
     * @param {?} params
     * @param {?} control
     * @return {?}
     */
    function (type, params, control) {
        /** @type {?} */
        var fname = this.getControlName(control);
        fname = fname.replace("_", " ").replace(" id", "").toLowerCase();
        fname = fname.replace(/\b\w/g, function (l) { return l.toUpperCase(); });
        /** @type {?} */
        var msg = this.messages[type] || this.defaultMessages[type](params) || 'Error';
        return control.dirty ? msg.replace("##FIELD##", fname) : '';
    };
    /**
     * Obtiene el name del control (input)
     * @param control AbstractControl es el control con sus propiedades
     */
    /**
     * Obtiene el name del control (input)
     * @param {?} control AbstractControl es el control con sus propiedades
     * @return {?}
     */
    InvalidFeedbackComponent.prototype.getControlName = /**
     * Obtiene el name del control (input)
     * @param {?} control AbstractControl es el control con sus propiedades
     * @return {?}
     */
    function (control) {
        /** @type {?} */
        var formGroup = control.parent.controls;
        return Object.keys(formGroup).find(function (name) { return control === formGroup[name]; }) || null;
    };
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
    return InvalidFeedbackComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TextInputComponent = /** @class */ (function () {
    function TextInputComponent() {
    }
    /**
     * @return {?}
     */
    TextInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    TextInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ft-text-input',
                    template: "<p>\n  text-input works!\n</p>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    TextInputComponent.ctorParameters = function () { return []; };
    return TextInputComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InputsModule = /** @class */ (function () {
    function InputsModule() {
    }
    InputsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        FilePickerComponent,
                        InvalidFeedbackComponent,
                        TextInputComponent
                    ],
                    imports: [],
                    exports: [
                        FilePickerComponent,
                        InvalidFeedbackComponent
                    ]
                },] }
    ];
    return InputsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { InputsService, InputsModule, FilePickerComponent, InvalidFeedbackComponent, TextInputComponent as ɵa };

//# sourceMappingURL=factor-inputs.js.map