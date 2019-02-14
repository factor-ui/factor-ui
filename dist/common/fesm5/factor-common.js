import { Component, Input, Inject, HostBinding, ElementRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            this.path = 'assets/';
        }
    };
    IconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ft-icon',
                    template: " <svg><use attr.xlink:href=\"{{ this.path }}{{ this.collection }}.svg#{{ name }}\" attr.href=\"{{ this.path }}{{ this.collection }}.svg#{{ name }}\" /></svg>\n",
                    styles: [":host{line-height:0;display:inline-block}:host[size=\"1\"]{font-size:1rem}:host[size=\"2\"]{font-size:1.5rem}:host[size=\"3\"]{font-size:2rem}:host[size=\"4\"]{font-size:3rem}:host[size=\"5\"]{font-size:4.5rem}:host[size=\"6\"]{font-size:8rem}:host[size=\"7\"]{font-size:16rem}:host[size=\"8\"]{font-size:32rem}svg{width:1em;height:1em;vertical-align:middle;fill:currentColor}"]
                }] }
    ];
    /** @nocollapse */
    IconComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['FactorCommonConfiguration',] }] }
    ]; };
    IconComponent.propDecorators = {
        name: [{ type: Input }],
        collection: [{ type: Input }],
        path: [{ type: Input }]
    };
    return IconComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            var elementObserver_1 = new IntersectionObserver(function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        /** @type {?} */
                        var image_1 = new Image();
                        image_1.src = _this.src;
                        _this.loading = true;
                        image_1.onerror = function () {
                            _this.error = true;
                            _this.loading = false;
                        };
                        image_1.onload = function () {
                            if ("decode" in image_1) {
                                image_1.decode().then(function () {
                                    _this.loading = false;
                                    _this.shown = true;
                                });
                            }
                            else {
                                console.error('Image.decode not available.');
                            }
                        };
                        elementObserver_1.unobserve(_this.element.nativeElement);
                    }
                });
            }, {
                rootMargin: "0px 0px 0px 0px"
            });
            elementObserver_1.observe(this.element.nativeElement);
        }
        else {
            console.error('IntersectionObserver not available.');
            this.shown = true;
        }
    };
    ImageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ft-image',
                    template: "<img *ngIf=\"shown\" [src]=\"src\" />\n",
                    styles: [":host{display:inline-block;overflow:hidden;display:flex;align-items:center;justify-content:center}:host.loading{background-color:rgba(0,0,0,.03)}:host.loading::after{content:'';display:block;background-image:linear-gradient(to right,transparent,rgba(255,255,255,.3),transparent);height:100%;width:50%;-webkit-animation:.8s linear infinite placeholder-loading;animation:.8s linear infinite placeholder-loading}:host.error{background-color:rgba(255,0,0,.03)}img{max-width:100%;-webkit-animation:.3s fade-in;animation:.3s fade-in}@-webkit-keyframes fade-in{from{opacity:0}to{opacity:1}}@keyframes fade-in{from{opacity:0}to{opacity:1}}@-webkit-keyframes placeholder-loading{from{-webkit-transform:translate3d(-200%,0,0);transform:translate3d(-200%,0,0)}to{-webkit-transform:translate3d(200%,0,0);transform:translate3d(200%,0,0)}}@keyframes placeholder-loading{from{-webkit-transform:translate3d(-200%,0,0);transform:translate3d(-200%,0,0)}to{-webkit-transform:translate3d(200%,0,0);transform:translate3d(200%,0,0)}}"]
                }] }
    ];
    /** @nocollapse */
    ImageComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    ImageComponent.propDecorators = {
        error: [{ type: HostBinding, args: ['class.error',] }],
        loading: [{ type: HostBinding, args: ['class.loading',] }],
        src: [{ type: Input }]
    };
    return ImageComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CommonModule$1 = /** @class */ (function () {
    function CommonModule$$1() {
    }
    /**
     * @param {?} configuration
     * @return {?}
     */
    CommonModule$$1.forRoot = /**
     * @param {?} configuration
     * @return {?}
     */
    function (configuration) {
        return {
            ngModule: CommonModule$$1,
            providers: [
                { provide: 'FactorCommonConfiguration', useValue: configuration }
            ]
        };
    };
    CommonModule$$1.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        IconComponent,
                        ImageComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        IconComponent,
                        ImageComponent
                    ]
                },] }
    ];
    return CommonModule$$1;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { IconComponent, ImageComponent, CommonModule$1 as CommonModule };

//# sourceMappingURL=factor-common.js.map