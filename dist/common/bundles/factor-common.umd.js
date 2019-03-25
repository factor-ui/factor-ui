(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('factor-common', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global['factor-common'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,i0,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                        styles: [":host{display:inline-block;overflow:hidden;display:flex;align-items:center;justify-content:center}:host.loading{background-color:rgba(0,0,0,.03)}:host.loading::after{content:'';display:block;background-image:linear-gradient(to right,transparent,rgba(255,255,255,.3),transparent);height:100%;width:50%;-webkit-animation:.8s linear infinite placeholder-loading;animation:.8s linear infinite placeholder-loading}:host.error{background-color:rgba(255,0,0,.03)}img{max-width:100%;-webkit-animation:.3s fade-in;animation:.3s fade-in}@-webkit-keyframes fade-in{from{opacity:0}to{opacity:1}}@keyframes fade-in{from{opacity:0}to{opacity:1}}@-webkit-keyframes placeholder-loading{from{-webkit-transform:translate3d(-200%,0,0);transform:translate3d(-200%,0,0)}to{-webkit-transform:translate3d(200%,0,0);transform:translate3d(200%,0,0)}}@keyframes placeholder-loading{from{-webkit-transform:translate3d(-200%,0,0);transform:translate3d(-200%,0,0)}to{-webkit-transform:translate3d(200%,0,0);transform:translate3d(200%,0,0)}}"]
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProgressComponent = /** @class */ (function () {
        function ProgressComponent() {
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
                        template: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"120\" height=\"120\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\">\n  <circle class=\"track\" cx=\"50\" cy=\"50\" r=\"40\" />\n  <circle class=\"bar\" cx=\"50\" cy=\"50\" r=\"40\">\n    <animate attributeName=\"stroke-dashoffset\" dur=\"2s\" repeatCount=\"indefinite\" from=\"0\" to=\"502\" />\n    <animate attributeName=\"stroke-dasharray\" dur=\"2s\" repeatCount=\"indefinite\" values=\"150.6 100.4;1 250;150.6 100.4\" />\n  </circle>\n</svg>\n",
                        styles: [":host{line-height:0;display:inline-block}:host[size=\"1\"]{font-size:1rem}:host[size=\"2\"]{font-size:1.5rem}:host[size=\"3\"]{font-size:2rem}:host[size=\"4\"]{font-size:3rem}:host[size=\"5\"]{font-size:4.5rem}:host[size=\"6\"]{font-size:8rem}:host[size=\"7\"]{font-size:16rem}:host[size=\"8\"]{font-size:32rem}svg{width:1em;height:1em;vertical-align:middle}svg .track{fill:none;stroke-opacity:.08;stroke-width:10;stroke:#000}svg .bar{fill:none;stroke-opacity:.9;stroke-width:6;stroke:#007bff}"]
                    }] }
        ];
        /** @nocollapse */
        ProgressComponent.ctorParameters = function () { return []; };
        return ProgressComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MessageService = /** @class */ (function () {
        function MessageService() {
        }
        /**
         * @param {?} content
         * @param {?=} options
         * @return {?}
         */
        MessageService.prototype.show = /**
         * @param {?} content
         * @param {?=} options
         * @return {?}
         */
            function (content, options) {
                if (this.element) ;
                this.element = document.createElement('div');
                switch (options.type) {
                    case 'toast':
                        this.element.classList.add('toast', 'fade');
                        this.element.style = 'position: fixed; bottom: 2rem; left: 2rem; right: 2rem; margin: auto;';
                        this.element.innerHTML = "\n            <div class=\"toast-body\">" + content + "</div>\n          ";
                        document.body.appendChild(this.element);
                        $(this.element).toast('show');
                        break;
                    default:
                        this.element.classList.add('modal', 'fade');
                        this.element.innerHTML = "\n            <div class=\"modal-dialog modal-dialog-centered\">\n              <div class=\"modal-content\">\n                <div class=\"modal-body\">" + content + "</div>\n                <div class=\"modal-footer\" style=\"padding-top: 0; border: 0;\">\n                  <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Accept</button>\n                </div>\n              </div>\n            </div>\n          ";
                        document.body.appendChild(this.element);
                        $(this.element).modal();
                        break;
                }
            };
        MessageService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        MessageService.ctorParameters = function () { return []; };
        /** @nocollapse */ MessageService.ngInjectableDef = i0.defineInjectable({ factory: function MessageService_Factory() { return new MessageService(); }, token: MessageService, providedIn: "root" });
        return MessageService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RippleDirective = /** @class */ (function () {
        function RippleDirective(elementRef) {
            this.elementRef = elementRef;
        }
        /**
         * @param {?} event
         * @return {?}
         */
        RippleDirective.prototype.showRipple = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var element = this.elementRef.nativeElement;
                /** @type {?} */
                var ripple = element.querySelector('.ripple');
                /** @type {?} */
                var eventType = event.type;
                // Ripple
                if (ripple === null) {
                    // Create ripple
                    ripple = document.createElement('span');
                    ripple.classList.add('ripple');
                    // Prepend ripple to element
                    element.insertBefore(ripple, element.firstChild);
                    // Set ripple this.size
                    if (!ripple.offsetHeight && !ripple.offsetWidth) {
                        this.size = Math.max(element.offsetWidth, element.offsetHeight);
                        ripple.style.width = this.size + 'px';
                        ripple.style.height = this.size + 'px';
                    }
                }
                // Remove animation effect
                ripple.className = ripple.className.replace(/ ?(ripple-animate)/g, '');
                // get click coordinates by event type
                if (eventType === 'mousedown') {
                    this.x = event.pageX;
                    this.y = event.pageY;
                }
                else if (eventType === 'touchstart') {
                    try {
                        /** @type {?} */
                        var originalEvent = void 0;
                        if (typeof event.changedTouches !== 'undefined') {
                            originalEvent = event.changedTouches[0];
                        }
                        else {
                            originalEvent = event.originalEvent;
                        }
                        this.x = originalEvent.pageX;
                        this.y = originalEvent.pageY;
                    }
                    catch (e) {
                        // fall back to center of el
                        this.x = ripple.offsetWidth / 2;
                        this.y = ripple.offsetHeight / 2;
                    }
                }
                this.offsets = this.getPosition(element);
                ripple.style.left = (this.x - this.offsets.left - this.size / 2) + 'px';
                ripple.style.top = (this.y - this.offsets.top - this.size / 2) + 'px';
                // Add animation effect
                ripple.classList.add('ripple-animate');
            };
        /**
         * @param {?} element
         * @return {?}
         */
        RippleDirective.prototype.getPosition = /**
         * @param {?} element
         * @return {?}
         */
            function (element) {
                /** @type {?} */
                var de = document.documentElement;
                /** @type {?} */
                var box = element.getBoundingClientRect();
                /** @type {?} */
                var top = box.top + window.pageYOffset - de.clientTop;
                /** @type {?} */
                var left = box.left + window.pageXOffset - de.clientLeft;
                return { top: top, left: left };
            };
        RippleDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[ftRipple]'
                    },] }
        ];
        /** @nocollapse */
        RippleDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef }
            ];
        };
        RippleDirective.propDecorators = {
            showRipple: [{ type: i0.HostListener, args: ['mousedown', ['$event'],] }, { type: i0.HostListener, args: ['touchstart', ['$event'],] }]
        };
        return RippleDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                            RippleDirective,
                            ProgressComponent
                        ],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [
                            IconComponent,
                            ImageComponent,
                            RippleDirective,
                            ProgressComponent
                        ]
                    },] }
        ];
        return CommonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.IconComponent = IconComponent;
    exports.ImageComponent = ImageComponent;
    exports.ProgressComponent = ProgressComponent;
    exports.MessageService = MessageService;
    exports.RippleDirective = RippleDirective;
    exports.CommonModule = CommonModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=factor-common.umd.js.map