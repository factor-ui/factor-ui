import { CommonModule } from '@angular/common';
import { CommonModule as CommonModule$1 } from 'factor-common';
import { Component, ElementRef, forwardRef, HostBinding, HostListener, Input, ViewChild, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

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
        return control.dirty || control.touched ? msg.replace("##FIELD##", fname) : '';
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
                    styles: [":host{font-size:80%;color:#dc3545}"]
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
var ListComponent = /** @class */ (function () {
    function ListComponent() {
    }
    /**
     * @return {?}
     */
    ListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ft-list',
                    template: "<p>\n  list works!\n</p>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ListComponent.ctorParameters = function () { return []; };
    return ListComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
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
    RatingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} value
     * @param {?=} isHover
     * @return {?}
     */
    RatingComponent.prototype.setRating = /**
     * @param {?} value
     * @param {?=} isHover
     * @return {?}
     */
    function (value, isHover) {
        if (isHover) {
            this.overRating = value;
        }
        else {
            this.rating = value;
        }
    };
    RatingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ft-rating',
                    template: "<ft-icon name=\"star\" size=\"2\" (mouseover)=\"setRating(star.value, true)\" (click)=\"setRating(star.value)\" *ngFor=\"let star of stars\"></ft-icon>\n",
                    host: { class: 'd-flex' },
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    RatingComponent.ctorParameters = function () { return []; };
    return RatingComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SelectComponent = /** @class */ (function () {
    function SelectComponent() {
        this.propagateChange = function (_) { };
    }
    /**
     * @return {?}
     */
    SelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    Object.defineProperty(SelectComponent.prototype, "value", {
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
     * @param {?} fn
     * @return {?}
     */
    SelectComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.propagateChange = fn;
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.registerOnTouched = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.updateValue = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.value = event.target.value;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SelectComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
    };
    SelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ft-select',
                    template: "<select\n  #select\n  (change)=\"updateValue($event)\"\n  class=\"custom-select\"\n  [disabled]=\"disabled\"\n  [ngClass]=\"{'placeholder-shown':!value || value===''}\"\n>\n  <option value=\"\"></option>\n  <option *ngFor=\"let option of options\" [value]=\"option.value\" [selected]=\"option.value==value\">{{ option.label }}</option>\n</select>\n<label>{{ label }} <span *ngIf=\"required\" class=\"required-mark text-danger\">*</span></label>\n",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return SelectComponent; }),
                            multi: true
                        }
                    ],
                    styles: [":host{background-color:#fff;display:block;position:relative;padding-top:.8rem}:host select{border-radius:0;border-width:0 0 1px;padding-left:0;padding-right:0;font-weight:500;display:block;background-color:#fff}:host select+label{white-space:nowrap;width:100%;overflow:hidden;color:#6c757d;position:absolute;pointer-events:none;padding:.375rem 0;transition:.2s;top:.8rem;margin-bottom:0;margin-top:1px}:host select+label .required-mark{opacity:1;transition:opacity .2s}:host select:focus{box-shadow:0 1px #007bff;border-color:#007bff}:host select:focus+label,:host select:not(.placeholder-shown)+label{top:0;padding:0;font-size:.8rem}:host select:focus+label .required-mark,:host select:not(.placeholder-shown)+label .required-mark{opacity:0}:host select:focus+label{color:#007bff!important}:host.ng-touched.ng-invalid select{border-color:#dc3545}:host.ng-touched.ng-invalid select:focus{box-shadow:0 1px #dc3545}"]
                }] }
    ];
    /** @nocollapse */
    SelectComponent.ctorParameters = function () { return []; };
    SelectComponent.propDecorators = {
        disabled: [{ type: Input }],
        options: [{ type: Input }],
        label: [{ type: Input }],
        required: [{ type: Input }],
        style: [{ type: Input }],
        select: [{ type: ViewChild, args: ['select',] }]
    };
    return SelectComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TextInputComponent = /** @class */ (function () {
    function TextInputComponent() {
        this.propagateChange = function (_) { };
        this.type = 'text';
    }
    /**
     * @return {?}
     */
    TextInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    Object.defineProperty(TextInputComponent.prototype, "value", {
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
            this.input.nativeElement.value = value;
            this._value = value;
            this.propagateChange(this._value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} fn
     * @return {?}
     */
    TextInputComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.propagateChange = fn;
    };
    /**
     * @return {?}
     */
    TextInputComponent.prototype.registerOnTouched = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} event
     * @return {?}
     */
    TextInputComponent.prototype.updateValue = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.value = event.target.value;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TextInputComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
    };
    TextInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ft-text-input',
                    template: "<input\n  #input\n  [autofocus]=\"autofocus\"\n  (change)=\"updateValue($event)\"\n  class=\"form-control\"\n  [disabled]=\"disabled\"\n  (keyup)=\"updateValue($event)\"\n  [max]=\"max\"\n  [attr.maxlength]=\"maxLength\"\n  [min]=\"min\"\n  [ngClass]=\"{'placeholder-shown':!value || value===''}\"\n  [type]=\"type\"\n  [readonly]=\"readOnly\"\n/>\n<label>{{ label }} <span *ngIf=\"required\" class=\"required-mark text-danger\">*</span></label>\n",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return TextInputComponent; }),
                            multi: true
                        }
                    ],
                    styles: [":host{display:block;position:relative;padding-top:.8rem;padding-bottom:1px;background-color:#fff}:host input{background-color:#fff;border-radius:0;border-width:0 0 1px;padding-left:0;padding-right:0;font-weight:500;display:block}:host input+label{white-space:nowrap;width:100%;overflow:hidden;background:#fff;color:#6c757d;position:absolute;pointer-events:none;padding:.375rem 0;transition:.2s;top:.8rem;margin-bottom:0;margin-top:1px}:host input+label .required-mark{opacity:1;transition:opacity .2s}:host input:focus{box-shadow:0 1px #007bff;border-color:#007bff}:host input:focus+label,:host input:not(.placeholder-shown)+label{top:0;padding:0;font-size:.8rem}:host input:focus+label .required-mark,:host input:not(.placeholder-shown)+label .required-mark{opacity:0}:host input:focus+label{color:#007bff!important}:host.ng-touched.ng-invalid input{border-color:#dc3545}:host.ng-touched.ng-invalid input:focus{box-shadow:0 1px #dc3545}"]
                }] }
    ];
    /** @nocollapse */
    TextInputComponent.ctorParameters = function () { return []; };
    TextInputComponent.propDecorators = {
        autofocus: [{ type: Input }],
        disabled: [{ type: Input }],
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
    return TextInputComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TextAreaComponent = /** @class */ (function () {
    function TextAreaComponent() {
        this.propagateChange = function (_) { };
    }
    /**
     * @return {?}
     */
    TextAreaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    Object.defineProperty(TextAreaComponent.prototype, "value", {
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
            this.input.nativeElement.value = value;
            this._value = value;
            this.propagateChange(this._value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} maxHeight
     * @return {?}
     */
    TextAreaComponent.prototype.fitToContent = /**
     * @param {?} maxHeight
     * @return {?}
     */
    function (maxHeight) {
        /** @type {?} */
        var input = this.input.nativeElement;
        /** @type {?} */
        var adjustedHeight = input.clientHeight;
        if (!maxHeight || maxHeight > adjustedHeight) {
            adjustedHeight = Math.max(input.scrollHeight, adjustedHeight);
            if (maxHeight) {
                adjustedHeight = Math.min(maxHeight, adjustedHeight);
            }
            input.style.height = adjustedHeight + "px";
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    TextAreaComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.propagateChange = fn;
    };
    /**
     * @return {?}
     */
    TextAreaComponent.prototype.registerOnTouched = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} event
     * @return {?}
     */
    TextAreaComponent.prototype.updateValue = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.value = event.target.value;
        if (this.autosize) {
            this.fitToContent(this.maxHeight);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TextAreaComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
    };
    TextAreaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ft-text-area',
                    template: "<textarea\n  #input\n  [autofocus]=\"autofocus\"\n  (change)=\"updateValue($event)\"\n  class=\"form-control\"\n  [disabled]=\"disabled\"\n  (keyup)=\"updateValue($event)\"\n  [attr.maxlength]=\"maxLength\"\n  [ngClass]=\"{'placeholder-shown':!value || value===''}\"\n  [readonly]=\"readOnly\"\n  rows=\"1\"\n></textarea>\n<label>{{ label }} <span *ngIf=\"required\" class=\"required-mark text-danger\">*</span></label>\n",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return TextAreaComponent; }),
                            multi: true
                        }
                    ],
                    styles: [":host{display:block;position:relative;padding-top:.8rem;padding-bottom:1px;background-color:#fff}:host.autosize textarea{resize:none;overflow:hidden}:host textarea{background-color:#fff;border-radius:0;border-width:0 0 1px;padding-left:0;padding-right:0;font-weight:500;display:block;transition:height .2s}:host textarea+label{white-space:nowrap;width:100%;overflow:hidden;background:#fff;color:#6c757d;position:absolute;pointer-events:none;padding:.375rem 0;transition:.2s;top:.8rem;margin-bottom:0;margin-top:1px}:host textarea+label .required-mark{opacity:1;transition:opacity .2s}:host textarea:focus{box-shadow:0 1px #007bff;border-color:#007bff}:host textarea:focus+label,:host textarea:not(.placeholder-shown)+label{top:0;padding:0;font-size:.8rem}:host textarea:focus+label .required-mark,:host textarea:not(.placeholder-shown)+label .required-mark{opacity:0}:host textarea:focus+label{color:#007bff!important}:host.ng-touched.ng-invalid textarea{border-color:#dc3545}:host.ng-touched.ng-invalid textarea:focus{box-shadow:0 1px #dc3545}"]
                }] }
    ];
    /** @nocollapse */
    TextAreaComponent.ctorParameters = function () { return []; };
    TextAreaComponent.propDecorators = {
        autofocus: [{ type: Input }],
        autosize: [{ type: Input }, { type: HostBinding, args: ['class.autosize',] }],
        disabled: [{ type: Input }],
        input: [{ type: ViewChild, args: ['input',] }],
        label: [{ type: Input }],
        maxHeight: [{ type: Input }],
        maxLength: [{ type: Input }],
        minHeight: [{ type: Input }],
        readOnly: [{ type: Input }],
        required: [{ type: Input }],
        value: [{ type: Input }]
    };
    return TextAreaComponent;
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

export { InputsModule, FilePickerComponent, InvalidFeedbackComponent, ListComponent, RatingComponent, SelectComponent, TextAreaComponent, TextInputComponent };

//# sourceMappingURL=factor-inputs.js.map