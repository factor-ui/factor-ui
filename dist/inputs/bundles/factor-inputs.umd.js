(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('factor-common'), require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('factor-inputs', ['exports', '@angular/common', 'factor-common', '@angular/core', '@angular/forms'], factory) :
    (factory((global['factor-inputs'] = {}),global.ng.common,global.factorCommon,global.ng.core,global.ng.forms));
}(this, (function (exports,common,factorCommon,core,forms) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FilePickerComponent = /** @class */ (function () {
        function FilePickerComponent(elementRef) {
            this.elementRef = elementRef;
            this.propagateChange = ( /**
             * @param {?} _
             * @return {?}
             */function (_) { });
            this.createInput();
        }
        Object.defineProperty(FilePickerComponent.prototype, "accept", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.fileInput.accept = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FilePickerComponent.prototype, "disabled", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.fileInput.disabled = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FilePickerComponent.prototype, "multiple", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
                this.fileInput.addEventListener('change', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) {
                    /** @type {?} */
                    var reader = new FileReader();
                    _this.loadValue(event.target.files);
                }));
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
                        reader.onload = ( /**
                         * @return {?}
                         */function () {
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
                        });
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
             */ function () {
                return this._value;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
        FilePickerComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.propagateChange = fn;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        FilePickerComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                //this.propagateChange = fn;
            };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        FilePickerComponent.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
            function (isDisabled) {
                this.disabled = isDisabled;
            };
        /**
         * @param {?} event
         * @return {?}
         */
        FilePickerComponent.prototype.updateValue = /**
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
        FilePickerComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.value = value;
            };
        FilePickerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ft-file-picker',
                        template: "<ng-content></ng-content>\n",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef(( /**
                                 * @return {?}
                                 */function () { return FilePickerComponent; })),
                                multi: true
                            }
                        ],
                        styles: [":host{display:inline-block}"]
                    }] }
        ];
        /** @nocollapse */
        FilePickerComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        FilePickerComponent.propDecorators = {
            accept: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            multiple: [{ type: core.Input }],
            dragover: [{ type: core.HostBinding, args: ['class.dragover',] }],
            openDialog: [{ type: core.HostListener, args: ['click',] }],
            value: [{ type: core.Input }]
        };
        return FilePickerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RatingComponent = /** @class */ (function () {
        function RatingComponent() {
            this.propagateChange = ( /**
             * @param {?} _
             * @return {?}
             */function (_) { });
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
        Object.defineProperty(RatingComponent.prototype, "value", {
            get: /**
             * @return {?}
             */ function () {
                return this._value;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
        RatingComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.propagateChange = fn;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        RatingComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                //this.propagateChange = fn;
            };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        RatingComponent.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
            function (isDisabled) {
                this.disabled = isDisabled;
            };
        /**
         * @param {?} value
         * @param {?=} isHover
         * @return {?}
         */
        RatingComponent.prototype.setRate = /**
         * @param {?} value
         * @param {?=} isHover
         * @return {?}
         */
            function (value, isHover) {
                if (isHover) {
                    this.hover = value;
                }
                else {
                    this.value = value;
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        RatingComponent.prototype.updateValue = /**
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
        RatingComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.value = value;
            };
        RatingComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ft-rating',
                        template: "<ng-container *ngFor=\"let star of stars\">\n  <ng-container *ngTemplateOutlet=\"!readOnly? buttonTemplate : starTemplate; context:{star:star}\"></ng-container>\n</ng-container>\n<ng-template #buttonTemplate let-star=\"star\">\n  <button type=\"button\" *ngIf=\"!readOnly; else starTemplate\" [disabled]=\"disabled\" (mouseover)=\"setRate(star.value, true)\" (focus)=\"setRate(star.value, true)\" (blur)=\"setRate(0, true)\" (mouseout)=\"setRate(0, true)\" (click)=\"setRate(star.value)\">\n    <ng-container *ngTemplateOutlet=\"starTemplate; context:{star:star}\"></ng-container>\n  </button>\n</ng-template>\n<ng-template #starTemplate let-star=\"star\">\n  <svg [ngClass]=\"{hover: hover >= star.value, active: value >= star.value}\" viewBox=\"0 0 24 24\">\n    <path d=\"M17.93 21.315c-.534.408-5.22-3.186-5.881-3.181-.663 0-5.307 3.656-5.846 3.254-.537-.403 1.29-6.165 1.081-6.822-.209-.656-4.972-4.138-4.772-4.796.201-.658 6.015-.627 6.55-1.036.533-.41 2.233-6.215 2.895-6.219.663 0 2.43 5.779 2.968 6.182.539.403 6.352.297 6.56.953.21.656-4.513 4.197-4.714 4.856-.2.658 1.692 6.398 1.159 6.808z\" />\n  </svg>\n</ng-template>\n",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef(( /**
                                 * @return {?}
                                 */function () { return RatingComponent; })),
                                multi: true
                            }
                        ],
                        styles: [":host{line-height:0;display:inline-flex}:host:hover button{color:#007bff}:host:hover button svg:not(.hover){color:#6c757d}:host[size=\"1\"]{font-size:1rem}:host[size=\"2\"]{font-size:1.5rem}:host[size=\"3\"]{font-size:2rem}:host[size=\"4\"]{font-size:3rem}:host[size=\"5\"]{font-size:4.5rem}:host[size=\"6\"]{font-size:8rem}:host[size=\"7\"]{font-size:16rem}:host[size=\"8\"]{font-size:32rem}svg{width:1em;height:1em;display:block}svg path{fill:none;stroke-width:1;stroke:currentColor}svg.active path,svg.hover path{fill:currentColor}button{border:0;background:0 0;padding:0}button:active,button:focus{outline:0}"]
                    }] }
        ];
        /** @nocollapse */
        RatingComponent.ctorParameters = function () { return []; };
        RatingComponent.propDecorators = {
            readOnly: [{ type: core.Input }],
            value: [{ type: core.Input }]
        };
        return RatingComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var InputsModule = /** @class */ (function () {
        function InputsModule() {
        }
        InputsModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            FilePickerComponent,
                            RatingComponent
                        ],
                        imports: [
                            common.CommonModule,
                            factorCommon.CommonModule
                        ],
                        exports: [
                            FilePickerComponent,
                            RatingComponent
                        ]
                    },] }
        ];
        return InputsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.InputsModule = InputsModule;
    exports.FilePickerComponent = FilePickerComponent;
    exports.RatingComponent = RatingComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=factor-inputs.umd.js.map