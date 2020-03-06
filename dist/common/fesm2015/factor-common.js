import { Injectable, Component, HostBinding, Input, Inject, NgModule, Directive, EventEmitter, Output, ElementRef, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ColorService {
    constructor() {
        /** @type {?} */
        const options = {};
        /** @type {?} */
        let LS = [options.lightness, options.saturation].map((/**
         * @param {?} param
         * @return {?}
         */
        function (param) {
            param = param || [0.35, 0.5, 0.65]; // note that 3 is a prime
            return Array.isArray(param) ? param.concat() : [param];
        }));
        this.L = LS[0];
        this.S = LS[1];
        if (typeof options.hue === 'number') {
            options.hue = { min: options.hue, max: options.hue };
        }
        if (typeof options.hue === 'object' && !Array.isArray(options.hue)) {
            options.hue = [options.hue];
        }
        if (typeof options.hue === 'undefined') {
            options.hue = [];
        }
        this.hueRanges = options.hue.map((/**
         * @param {?} range
         * @return {?}
         */
        function (range) {
            return {
                min: typeof range.min === 'undefined' ? 0 : range.min,
                max: typeof range.max === 'undefined' ? 360 : range.max
            };
        }));
    }
    /**
     * BKDR Hash (modified version)
     *
     * @param {?} str string to hash
     * @return {?}
     */
    hash(str) {
        /** @type {?} */
        let seed = 131;
        /** @type {?} */
        let seed2 = 137;
        /** @type {?} */
        let hash = 0;
        // make hash more sensitive for short string like 'a', 'b', 'c'
        str += 'x';
        // Note: Number.MAX_SAFE_INTEGER equals 9007199254740991
        /** @type {?} */
        const maxSafeInteger = Math.round(9007199254740991 / seed2);
        for (let i = 0; i < str.length; i++) {
            if (hash > maxSafeInteger) {
                hash = Math.round(hash / seed2);
            }
            hash = hash * seed + str.charCodeAt(i);
        }
        return hash;
    }
    ;
    /**
     * Convert RGB Array to HEX
     *
     * @param {?} RGBArray - [R, G, B]
     * @return {?} 6 digits hex starting with #
     */
    rgb2hex(RGBArray) {
        /** @type {?} */
        let hex = '#';
        RGBArray.forEach((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value < 16) {
                hex += 0;
            }
            hex += value.toString(16);
        }));
        return hex;
    }
    ;
    /**
     * Convert HSL to RGB
     *
     * @see {\@link http://zh.wikipedia.org/wiki/HSL和HSV色彩空间} for further information.
     * @param {?} H Hue ∈ [0, 360)
     * @param {?} S Saturation ∈ [0, 1]
     * @param {?} L Lightness ∈ [0, 1]
     * @return {?} R, G, B ∈ [0, 255]
     */
    hsl2rgb(H, S, L) {
        H /= 360;
        /** @type {?} */
        let q = L < 0.5 ? L * (1 + S) : L + S - L * S;
        /** @type {?} */
        let p = 2 * L - q;
        return [H + 1 / 3, H, H - 1 / 3].map((/**
         * @param {?} color
         * @return {?}
         */
        function (color) {
            if (color < 0) {
                color++;
            }
            if (color > 1) {
                color--;
            }
            if (color < 1 / 6) {
                color = p + (q - p) * 6 * color;
            }
            else if (color < 0.5) {
                color = q;
            }
            else if (color < 2 / 3) {
                color = p + (q - p) * 6 * (2 / 3 - color);
            }
            else {
                color = p;
            }
            return Math.round(color * 255);
        }));
    }
    ;
    /**
     * Returns the hash in [h, s, l].
     * Note that H ∈ [0, 360); S ∈ [0, 1]; L ∈ [0, 1];
     *
     * @param {?} str string to hash
     * @return {?} [h, s, l]
     */
    hsl(str) {
        /** @type {?} */
        let H;
        /** @type {?} */
        let S;
        /** @type {?} */
        let L;
        /** @type {?} */
        let hash = this.hash(str);
        if (this.hueRanges.length) {
            /** @type {?} */
            let range = this.hueRanges[hash % this.hueRanges.length];
            /** @type {?} */
            let hueResolution = 727;
            H = ((hash / this.hueRanges.length) % hueResolution) * (range.max - range.min) / hueResolution + range.min;
        }
        else {
            H = hash % 359; // note that 359 is a prime
        }
        hash = Math.round(hash / 360);
        S = this.S[hash % this.S.length];
        hash = Math.round(hash / this.S.length);
        L = this.L[hash % this.L.length];
        return [H, S, L];
    }
    ;
    /**
     * Returns the hash in [r, g, b].
     * Note that R, G, B ∈ [0, 255]
     *
     * @param {?} str string to hash
     * @return {?} [r, g, b]
     */
    rgb(str) {
        /** @type {?} */
        let hsl = this.hsl(str);
        return this.hsl2rgb(hsl[0], hsl[1], hsl[2]);
    }
    ;
    /**
     * Returns the hash in hex
     *
     * @param {?} str string to hash
     * @return {?} hex with #
     */
    hex(str) {
        /** @type {?} */
        let rgb = this.rgb(str);
        return this.rgb2hex(rgb);
    }
    ;
}
ColorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ColorService.ctorParameters = () => [];
/** @nocollapse */ ColorService.ngInjectableDef = defineInjectable({ factory: function ColorService_Factory() { return new ColorService(); }, token: ColorService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AvatarComponent {
    /**
     * @param {?} colorService
     */
    constructor(colorService) {
        this.colorService = colorService;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set src(value) {
        if (value && value.trim() != '') {
            this._src = value;
            /** @type {?} */
            let image = new Image();
            image.src = value;
            image.onload = (/**
             * @return {?}
             */
            () => {
                if ("decode" in image) {
                    image.decode().then((/**
                     * @return {?}
                     */
                    () => {
                        this.loaded = true;
                    }));
                }
                else {
                    console.error('Image.decode not available.');
                }
            });
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set label(value) {
        this._label = value;
        this.initials = this.getInitials(value);
    }
    /**
     * @return {?}
     */
    get backgroundColor() {
        return this.colorService.hex(this._label);
    }
    /**
     * @return {?}
     */
    get backgroundImage() {
        return `url(${this._src})`;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getInitials(value) {
        /** @type {?} */
        let allInitials = value.match(/\b\w/g) || [];
        /** @type {?} */
        let initials = ((allInitials.shift() || '') + (allInitials.pop() || '')).toUpperCase();
        return initials;
    }
}
AvatarComponent.decorators = [
    { type: Component, args: [{
                selector: 'ft-avatar',
                template: "<div *ngIf=\"!loaded\">{{ initials }}</div>\n",
                styles: [":host{--default-size:var(--size, 3rem);display:flex;align-items:center;justify-content:center;color:#fff;background-size:cover;background-repeat:no-repeat;border-radius:100vh;padding:.25rem;font-size:calc(var(--default-size) - (var(--default-size) * .5));min-width:var(--default-size);min-height:var(--default-size)}div{font-size:1em;line-height:1em}"]
            }] }
];
/** @nocollapse */
AvatarComponent.ctorParameters = () => [
    { type: ColorService }
];
AvatarComponent.propDecorators = {
    src: [{ type: Input }],
    label: [{ type: Input }],
    backgroundColor: [{ type: HostBinding, args: ['style.background-color',] }],
    backgroundImage: [{ type: HostBinding, args: ['style.background-image',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            let elementObserver = new IntersectionObserver((/**
             * @param {?} entries
             * @param {?} observer
             * @return {?}
             */
            (entries, observer) => {
                entries.forEach((/**
                 * @param {?} entry
                 * @return {?}
                 */
                (entry) => {
                    if (entry.isIntersecting) {
                        /** @type {?} */
                        let image = new Image();
                        image.src = this.src;
                        setTimeout((/**
                         * @return {?}
                         */
                        () => {
                            this.loading = true;
                        }), 100);
                        image.onerror = (/**
                         * @return {?}
                         */
                        () => {
                            this.error = true;
                            this.loading = false;
                        });
                        image.onload = (/**
                         * @return {?}
                         */
                        () => {
                            if ("decode" in image) {
                                image.decode().then((/**
                                 * @return {?}
                                 */
                                () => {
                                    this.loading = false;
                                    this.shown = true;
                                }));
                            }
                            else {
                                console.error('Image.decode not available.');
                            }
                        });
                        elementObserver.unobserve(this.element.nativeElement);
                    }
                }));
            }), {
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
                styles: [":host{display:inline-block;overflow:hidden;display:flex;align-items:center;justify-content:center}:host.loading{background-color:rgba(0,0,0,.03)}:host.loading::after{content:'';display:block;background-image:linear-gradient(to right,transparent,rgba(255,255,255,.3),transparent);height:100%;width:50%;-webkit-animation:.8s linear infinite placeholder-loading;animation:.8s linear infinite placeholder-loading}:host.error{background-color:rgba(255,0,0,.03)}img{max-width:100%;-webkit-animation:.3s fade-in;animation:.3s fade-in}@-webkit-keyframes fade-in{from{opacity:0}to{opacity:1}}@keyframes fade-in{from{opacity:0}to{opacity:1}}@-webkit-keyframes placeholder-loading{from{transform:translate3d(-200%,0,0)}to{transform:translate3d(200%,0,0)}}@keyframes placeholder-loading{from{transform:translate3d(-200%,0,0)}to{transform:translate3d(200%,0,0)}}"]
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
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ObserveIntersectingDirective {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.element = element;
        this.event = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if ("IntersectionObserver" in window) {
            /** @type {?} */
            const elementObserver = new IntersectionObserver((/**
             * @param {?} entries
             * @param {?} observer
             * @return {?}
             */
            (entries, observer) => {
                entries.forEach((/**
                 * @param {?} entry
                 * @return {?}
                 */
                (entry) => {
                    this.event.emit(entry.isIntersecting);
                }));
            }), this.options);
            elementObserver.observe(this.element.nativeElement);
        }
        else {
            console.error('ftObserveIntersecting not available in this browser.');
        }
    }
}
ObserveIntersectingDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ftObserveIntersecting]'
            },] }
];
/** @nocollapse */
ObserveIntersectingDirective.ctorParameters = () => [
    { type: ElementRef }
];
ObserveIntersectingDirective.propDecorators = {
    options: [{ type: Input, args: ['ftObserveIntersectingOptions',] }],
    event: [{ type: Output, args: ['ftObserveIntersecting',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProgressComponent {
    constructor() {
        this.mode = 'indeterminate';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.color = 'var(--primary)';
        this.value = 0;
    }
}
ProgressComponent.decorators = [
    { type: Component, args: [{
                selector: 'ft-progress',
                template: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\">\n  <circle class=\"track\" cx=\"50\" cy=\"50\" r=\"40\" />\n  <circle class=\"bar\" [ngClass]=\"mode\" cx=\"50\" cy=\"50\" r=\"40\" [ngStyle]=\"{'stroke': color, 'stroke-dashoffset': mode=='determinate'? 'calc((3.14159265 * 40 * 2 * (100 - '+value+')) / 100)' : null}\"></circle>\n</svg>\n",
                styles: [":host{line-height:0;display:inline-block}:host[size=\"1\"]{font-size:1rem}:host[size=\"2\"]{font-size:1.5rem}:host[size=\"3\"]{font-size:2rem}:host[size=\"4\"]{font-size:3rem}:host[size=\"5\"]{font-size:4.5rem}:host[size=\"6\"]{font-size:8rem}:host[size=\"7\"]{font-size:16rem}:host[size=\"8\"]{font-size:32rem}svg{width:1em;height:1em;vertical-align:middle}svg .track{fill:none;stroke-opacity:.08;stroke-width:10;stroke:#000}svg .bar{fill:none;stroke-opacity:.9;stroke-width:6}svg .bar.indeterminate{-webkit-animation:2s linear infinite progress-rotation;animation:2s linear infinite progress-rotation}svg .bar.determinate{stroke-dasharray:calc(2 * 3.1415926536 * 40)}@-webkit-keyframes progress-rotation{0%{stroke-dashoffset:0;stroke-dasharray:150.6 100.4}50%{stroke-dasharray:1 250}100%{stroke-dashoffset:502;stroke-dasharray:150.6 100.4}}@keyframes progress-rotation{0%{stroke-dashoffset:0;stroke-dasharray:150.6 100.4}50%{stroke-dasharray:1 250}100%{stroke-dashoffset:502;stroke-dasharray:150.6 100.4}}"]
            }] }
];
/** @nocollapse */
ProgressComponent.ctorParameters = () => [];
ProgressComponent.propDecorators = {
    color: [{ type: Input }],
    mode: [{ type: Input }],
    size: [{ type: Input }],
    value: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CommonModule$1 {
    /**
     * @param {?=} configuration
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
                    AvatarComponent,
                    IconComponent,
                    ImageComponent,
                    ObserveIntersectingDirective,
                    ProgressComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    AvatarComponent,
                    IconComponent,
                    ImageComponent,
                    ObserveIntersectingDirective,
                    ProgressComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AvatarComponent, IconComponent, ImageComponent, ObserveIntersectingDirective, ProgressComponent, ColorService, CommonModule$1 as CommonModule };

//# sourceMappingURL=factor-common.js.map