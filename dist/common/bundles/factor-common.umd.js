(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
   typeof define === 'function' && define.amd ? define('factor-common', ['exports', '@angular/core', '@angular/common'], factory) :
   (factory((global['factor-common'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,i0,common) { 'use strict';

   /**
    * @fileoverview added by tsickle
    * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
    */
   var ColorService = /** @class */ (function () {
       function ColorService() {
           /** @type {?} */
           var options = {};
           /** @type {?} */
           var LS = [options.lightness, options.saturation].map(( /**
            * @param {?} param
            * @return {?}
            */function (param) {
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
           this.hueRanges = options.hue.map(( /**
            * @param {?} range
            * @return {?}
            */function (range) {
               return {
                   min: typeof range.min === 'undefined' ? 0 : range.min,
                   max: typeof range.max === 'undefined' ? 360 : range.max
               };
           }));
       }
       /**
        * BKDR Hash (modified version)
        *
        * @param str string to hash
        */
       /**
        * BKDR Hash (modified version)
        *
        * @param {?} str string to hash
        * @return {?}
        */
       ColorService.prototype.hash = /**
        * BKDR Hash (modified version)
        *
        * @param {?} str string to hash
        * @return {?}
        */
           function (str) {
               /** @type {?} */
               var seed = 131;
               /** @type {?} */
               var seed2 = 137;
               /** @type {?} */
               var hash = 0;
               // make hash more sensitive for short string like 'a', 'b', 'c'
               str += 'x';
               // Note: Number.MAX_SAFE_INTEGER equals 9007199254740991
               /** @type {?} */
               var maxSafeInteger = Math.round(9007199254740991 / seed2);
               for (var i = 0; i < str.length; i++) {
                   if (hash > maxSafeInteger) {
                       hash = Math.round(hash / seed2);
                   }
                   hash = hash * seed + str.charCodeAt(i);
               }
               return hash;
           };
       /**
      * Convert RGB Array to HEX
      *
      * @param RGBArray - [R, G, B]
      * @returns 6 digits hex starting with #
      */
       /**
        * Convert RGB Array to HEX
        *
        * @param {?} RGBArray - [R, G, B]
        * @return {?} 6 digits hex starting with #
        */
       ColorService.prototype.rgb2hex = /**
        * Convert RGB Array to HEX
        *
        * @param {?} RGBArray - [R, G, B]
        * @return {?} 6 digits hex starting with #
        */
           function (RGBArray) {
               /** @type {?} */
               var hex = '#';
               RGBArray.forEach(( /**
                * @param {?} value
                * @return {?}
                */function (value) {
                   if (value < 16) {
                       hex += 0;
                   }
                   hex += value.toString(16);
               }));
               return hex;
           };
       /**
        * Convert HSL to RGB
        *
        * @see {@link http://zh.wikipedia.org/wiki/HSL和HSV色彩空间} for further information.
        * @param H Hue ∈ [0, 360)
        * @param S Saturation ∈ [0, 1]
        * @param L Lightness ∈ [0, 1]
        * @returns R, G, B ∈ [0, 255]
        */
       /**
        * Convert HSL to RGB
        *
        * @see {\@link http://zh.wikipedia.org/wiki/HSL和HSV色彩空间} for further information.
        * @param {?} H Hue ∈ [0, 360)
        * @param {?} S Saturation ∈ [0, 1]
        * @param {?} L Lightness ∈ [0, 1]
        * @return {?} R, G, B ∈ [0, 255]
        */
       ColorService.prototype.hsl2rgb = /**
        * Convert HSL to RGB
        *
        * @see {\@link http://zh.wikipedia.org/wiki/HSL和HSV色彩空间} for further information.
        * @param {?} H Hue ∈ [0, 360)
        * @param {?} S Saturation ∈ [0, 1]
        * @param {?} L Lightness ∈ [0, 1]
        * @return {?} R, G, B ∈ [0, 255]
        */
           function (H, S, L) {
               H /= 360;
               /** @type {?} */
               var q = L < 0.5 ? L * (1 + S) : L + S - L * S;
               /** @type {?} */
               var p = 2 * L - q;
               return [H + 1 / 3, H, H - 1 / 3].map(( /**
                * @param {?} color
                * @return {?}
                */function (color) {
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
           };
       /**
        * Returns the hash in [h, s, l].
        * Note that H ∈ [0, 360); S ∈ [0, 1]; L ∈ [0, 1];
        *
        * @param str string to hash
        * @returns [h, s, l]
        */
       /**
        * Returns the hash in [h, s, l].
        * Note that H ∈ [0, 360); S ∈ [0, 1]; L ∈ [0, 1];
        *
        * @param {?} str string to hash
        * @return {?} [h, s, l]
        */
       ColorService.prototype.hsl = /**
        * Returns the hash in [h, s, l].
        * Note that H ∈ [0, 360); S ∈ [0, 1]; L ∈ [0, 1];
        *
        * @param {?} str string to hash
        * @return {?} [h, s, l]
        */
           function (str) {
               /** @type {?} */
               var H;
               /** @type {?} */
               var S;
               /** @type {?} */
               var L;
               /** @type {?} */
               var hash = this.hash(str);
               if (this.hueRanges.length) {
                   /** @type {?} */
                   var range = this.hueRanges[hash % this.hueRanges.length];
                   /** @type {?} */
                   var hueResolution = 727;
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
           };
       /**
        * Returns the hash in [r, g, b].
        * Note that R, G, B ∈ [0, 255]
        *
        * @param str string to hash
        * @returns [r, g, b]
        */
       /**
        * Returns the hash in [r, g, b].
        * Note that R, G, B ∈ [0, 255]
        *
        * @param {?} str string to hash
        * @return {?} [r, g, b]
        */
       ColorService.prototype.rgb = /**
        * Returns the hash in [r, g, b].
        * Note that R, G, B ∈ [0, 255]
        *
        * @param {?} str string to hash
        * @return {?} [r, g, b]
        */
           function (str) {
               /** @type {?} */
               var hsl = this.hsl(str);
               return this.hsl2rgb(hsl[0], hsl[1], hsl[2]);
           };
       /**
        * Returns the hash in hex
        *
        * @param str string to hash
        * @returns hex with #
        */
       /**
        * Returns the hash in hex
        *
        * @param {?} str string to hash
        * @return {?} hex with #
        */
       ColorService.prototype.hex = /**
        * Returns the hash in hex
        *
        * @param {?} str string to hash
        * @return {?} hex with #
        */
           function (str) {
               /** @type {?} */
               var rgb = this.rgb(str);
               return this.rgb2hex(rgb);
           };
       ColorService.decorators = [
           { type: i0.Injectable, args: [{
                       providedIn: 'root'
                   },] }
       ];
       /** @nocollapse */
       ColorService.ctorParameters = function () { return []; };
       /** @nocollapse */ ColorService.ngInjectableDef = i0.defineInjectable({ factory: function ColorService_Factory() { return new ColorService(); }, token: ColorService, providedIn: "root" });
       return ColorService;
   }());

   /**
    * @fileoverview added by tsickle
    * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
    */
   var AvatarComponent = /** @class */ (function () {
       function AvatarComponent(colorService) {
           this.colorService = colorService;
       }
       Object.defineProperty(AvatarComponent.prototype, "src", {
           set: /**
            * @param {?} value
            * @return {?}
            */ function (value) {
               var _this = this;
               if (value && value.trim() != '') {
                   this._src = value;
                   /** @type {?} */
                   var image_1 = new Image();
                   image_1.src = value;
                   image_1.onload = ( /**
                    * @return {?}
                    */function () {
                       if ("decode" in image_1) {
                           image_1.decode().then(( /**
                            * @return {?}
                            */function () {
                               _this.loaded = true;
                           }));
                       }
                       else {
                           console.error('Image.decode not available.');
                       }
                   });
               }
           },
           enumerable: true,
           configurable: true
       });
       Object.defineProperty(AvatarComponent.prototype, "label", {
           set: /**
            * @param {?} value
            * @return {?}
            */ function (value) {
               this._label = value;
               this.initials = this.getInitials(value);
           },
           enumerable: true,
           configurable: true
       });
       Object.defineProperty(AvatarComponent.prototype, "backgroundColor", {
           get: /**
            * @return {?}
            */ function () {
               return this.colorService.hex(this._label);
           },
           enumerable: true,
           configurable: true
       });
       Object.defineProperty(AvatarComponent.prototype, "backgroundImage", {
           get: /**
            * @return {?}
            */ function () {
               return this._src ? "url(" + this._src + ")" : '';
           },
           enumerable: true,
           configurable: true
       });
       /**
        * @return {?}
        */
       AvatarComponent.prototype.ngOnInit = /**
        * @return {?}
        */
           function () {
           };
       /**
        * @param {?} value
        * @return {?}
        */
       AvatarComponent.prototype.getInitials = /**
        * @param {?} value
        * @return {?}
        */
           function (value) {
               /** @type {?} */
               var allInitials = value.match(/\b\w/g) || [];
               /** @type {?} */
               var initials = ((allInitials.shift() || '') + (allInitials.pop() || '')).toUpperCase();
               return initials;
           };
       AvatarComponent.decorators = [
           { type: i0.Component, args: [{
                       selector: 'ft-avatar',
                       template: "<div *ngIf=\"!loaded\">{{ initials }}</div>\n",
                       styles: [":host{--default-size:var(--size, 3rem);display:flex;align-items:center;justify-content:center;color:#fff;background-size:cover;background-repeat:no-repeat;border-radius:100vh;padding:.25rem;font-size:calc(var(--default-size) - (var(--default-size) * .5));min-width:var(--default-size);min-height:var(--default-size)}div{font-size:1em;line-height:1em}"]
                   }] }
       ];
       /** @nocollapse */
       AvatarComponent.ctorParameters = function () {
           return [
               { type: ColorService }
           ];
       };
       AvatarComponent.propDecorators = {
           src: [{ type: i0.Input }],
           label: [{ type: i0.Input }],
           backgroundColor: [{ type: i0.HostBinding, args: ['style.background-color',] }],
           backgroundImage: [{ type: i0.HostBinding, args: ['style.background-image',] }]
       };
       return AvatarComponent;
   }());

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
           path: [{ type: i0.Input }],
           size: [{ type: i0.Input }]
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
   var ProgressComponent = /** @class */ (function () {
       function ProgressComponent() {
           this.mode = 'indeterminate';
       }
       /**
        * @return {?}
        */
       ProgressComponent.prototype.ngOnInit = /**
        * @return {?}
        */
           function () {
               this.color = 'var(--primary)';
               this.value = 0;
           };
       ProgressComponent.decorators = [
           { type: i0.Component, args: [{
                       selector: 'ft-progress',
                       template: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\">\n  <circle class=\"track\" cx=\"50\" cy=\"50\" r=\"40\" />\n  <circle class=\"bar\" [ngClass]=\"mode\" cx=\"50\" cy=\"50\" r=\"40\" [ngStyle]=\"{'stroke': color, 'stroke-dashoffset': mode=='determinate'? 'calc((3.14159265 * 40 * 2 * (100 - '+value+')) / 100)' : null}\"></circle>\n</svg>\n",
                       styles: [":host{line-height:0;display:inline-block}:host[size=\"1\"]{font-size:1rem}:host[size=\"2\"]{font-size:1.5rem}:host[size=\"3\"]{font-size:2rem}:host[size=\"4\"]{font-size:3rem}:host[size=\"5\"]{font-size:4.5rem}:host[size=\"6\"]{font-size:8rem}:host[size=\"7\"]{font-size:16rem}:host[size=\"8\"]{font-size:32rem}svg{width:1em;height:1em;vertical-align:middle}svg .track{fill:none;stroke-opacity:.08;stroke-width:10;stroke:#000}svg .bar{fill:none;stroke-opacity:.9;stroke-width:6}svg .bar.indeterminate{-webkit-animation:2s linear infinite progress-rotation;animation:2s linear infinite progress-rotation}svg .bar.determinate{stroke-dasharray:calc(2 * 3.1415926536 * 40)}@-webkit-keyframes progress-rotation{0%{stroke-dashoffset:0;stroke-dasharray:150.6 100.4}50%{stroke-dasharray:1 250}100%{stroke-dashoffset:502;stroke-dasharray:150.6 100.4}}@keyframes progress-rotation{0%{stroke-dashoffset:0;stroke-dasharray:150.6 100.4}50%{stroke-dasharray:1 250}100%{stroke-dashoffset:502;stroke-dasharray:150.6 100.4}}"]
                   }] }
       ];
       /** @nocollapse */
       ProgressComponent.ctorParameters = function () { return []; };
       ProgressComponent.propDecorators = {
           color: [{ type: i0.Input }],
           mode: [{ type: i0.Input }],
           size: [{ type: i0.Input }],
           value: [{ type: i0.Input }]
       };
       return ProgressComponent;
   }());

   /**
    * @fileoverview added by tsickle
    * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
    */
   var CommonModule = /** @class */ (function () {
       function CommonModule() {
       }
       /**
        * @param {?=} configuration
        * @return {?}
        */
       CommonModule.forRoot = /**
        * @param {?=} configuration
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
                           AvatarComponent,
                           IconComponent,
                           ImageComponent,
                           ObserveIntersectingDirective,
                           ProgressComponent
                       ],
                       imports: [
                           common.CommonModule
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

   exports.AvatarComponent = AvatarComponent;
   exports.IconComponent = IconComponent;
   exports.ImageComponent = ImageComponent;
   exports.ObserveIntersectingDirective = ObserveIntersectingDirective;
   exports.ProgressComponent = ProgressComponent;
   exports.ColorService = ColorService;
   exports.CommonModule = CommonModule;

   Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=factor-common.umd.js.map