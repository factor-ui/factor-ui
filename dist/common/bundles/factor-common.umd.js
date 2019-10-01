(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('@angular/core'), require('@angular/common'), require('@angular/material/button'), require('@angular/material/dialog'), require('@angular/material/snack-bar')) :
    typeof define === 'function' && define.amd ? define('factor-common', ['exports', 'rxjs', '@angular/core', '@angular/common', '@angular/material/button', '@angular/material/dialog', '@angular/material/snack-bar'], factory) :
    (factory((global['factor-common'] = {}),global.rxjs,global.ng.core,global.ng.common,global.ng.material.button,global.ng.material.dialog,global.ng.material['snack-bar']));
}(this, (function (exports,rxjs,i0,common,button,i2,i1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IconComponent = /** @class */ (function () {
        function IconComponent(configuration) {
            this.configuration = configuration;
        }
        /**
         * @return {?}
         */
        IconComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (!this.collection) {
                    if (this.configuration.icon && this.configuration.icon.collection) {
                        this.collection = this.configuration.icon.collection;
                    }
                    else {
                        this.collection = 'icons';
                    }
                }
                if (!this.path) {
                    if (this.configuration.icon && this.configuration.icon.path) {
                        this.path = this.configuration.icon.path;
                    }
                    else {
                        this.path = 'assets';
                    }
                }
            };
        IconComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ft-icon',
                        template: " <svg><use attr.xlink:href=\"{{ this.path }}/{{ this.collection }}.svg#{{ name }}\" attr.href=\"{{ this.path }}/{{ this.collection }}.svg#{{ name }}\" /></svg>\n",
                        styles: [":host{line-height:0;display:inline-block}:host[size=\"1\"]{font-size:1rem}:host[size=\"2\"]{font-size:1.5rem}:host[size=\"3\"]{font-size:2rem}:host[size=\"4\"]{font-size:3rem}:host[size=\"5\"]{font-size:4.5rem}:host[size=\"6\"]{font-size:8rem}:host[size=\"7\"]{font-size:16rem}:host[size=\"8\"]{font-size:32rem}svg{width:1em;height:1em;vertical-align:middle;fill:currentColor}"]
                    }] }
        ];
        /** @nocollapse */
        IconComponent.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: ['FactorCommonConfiguration',] }] }
            ];
        };
        IconComponent.propDecorators = {
            name: [{ type: i0.Input }],
            collection: [{ type: i0.Input }],
            path: [{ type: i0.Input }]
        };
        return IconComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ImageComponent = /** @class */ (function () {
        function ImageComponent(element) {
            this.element = element;
        }
        /**
         * @return {?}
         */
        ImageComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if ("IntersectionObserver" in window) {
                    /** @type {?} */
                    var elementObserver_1 = new IntersectionObserver(( /**
                     * @param {?} entries
                     * @param {?} observer
                     * @return {?}
                     */function (entries, observer) {
                        entries.forEach(( /**
                         * @param {?} entry
                         * @return {?}
                         */function (entry) {
                            if (entry.isIntersecting) {
                                /** @type {?} */
                                var image_1 = new Image();
                                image_1.src = _this.src;
                                setTimeout(( /**
                                 * @return {?}
                                 */function () {
                                    _this.loading = true;
                                }), 100);
                                image_1.onerror = ( /**
                                 * @return {?}
                                 */function () {
                                    _this.error = true;
                                    _this.loading = false;
                                });
                                image_1.onload = ( /**
                                 * @return {?}
                                 */function () {
                                    if ("decode" in image_1) {
                                        image_1.decode().then(( /**
                                         * @return {?}
                                         */function () {
                                            _this.loading = false;
                                            _this.shown = true;
                                        }));
                                    }
                                    else {
                                        console.error('Image.decode not available.');
                                    }
                                });
                                elementObserver_1.unobserve(_this.element.nativeElement);
                            }
                        }));
                    }), {
                        rootMargin: "0px 0px 200px 0px"
                    });
                    elementObserver_1.observe(this.element.nativeElement);
                }
                else {
                    console.error('IntersectionObserver not available.');
                    this.shown = true;
                }
            };
        ImageComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ft-image',
                        template: "<img *ngIf=\"shown\" [src]=\"src\" />\n",
                        styles: [":host{display:inline-block;overflow:hidden;display:flex;align-items:center;justify-content:center}:host.loading{background-color:rgba(0,0,0,.03)}:host.loading::after{content:'';display:block;background-image:linear-gradient(to right,transparent,rgba(255,255,255,.3),transparent);height:100%;width:50%;-webkit-animation:.8s linear infinite placeholder-loading;animation:.8s linear infinite placeholder-loading}:host.error{background-color:rgba(255,0,0,.03)}img{max-width:100%;-webkit-animation:.3s fade-in;animation:.3s fade-in}@-webkit-keyframes fade-in{from{opacity:0}to{opacity:1}}@keyframes fade-in{from{opacity:0}to{opacity:1}}@-webkit-keyframes placeholder-loading{from{transform:translate3d(-200%,0,0)}to{transform:translate3d(200%,0,0)}}@keyframes placeholder-loading{from{transform:translate3d(-200%,0,0)}to{transform:translate3d(200%,0,0)}}"]
                    }] }
        ];
        /** @nocollapse */
        ImageComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef }
            ];
        };
        ImageComponent.propDecorators = {
            error: [{ type: i0.HostBinding, args: ['class.error',] }],
            loading: [{ type: i0.HostBinding, args: ['class.loading',] }],
            src: [{ type: i0.Input }]
        };
        return ImageComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProgressComponent = /** @class */ (function () {
        function ProgressComponent() {
            this.color = 'var(--primary)';
            this.mode = 'indeterminate';
            this.value = 0;
        }
        /**
         * @return {?}
         */
        ProgressComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        ProgressComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ft-progress',
                        template: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\">\n  <circle class=\"track\" cx=\"50\" cy=\"50\" r=\"40\" />\n  <circle class=\"bar\" [ngClass]=\"mode\" cx=\"50\" cy=\"50\" r=\"40\" [ngStyle]=\"{'stroke': color, 'stroke-dashoffset': mode=='determinate'? 'calc((3.14159265 * 40 * 2 * (100 - '+value+')) / 100)' : null}\">\n    <ng-container *ngIf=\"mode=='indeterminate'\">\n      <animate attributeName=\"stroke-dashoffset\" dur=\"2s\" repeatCount=\"indefinite\" from=\"0\" to=\"502\" />\n      <animate attributeName=\"stroke-dasharray\" dur=\"2s\" repeatCount=\"indefinite\" values=\"150.6 100.4;1 250;150.6 100.4\" />\n    </ng-container>\n  </circle>\n</svg>\n",
                        styles: [":host{line-height:0;display:inline-block}:host[size=\"1\"]{font-size:1rem}:host[size=\"2\"]{font-size:1.5rem}:host[size=\"3\"]{font-size:2rem}:host[size=\"4\"]{font-size:3rem}:host[size=\"5\"]{font-size:4.5rem}:host[size=\"6\"]{font-size:8rem}:host[size=\"7\"]{font-size:16rem}:host[size=\"8\"]{font-size:32rem}svg{width:1em;height:1em;vertical-align:middle}svg .track{fill:none;stroke-opacity:.08;stroke-width:10;stroke:#000}svg .bar{fill:none;stroke-opacity:.9;stroke-width:6}svg .bar.determinate{stroke-dasharray:calc(2 * 3.1415926536 * 40)}"]
                    }] }
        ];
        /** @nocollapse */
        ProgressComponent.ctorParameters = function () { return []; };
        ProgressComponent.propDecorators = {
            color: [{ type: i0.Input }],
            mode: [{ type: i0.Input }],
            value: [{ type: i0.Input }]
        };
        return ProgressComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MessageComponent = /** @class */ (function () {
        function MessageComponent(dialogRef, data) {
            this.dialogRef = dialogRef;
            this.data = data;
        }
        /**
         * @return {?}
         */
        MessageComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        Object.defineProperty(MessageComponent.prototype, "hostClasses", {
            get: /**
             * @return {?}
             */ function () {
                return [].join(' ');
            },
            enumerable: true,
            configurable: true
        });
        MessageComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ft-message',
                        template: "<h1 mat-dialog-title *ngIf=\"data.options.title\">{{ data.options.title }}</h1>\n<div mat-dialog-content>\n  <ft-icon *ngIf=\"data.options.icon\" [name]=\"data.options.icon.name\" [collection]=\"data.options.icon.collection\" size=\"data.options.icon.size\"></ft-icon>\n  <div>{{ data.message }}</div>\n</div>\n<div mat-dialog-actions>\n  <button mat-button mat-dialog-close color=\"primary\">Accept</button>\n</div>\n",
                        styles: ["[mat-dialog-content]{display:flex;align-items:center;margin-bottom:1rem}[mat-dialog-actions]{justify-content:flex-end;padding:.5rem;margin-left:-1.5rem;margin-right:-1.5rem}"]
                    }] }
        ];
        /** @nocollapse */
        MessageComponent.ctorParameters = function () {
            return [
                { type: i2.MatDialogRef },
                { type: undefined, decorators: [{ type: i0.Inject, args: [i2.MAT_DIALOG_DATA,] }] }
            ];
        };
        MessageComponent.propDecorators = {
            hostClasses: [{ type: i0.HostBinding, args: ['class',] }]
        };
        return MessageComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MessageService = /** @class */ (function () {
        function MessageService(snackBar, dialog) {
            this.snackBar = snackBar;
            this.dialog = dialog;
        }
        /**
         * @param {?} message
         * @param {?=} options
         * @return {?}
         */
        MessageService.prototype.show = /**
         * @param {?} message
         * @param {?=} options
         * @return {?}
         */
            function (message, options) {
                /** @type {?} */
                var defaults = {
                    type: null,
                    duration: 2000
                };
                options = Object.assign(defaults, options);
                switch (options.type) {
                    default:
                    case 'notification':
                        this.snackBar.open(message, '', {
                            duration: options.duration || 2000,
                        });
                        break;
                    case 'modal':
                        /** @type {?} */
                        var dialogRef = this.dialog.open(MessageComponent, {
                            width: '250px',
                            data: { message: message, options: options },
                            disableClose: true
                        });
                        this.snackBar.dismiss();
                        break;
                }
                return rxjs.of(null);
            };
        MessageService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        MessageService.ctorParameters = function () {
            return [
                { type: i1.MatSnackBar },
                { type: i2.MatDialog }
            ];
        };
        /** @nocollapse */ MessageService.ngInjectableDef = i0.defineInjectable({ factory: function MessageService_Factory() { return new MessageService(i0.inject(i1.MatSnackBar), i0.inject(i2.MatDialog)); }, token: MessageService, providedIn: "root" });
        return MessageService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ObserveIntersectingDirective = /** @class */ (function () {
        function ObserveIntersectingDirective(element) {
            this.element = element;
            this.event = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        ObserveIntersectingDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if ("IntersectionObserver" in window) {
                    /** @type {?} */
                    var elementObserver = new IntersectionObserver(( /**
                     * @param {?} entries
                     * @param {?} observer
                     * @return {?}
                     */function (entries, observer) {
                        entries.forEach(( /**
                         * @param {?} entry
                         * @return {?}
                         */function (entry) {
                            _this.event.emit(entry.isIntersecting);
                        }));
                    }), this.options);
                    elementObserver.observe(this.element.nativeElement);
                }
                else {
                    console.error('ftObserveIntersecting not available in this browser.');
                }
            };
        ObserveIntersectingDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[ftObserveIntersecting]'
                    },] }
        ];
        /** @nocollapse */
        ObserveIntersectingDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef }
            ];
        };
        ObserveIntersectingDirective.propDecorators = {
            options: [{ type: i0.Input, args: ['ftObserveIntersectingOptions',] }],
            event: [{ type: i0.Output, args: ['ftObserveIntersecting',] }]
        };
        return ObserveIntersectingDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CommonModule = /** @class */ (function () {
        function CommonModule() {
        }
        /**
         * @param {?} configuration
         * @return {?}
         */
        CommonModule.forRoot = /**
         * @param {?} configuration
         * @return {?}
         */
            function (configuration) {
                return {
                    ngModule: CommonModule,
                    providers: [
                        { provide: 'FactorCommonConfiguration', useValue: configuration }
                    ]
                };
            };
        CommonModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            IconComponent,
                            ImageComponent,
                            ProgressComponent,
                            ObserveIntersectingDirective,
                            MessageComponent
                        ],
                        imports: [
                            common.CommonModule,
                            button.MatButtonModule,
                            i2.MatDialogModule,
                            i1.MatSnackBarModule
                        ],
                        exports: [
                            IconComponent,
                            ImageComponent,
                            ProgressComponent,
                            ObserveIntersectingDirective
                        ],
                        entryComponents: [
                            MessageComponent
                        ]
                    },] }
        ];
        return CommonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.IconComponent = IconComponent;
    exports.ImageComponent = ImageComponent;
    exports.ProgressComponent = ProgressComponent;
    exports.MessageService = MessageService;
    exports.ObserveIntersectingDirective = ObserveIntersectingDirective;
    exports.CommonModule = CommonModule;
    exports.ɵa = MessageComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=factor-common.umd.js.map