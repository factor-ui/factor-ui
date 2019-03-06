import { Component, Input, Inject, HostBinding, ElementRef, Injectable, NgModule, Directive, HostListener, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IconComponent {
    /**
     * @param {?} configuration
     */
    constructor(configuration) {
        this.configuration = configuration;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
    }
}
IconComponent.decorators = [
    { type: Component, args: [{
                selector: 'ft-icon',
                template: " <svg><use attr.xlink:href=\"{{ this.path }}/{{ this.collection }}.svg#{{ name }}\" attr.href=\"{{ this.path }}/{{ this.collection }}.svg#{{ name }}\" /></svg>\n",
                styles: [":host{line-height:0;display:inline-block}:host[size=\"1\"]{font-size:1rem}:host[size=\"2\"]{font-size:1.5rem}:host[size=\"3\"]{font-size:2rem}:host[size=\"4\"]{font-size:3rem}:host[size=\"5\"]{font-size:4.5rem}:host[size=\"6\"]{font-size:8rem}:host[size=\"7\"]{font-size:16rem}:host[size=\"8\"]{font-size:32rem}svg{width:1em;height:1em;vertical-align:middle;fill:currentColor}"]
            }] }
];
/** @nocollapse */
IconComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['FactorCommonConfiguration',] }] }
];
IconComponent.propDecorators = {
    name: [{ type: Input }],
    collection: [{ type: Input }],
    path: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ImageComponent {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.element = element;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if ("IntersectionObserver" in window) {
            /** @type {?} */
            let elementObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        /** @type {?} */
                        let image = new Image();
                        image.src = this.src;
                        this.loading = true;
                        image.onerror = () => {
                            this.error = true;
                            this.loading = false;
                        };
                        image.onload = () => {
                            if ("decode" in image) {
                                image.decode().then(() => {
                                    this.loading = false;
                                    this.shown = true;
                                });
                            }
                            else {
                                console.error('Image.decode not available.');
                            }
                        };
                        elementObserver.unobserve(this.element.nativeElement);
                    }
                });
            }, {
                rootMargin: "0px 0px 200px 0px"
            });
            elementObserver.observe(this.element.nativeElement);
        }
        else {
            console.error('IntersectionObserver not available.');
            this.shown = true;
        }
    }
}
ImageComponent.decorators = [
    { type: Component, args: [{
                selector: 'ft-image',
                template: "<img *ngIf=\"shown\" [src]=\"src\" />\n",
                styles: [":host{display:inline-block;overflow:hidden;display:flex;align-items:center;justify-content:center}:host.loading{background-color:rgba(0,0,0,.03)}:host.loading::after{content:'';display:block;background-image:linear-gradient(to right,transparent,rgba(255,255,255,.3),transparent);height:100%;width:50%;-webkit-animation:.8s linear infinite placeholder-loading;animation:.8s linear infinite placeholder-loading}:host.error{background-color:rgba(255,0,0,.03)}img{max-width:100%;-webkit-animation:.3s fade-in;animation:.3s fade-in}@-webkit-keyframes fade-in{from{opacity:0}to{opacity:1}}@keyframes fade-in{from{opacity:0}to{opacity:1}}@-webkit-keyframes placeholder-loading{from{-webkit-transform:translate3d(-200%,0,0);transform:translate3d(-200%,0,0)}to{-webkit-transform:translate3d(200%,0,0);transform:translate3d(200%,0,0)}}@keyframes placeholder-loading{from{-webkit-transform:translate3d(-200%,0,0);transform:translate3d(-200%,0,0)}to{-webkit-transform:translate3d(200%,0,0);transform:translate3d(200%,0,0)}}"]
            }] }
];
/** @nocollapse */
ImageComponent.ctorParameters = () => [
    { type: ElementRef }
];
ImageComponent.propDecorators = {
    error: [{ type: HostBinding, args: ['class.error',] }],
    loading: [{ type: HostBinding, args: ['class.loading',] }],
    src: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProgressComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ProgressComponent.decorators = [
    { type: Component, args: [{
                selector: 'ft-progress',
                template: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"120\" height=\"120\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\">\n  <circle class=\"track\" cx=\"50\" cy=\"50\" r=\"40\" />\n  <circle class=\"bar\" cx=\"50\" cy=\"50\" r=\"40\">\n    <animate attributeName=\"stroke-dashoffset\" dur=\"2s\" repeatCount=\"indefinite\" from=\"0\" to=\"502\" />\n    <animate attributeName=\"stroke-dasharray\" dur=\"2s\" repeatCount=\"indefinite\" values=\"150.6 100.4;1 250;150.6 100.4\" />\n  </circle>\n</svg>\n",
                styles: [":host{line-height:0;display:inline-block}:host[size=\"1\"]{font-size:1rem}:host[size=\"2\"]{font-size:1.5rem}:host[size=\"3\"]{font-size:2rem}:host[size=\"4\"]{font-size:3rem}:host[size=\"5\"]{font-size:4.5rem}:host[size=\"6\"]{font-size:8rem}:host[size=\"7\"]{font-size:16rem}:host[size=\"8\"]{font-size:32rem}svg{width:1em;height:1em;vertical-align:middle}svg .track{fill:none;stroke-opacity:.08;stroke-width:10;stroke:#000}svg .bar{fill:none;stroke-opacity:.9;stroke-width:6;stroke:#007bff}"]
            }] }
];
/** @nocollapse */
ProgressComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MessageService {
    constructor() { }
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    show(content, options) {
        if (this.element) ;
        this.element = document.createElement('div');
        switch (options.type) {
            case 'toast':
                this.element.classList.add('toast', 'fade');
                this.element.style = 'position: fixed; bottom: 2rem; left: 2rem; right: 2rem; margin: auto;';
                this.element.innerHTML = `
            <div class="toast-body">${content}</div>
          `;
                document.body.appendChild(this.element);
                $(this.element).toast('show');
                break;
            default:
                this.element.classList.add('modal', 'fade');
                this.element.innerHTML = `
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-body">${content}</div>
                <div class="modal-footer" style="padding-top: 0; border: 0;">
                  <button type="button" class="btn btn-primary" data-dismiss="modal">Accept</button>
                </div>
              </div>
            </div>
          `;
                document.body.appendChild(this.element);
                $(this.element).modal();
                break;
        }
    }
}
MessageService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MessageService.ctorParameters = () => [];
/** @nocollapse */ MessageService.ngInjectableDef = defineInjectable({ factory: function MessageService_Factory() { return new MessageService(); }, token: MessageService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RippleDirective {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    showRipple(event) {
        /** @type {?} */
        let element = this.elementRef.nativeElement;
        /** @type {?} */
        let ripple = element.querySelector('.ripple');
        /** @type {?} */
        const eventType = event.type;
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
                let originalEvent;
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
    }
    /**
     * @param {?} element
     * @return {?}
     */
    getPosition(element) {
        /** @type {?} */
        const de = document.documentElement;
        /** @type {?} */
        const box = element.getBoundingClientRect();
        /** @type {?} */
        const top = box.top + window.pageYOffset - de.clientTop;
        /** @type {?} */
        const left = box.left + window.pageXOffset - de.clientLeft;
        return { top: top, left: left };
    }
}
RippleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ftRipple]'
            },] }
];
/** @nocollapse */
RippleDirective.ctorParameters = () => [
    { type: ElementRef }
];
RippleDirective.propDecorators = {
    showRipple: [{ type: HostListener, args: ['mousedown', ['$event'],] }, { type: HostListener, args: ['touchstart', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CommonModule$1 {
    /**
     * @param {?} configuration
     * @return {?}
     */
    static forRoot(configuration) {
        return {
            ngModule: CommonModule$1,
            providers: [
                { provide: 'FactorCommonConfiguration', useValue: configuration }
            ]
        };
    }
}
CommonModule$1.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    IconComponent,
                    ImageComponent,
                    RippleDirective,
                    ProgressComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    IconComponent,
                    ImageComponent,
                    RippleDirective,
                    ProgressComponent
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

export { IconComponent, ImageComponent, ProgressComponent, MessageService, RippleDirective, CommonModule$1 as CommonModule };

//# sourceMappingURL=factor-common.js.map