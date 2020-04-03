(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('factor-utils'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('factor-common', ['exports', '@angular/core', 'factor-utils', '@angular/common'], factory) :
    (global = global || self, factory(global['factor-common'] = {}, global.ng.core, global['factor-utils'], global.ng.common));
}(this, (function (exports, core, factorUtils, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var AvatarComponent = /** @class */ (function () {
        function AvatarComponent(colorService) {
            this.colorService = colorService;
        }
        Object.defineProperty(AvatarComponent.prototype, "src", {
            set: function (value) {
                var _this = this;
                if (value && value.trim() != '') {
                    this._src = value;
                    var image_1 = new Image();
                    image_1.src = value;
                    image_1.onload = function () {
                        if ("decode" in image_1) {
                            image_1.decode().then(function () {
                                _this.loaded = true;
                            });
                        }
                        else {
                            console.error('Image.decode not available.');
                        }
                    };
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AvatarComponent.prototype, "label", {
            set: function (value) {
                this._label = value;
                this.initials = this.getInitials(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AvatarComponent.prototype, "backgroundColor", {
            get: function () {
                return this.colorService.hex(this._label);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AvatarComponent.prototype, "backgroundImage", {
            get: function () {
                return this._src ? "url(" + this._src + ")" : '';
            },
            enumerable: true,
            configurable: true
        });
        AvatarComponent.prototype.ngOnInit = function () {
        };
        AvatarComponent.prototype.getInitials = function (value) {
            var allInitials = value.match(/\b\w/g) || [];
            var initials = ((allInitials.shift() || '') + (allInitials.pop() || '')).toUpperCase();
            return initials;
        };
        AvatarComponent.ctorParameters = function () { return [
            { type: factorUtils.ColorService }
        ]; };
        __decorate([
            core.Input()
        ], AvatarComponent.prototype, "src", null);
        __decorate([
            core.Input()
        ], AvatarComponent.prototype, "label", null);
        __decorate([
            core.HostBinding('style.background-color')
        ], AvatarComponent.prototype, "backgroundColor", null);
        __decorate([
            core.HostBinding('style.background-image')
        ], AvatarComponent.prototype, "backgroundImage", null);
        AvatarComponent = __decorate([
            core.Component({
                selector: 'ft-avatar',
                template: "<div *ngIf=\"!loaded\">{{ initials }}</div>\n",
                styles: [":host{--default-size:var(--size, 3rem);display:inline-flex;align-items:center;justify-content:center;color:#fff;background-size:cover;background-repeat:no-repeat;border-radius:100vh;padding:.25rem;font-size:calc(var(--default-size) - (var(--default-size) * .5));min-width:var(--default-size);min-height:var(--default-size)}div{font-size:1em;line-height:1em}"]
            })
        ], AvatarComponent);
        return AvatarComponent;
    }());

    var IconComponent = /** @class */ (function () {
        function IconComponent(configuration) {
            this.configuration = configuration;
        }
        IconComponent.prototype.ngOnInit = function () {
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
        IconComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: ['FactorCommonConfiguration',] }] }
        ]; };
        __decorate([
            core.Input()
        ], IconComponent.prototype, "name", void 0);
        __decorate([
            core.Input()
        ], IconComponent.prototype, "collection", void 0);
        __decorate([
            core.Input()
        ], IconComponent.prototype, "path", void 0);
        __decorate([
            core.Input()
        ], IconComponent.prototype, "size", void 0);
        IconComponent = __decorate([
            core.Component({
                selector: 'ft-icon',
                template: " <svg><use attr.xlink:href=\"{{ this.path }}/{{ this.collection }}.svg#{{ name }}\" attr.href=\"{{ this.path }}/{{ this.collection }}.svg#{{ name }}\" /></svg>\n",
                styles: [":host{line-height:0;display:inline-block}:host[size=\"1\"]{font-size:1rem}:host[size=\"2\"]{font-size:1.5rem}:host[size=\"3\"]{font-size:2rem}:host[size=\"4\"]{font-size:3rem}:host[size=\"5\"]{font-size:4.5rem}:host[size=\"6\"]{font-size:8rem}:host[size=\"7\"]{font-size:16rem}:host[size=\"8\"]{font-size:32rem}svg{width:1em;height:1em;vertical-align:middle;fill:currentColor}"]
            }),
            __param(0, core.Inject('FactorCommonConfiguration'))
        ], IconComponent);
        return IconComponent;
    }());

    var ImageComponent = /** @class */ (function () {
        function ImageComponent(element) {
            this.element = element;
        }
        ImageComponent.prototype.ngOnInit = function () {
            var _this = this;
            if ("IntersectionObserver" in window) {
                var elementObserver_1 = new IntersectionObserver(function (entries, observer) {
                    entries.forEach(function (entry) {
                        if (entry.isIntersecting) {
                            var image_1 = new Image();
                            image_1.src = _this.src;
                            setTimeout(function () {
                                _this.loading = true;
                            }, 100);
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
                    rootMargin: "0px 0px 200px 0px"
                });
                elementObserver_1.observe(this.element.nativeElement);
            }
            else {
                console.error('IntersectionObserver not available.');
                this.loading = false;
                this.shown = true;
            }
        };
        ImageComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.HostBinding('class.ft-image--error')
        ], ImageComponent.prototype, "error", void 0);
        __decorate([
            core.HostBinding('class.ft-image--loading')
        ], ImageComponent.prototype, "loading", void 0);
        __decorate([
            core.Input()
        ], ImageComponent.prototype, "src", void 0);
        ImageComponent = __decorate([
            core.Component({
                selector: 'ft-image',
                template: "<img *ngIf=\"shown\" [src]=\"src\" />\n<ft-icon name=\"warning\" size=\"2\" *ngIf=\"error\"></ft-icon>\n",
                styles: [":host{display:inline-block;overflow:hidden;display:flex;align-items:center;justify-content:center}:host.ft-image--loading{background-color:rgba(0,0,0,.03);position:relative;overflow:hidden}:host.ft-image--loading::after{content:\"\";display:block;background-color:rgba(0,0,0,.02);position:absolute;top:0;bottom:0;width:100%;height:100%;transform:translateX(0);-webkit-animation:1.5s ease-in-out infinite placeholder-loading;animation:1.5s ease-in-out infinite placeholder-loading}:host.ft-image--error{background-color:rgba(255,0,0,.03)}:host.ft-image--error ft-icon{color:var(--danger)}img{position:relative;z-index:1;max-width:100%;max-height:100%;-webkit-animation:.3s fade-in;animation:.3s fade-in}@-webkit-keyframes fade-in{from{opacity:0}to{opacity:1}}@keyframes fade-in{from{opacity:0}to{opacity:1}}@-webkit-keyframes placeholder-loading{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}@keyframes placeholder-loading{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}"]
            })
        ], ImageComponent);
        return ImageComponent;
    }());

    var ProgressComponent = /** @class */ (function () {
        function ProgressComponent() {
            this.mode = 'indeterminate';
        }
        ProgressComponent.prototype.ngOnInit = function () {
            this.color = this.color || 'var(--primary)';
            this.value = 0;
        };
        __decorate([
            core.Input()
        ], ProgressComponent.prototype, "color", void 0);
        __decorate([
            core.Input()
        ], ProgressComponent.prototype, "mode", void 0);
        __decorate([
            core.Input()
        ], ProgressComponent.prototype, "size", void 0);
        __decorate([
            core.Input()
        ], ProgressComponent.prototype, "value", void 0);
        ProgressComponent = __decorate([
            core.Component({
                selector: 'ft-progress',
                template: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\">\n  <circle class=\"track\" cx=\"50\" cy=\"50\" r=\"40\" />\n  <circle class=\"bar\" [ngClass]=\"mode\" cx=\"50\" cy=\"50\" r=\"40\" [ngStyle]=\"{'stroke': color, 'stroke-dashoffset': mode=='determinate'? 'calc((3.14159265 * 40 * 2 * (100 - '+value+')) / 100)' : null}\"></circle>\n</svg>\n",
                styles: [":host{line-height:0;display:inline-block}:host[size=\"1\"]{font-size:1rem}:host[size=\"2\"]{font-size:1.5rem}:host[size=\"3\"]{font-size:2rem}:host[size=\"4\"]{font-size:3rem}:host[size=\"5\"]{font-size:4.5rem}:host[size=\"6\"]{font-size:8rem}:host[size=\"7\"]{font-size:16rem}:host[size=\"8\"]{font-size:32rem}svg{width:1em;height:1em;vertical-align:middle}svg .track{fill:none;stroke-opacity:.08;stroke-width:10;stroke:#000}svg .bar{fill:none;stroke-opacity:.9;stroke-width:6}svg .bar.indeterminate{-webkit-animation:2s linear infinite progress-rotation;animation:2s linear infinite progress-rotation}svg .bar.determinate{stroke-dasharray:calc(2 * 3.1415926536 * 40)}@-webkit-keyframes progress-rotation{0%{stroke-dashoffset:0;stroke-dasharray:150.6 100.4}50%{stroke-dasharray:1 250}100%{stroke-dashoffset:502;stroke-dasharray:150.6 100.4}}@keyframes progress-rotation{0%{stroke-dashoffset:0;stroke-dasharray:150.6 100.4}50%{stroke-dasharray:1 250}100%{stroke-dashoffset:502;stroke-dasharray:150.6 100.4}}"]
            })
        ], ProgressComponent);
        return ProgressComponent;
    }());

    var ObserveIntersectingDirective = /** @class */ (function () {
        function ObserveIntersectingDirective(element) {
            this.element = element;
            this.event = new core.EventEmitter();
        }
        ObserveIntersectingDirective.prototype.ngOnInit = function () {
            var _this = this;
            if ("IntersectionObserver" in window) {
                var elementObserver = new IntersectionObserver(function (entries, observer) {
                    entries.forEach(function (entry) {
                        _this.event.emit(entry.isIntersecting);
                    });
                }, this.options);
                elementObserver.observe(this.element.nativeElement);
            }
            else {
                console.error('ftObserveIntersecting not available in this browser.');
            }
        };
        ObserveIntersectingDirective.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input('ftObserveIntersectingOptions')
        ], ObserveIntersectingDirective.prototype, "options", void 0);
        __decorate([
            core.Output('ftObserveIntersecting')
        ], ObserveIntersectingDirective.prototype, "event", void 0);
        ObserveIntersectingDirective = __decorate([
            core.Directive({
                selector: '[ftObserveIntersecting]'
            })
        ], ObserveIntersectingDirective);
        return ObserveIntersectingDirective;
    }());

    var CommonModule = /** @class */ (function () {
        function CommonModule() {
        }
        CommonModule_1 = CommonModule;
        CommonModule.forRoot = function (configuration) {
            return {
                ngModule: CommonModule_1,
                providers: [
                    { provide: 'FactorCommonConfiguration', useValue: configuration }
                ]
            };
        };
        var CommonModule_1;
        CommonModule = CommonModule_1 = __decorate([
            core.NgModule({
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
            })
        ], CommonModule);
        return CommonModule;
    }());

    exports.AvatarComponent = AvatarComponent;
    exports.CommonModule = CommonModule;
    exports.IconComponent = IconComponent;
    exports.ImageComponent = ImageComponent;
    exports.ObserveIntersectingDirective = ObserveIntersectingDirective;
    exports.ProgressComponent = ProgressComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=factor-common.umd.js.map
