(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/common/http'), require('@angular/router'), require('crypto-js'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('factor-utils', ['exports', '@angular/core', '@angular/common', '@angular/common/http', '@angular/router', 'crypto-js', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory(global['factor-utils'] = {}, global.ng.core, global.ng.common, global.ng.common.http, global.ng.router, global.cryptoJs, global.rxjs, global.rxjs.operators));
}(this, (function (exports, core, common, http, router, cryptoJs, rxjs, operators) { 'use strict';

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

    var ColorService = /** @class */ (function () {
        function ColorService() {
            var options = {};
            var LS = [options.lightness, options.saturation].map(function (param) {
                param = param || [0.35, 0.5, 0.65]; // note that 3 is a prime
                return Array.isArray(param) ? param.concat() : [param];
            });
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
            this.hueRanges = options.hue.map(function (range) {
                return {
                    min: typeof range.min === 'undefined' ? 0 : range.min,
                    max: typeof range.max === 'undefined' ? 360 : range.max
                };
            });
        }
        /**
         * BKDR Hash (modified version)
         *
         * @param str string to hash
         */
        ColorService.prototype.hash = function (str) {
            var seed = 131;
            var seed2 = 137;
            var hash = 0;
            // make hash more sensitive for short string like 'a', 'b', 'c'
            str += 'x';
            // Note: Number.MAX_SAFE_INTEGER equals 9007199254740991
            var maxSafeInteger = Math.round(9007199254740991 / seed2);
            for (var i = 0; i < str.length; i++) {
                if (hash > maxSafeInteger) {
                    hash = Math.round(hash / seed2);
                }
                hash = hash * seed + str.charCodeAt(i);
            }
            return hash;
        };
        ;
        /**
       * Convert RGB Array to HEX
       *
       * @param RGBArray - [R, G, B]
       * @returns 6 digits hex starting with #
       */
        ColorService.prototype.rgb2hex = function (RGBArray) {
            var hex = '#';
            RGBArray.forEach(function (value) {
                if (value < 16) {
                    hex += 0;
                }
                hex += value.toString(16);
            });
            return hex;
        };
        ;
        /**
         * Convert HSL to RGB
         *
         * @see {@link http://zh.wikipedia.org/wiki/HSL和HSV色彩空间} for further information.
         * @param H Hue ∈ [0, 360)
         * @param S Saturation ∈ [0, 1]
         * @param L Lightness ∈ [0, 1]
         * @returns R, G, B ∈ [0, 255]
         */
        ColorService.prototype.hsl2rgb = function (H, S, L) {
            H /= 360;
            var q = L < 0.5 ? L * (1 + S) : L + S - L * S;
            var p = 2 * L - q;
            return [H + 1 / 3, H, H - 1 / 3].map(function (color) {
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
            });
        };
        ;
        /**
         * Returns the hash in [h, s, l].
         * Note that H ∈ [0, 360); S ∈ [0, 1]; L ∈ [0, 1];
         *
         * @param str string to hash
         * @returns [h, s, l]
         */
        ColorService.prototype.hsl = function (str) {
            var H;
            var S;
            var L;
            var hash = this.hash(str);
            if (this.hueRanges.length) {
                var range = this.hueRanges[hash % this.hueRanges.length];
                var hueResolution = 727; // note that 727 is a prime
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
        ;
        /**
         * Returns the hash in [r, g, b].
         * Note that R, G, B ∈ [0, 255]
         *
         * @param str string to hash
         * @returns [r, g, b]
         */
        ColorService.prototype.rgb = function (str) {
            var hsl = this.hsl(str);
            return this.hsl2rgb(hsl[0], hsl[1], hsl[2]);
        };
        ;
        /**
         * Returns the hash in hex
         *
         * @param str string to hash
         * @returns hex with #
         */
        ColorService.prototype.hex = function (str) {
            var rgb = this.rgb(str);
            return this.rgb2hex(rgb);
        };
        ;
        ColorService.ɵprov = core["ɵɵdefineInjectable"]({ factory: function ColorService_Factory() { return new ColorService(); }, token: ColorService, providedIn: "root" });
        ColorService = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], ColorService);
        return ColorService;
    }());

    var FilesService = /** @class */ (function () {
        //private valueChangesSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(null);
        //private valueChanges: Observable<any[]> = this.valueChangesSubject.asObservable();
        function FilesService() {
            var _this = this;
            this.fileInput = document.createElement('input');
            //this.fileInput.style.display = 'none';
            this.fileInput.type = 'file';
            this.fileInput.addEventListener('change', function (event) {
                var reader = new FileReader();
                _this.loadValue(event.target.files);
            });
        }
        FilesService.prototype.loadValue = function (files) {
            var _this = this;
            if (files && files.length > 0) {
                var data_1 = [];
                var _loop_1 = function (i) {
                    var file = files.item(i);
                    var reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = function () {
                        data_1.push(Object.assign(file, {
                            data: reader.result
                        }));
                        if (data_1.length == files.length) {
                            //this.valueChangesSubject.next(data.length > 0 ? data : null);
                            _this.callback(data_1.length > 0 ? data_1 : null);
                            _this.fileInput.value = null;
                        }
                    };
                };
                for (var i = 0; i < files.length; i++) {
                    _loop_1(i);
                }
            }
        };
        FilesService.prototype.open = function (callback, options) {
            this.fileInput.accept = options && options.accept ? options.accept : '';
            this.fileInput.multiple = options && options.multiple;
            this.fileInput.click();
            this.callback = callback;
        };
        FilesService.ɵprov = core["ɵɵdefineInjectable"]({ factory: function FilesService_Factory() { return new FilesService(); }, token: FilesService, providedIn: "root" });
        FilesService = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], FilesService);
        return FilesService;
    }());

    var GoogleAnalyticsService = /** @class */ (function () {
        function GoogleAnalyticsService(router) {
            this.router = router;
        }
        GoogleAnalyticsService.prototype.appendTrackingCode = function (trackingId) {
            try {
                if (trackingId) {
                    this.trackingId = trackingId;
                    var s1 = document.createElement('script');
                    s1.async = true;
                    s1.src = "https://www.googletagmanager.com/gtag/js?id=" + trackingId;
                    document.head.appendChild(s1);
                    var s2 = document.createElement('script');
                    s2.innerHTML = "\n         window.dataLayer = window.dataLayer || [];\n         function gtag(){dataLayer.push(arguments);}\n         gtag('js', new Date());\n         gtag('config', '" + trackingId + "');\n       ";
                    document.head.appendChild(s2);
                    this.initSubscribers();
                }
            }
            catch (ex) {
                console.error('Error appending google analytics');
                console.error(ex);
            }
        };
        GoogleAnalyticsService.prototype.initSubscribers = function () {
            var _this = this;
            this.router.events.subscribe(function (event) {
                try {
                    if (typeof gtag === 'function') {
                        if (event instanceof router.NavigationEnd && _this.trackingId) {
                            setTimeout(function () {
                                gtag('config', _this.trackingId, {
                                    'page_title': document.title,
                                    'page_path': event.urlAfterRedirects
                                });
                            }, 100);
                        }
                    }
                }
                catch (e) {
                    console.error(e);
                }
            });
        };
        GoogleAnalyticsService.prototype.trackEvent = function (action, category, label, value) {
            if (category === void 0) { category = null; }
            if (label === void 0) { label = null; }
            if (value === void 0) { value = null; }
            if (typeof gtag === 'function') {
                gtag('event', action, {
                    event_category: category,
                    event_label: label,
                    value: value
                });
            }
        };
        GoogleAnalyticsService.prototype.trackException = function (description, fatal) {
            if (typeof gtag === 'function') {
                gtag('event', 'exception', {
                    description: description,
                    fatal: fatal
                });
            }
        };
        GoogleAnalyticsService.prototype.setUserId = function (userId) {
            if (typeof gtag === 'function') {
                gtag('set', { 'user_id': userId });
            }
        };
        GoogleAnalyticsService.ctorParameters = function () { return [
            { type: router.Router }
        ]; };
        GoogleAnalyticsService.ɵprov = core["ɵɵdefineInjectable"]({ factory: function GoogleAnalyticsService_Factory() { return new GoogleAnalyticsService(core["ɵɵinject"](router.Router)); }, token: GoogleAnalyticsService, providedIn: "root" });
        GoogleAnalyticsService = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], GoogleAnalyticsService);
        return GoogleAnalyticsService;
    }());

    var GoogleAnalyticsErrorHandler = /** @class */ (function () {
        function GoogleAnalyticsErrorHandler(injector) {
            this.injector = injector;
        }
        GoogleAnalyticsErrorHandler.prototype.handleError = function (error) {
            var googleAnalyticsService = this.injector.get(GoogleAnalyticsService);
            if (error instanceof http.HttpErrorResponse) {
                if (navigator.onLine) {
                    var message = error.error ? JSON.stringify(error.error) : error.message;
                    googleAnalyticsService.trackEvent(error.url, 'Http Error', error.status + " - " + message);
                }
            }
            else {
                var location_1 = this.injector.get(common.LocationStrategy);
                var message = error.message ? error.message : error.toString();
                var stack = error.stack ? error.stack : error.toString();
                var url = location_1 instanceof common.PathLocationStrategy ? location_1.path() : '';
                googleAnalyticsService.trackEvent(message, 'Javascript Error', stack);
            }
            throw error;
        };
        GoogleAnalyticsErrorHandler.ctorParameters = function () { return [
            { type: core.Injector }
        ]; };
        GoogleAnalyticsErrorHandler = __decorate([
            core.Injectable()
        ], GoogleAnalyticsErrorHandler);
        return GoogleAnalyticsErrorHandler;
    }());

    var GoogleTagManagerErrorHandler = /** @class */ (function () {
        function GoogleTagManagerErrorHandler(injector) {
            this.injector = injector;
        }
        GoogleTagManagerErrorHandler.prototype.handleError = function (error) {
            if (error instanceof http.HttpErrorResponse) {
                if (navigator.onLine) {
                    var message = error.error ? JSON.stringify(error.error) : error.message;
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({
                        event: 'http_error',
                        'gtm.errorMessage': message,
                        'gtm.errorUrl': error.url,
                        'error_status': error.status
                    });
                }
            }
            throw error;
        };
        GoogleTagManagerErrorHandler.ctorParameters = function () { return [
            { type: core.Injector }
        ]; };
        GoogleTagManagerErrorHandler = __decorate([
            core.Injectable()
        ], GoogleTagManagerErrorHandler);
        return GoogleTagManagerErrorHandler;
    }());

    var GoogleTagManagerService = /** @class */ (function () {
        function GoogleTagManagerService(platformId) {
            this.platformId = platformId;
        }
        GoogleTagManagerService.prototype.appendTrackingCode = function (trackingId) {
            try {
                if (common.isPlatformBrowser(this.platformId) && trackingId) {
                    this.trackingId = trackingId;
                    var s1 = document.createElement('script');
                    s1.innerHTML = "\n          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n          })(window,document,'script','dataLayer','" + trackingId + "');\n        ";
                    document.head.appendChild(s1);
                    var s2 = document.createElement('noscript');
                    var s3 = document.createElement('iframe');
                    s3.width = '0';
                    s3.height = '0';
                    s3.style.display = 'none';
                    s3.style.visibility = 'hidden';
                    s3.src = "https://www.googletagmanager.com/ns.html?id=" + trackingId;
                    s2.appendChild(s3);
                    document.body.prepend(s2);
                }
            }
            catch (ex) {
                console.error('Error appending google tag manager');
                console.error(ex);
            }
        };
        GoogleTagManagerService.prototype.addVariable = function (variable) {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push(variable);
        };
        GoogleTagManagerService.ctorParameters = function () { return [
            { type: Object, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] }
        ]; };
        GoogleTagManagerService.ɵprov = core["ɵɵdefineInjectable"]({ factory: function GoogleTagManagerService_Factory() { return new GoogleTagManagerService(core["ɵɵinject"](core.PLATFORM_ID)); }, token: GoogleTagManagerService, providedIn: "root" });
        GoogleTagManagerService = __decorate([
            core.Injectable({
                providedIn: 'root'
            }),
            __param(0, core.Inject(core.PLATFORM_ID))
        ], GoogleTagManagerService);
        return GoogleTagManagerService;
    }());

    // Only works on client storage
    var StorageService = /** @class */ (function () {
        function StorageService(platformId, configuration) {
            this.platformId = platformId;
            this.configuration = configuration;
        }
        StorageService.prototype.getValue = function (key, storage) {
            var value;
            if (!storage || typeof storage == 'string') {
                switch (storage) {
                    case 'local':
                    case 'localStorage':
                        value = localStorage[key];
                        break;
                    case 'memory':
                        value = this.memoryStorage[key];
                        break;
                    default:
                        value = sessionStorage[key];
                        break;
                }
            }
            else if (typeof storage == 'object') {
                value = storage[key];
            }
            return this.decrypt(value);
        };
        StorageService.prototype.decrypt = function (value) {
            if (value !== null &&
                value !== undefined &&
                value !== '' &&
                this.configuration &&
                this.configuration.storage &&
                this.configuration.storage.encryptionSecret) {
                var decryptedValue = cryptoJs.AES.decrypt(value, this.configuration.storage.encryptionSecret);
                value = decryptedValue.toString(cryptoJs.enc.Utf8);
            }
            return value;
        };
        StorageService.prototype.encrypt = function (value) {
            if (value !== null &&
                value !== undefined &&
                value !== '' &&
                this.configuration &&
                this.configuration.storage &&
                this.configuration.storage.encryptionSecret) {
                value = cryptoJs.AES.encrypt(value, this.configuration.storage.encryptionSecret);
                return value.toString();
            }
            else {
                return value;
            }
        };
        StorageService.prototype.delete = function (key, storage) {
            if (common.isPlatformBrowser(this.platformId)) {
                if (!storage || typeof storage == 'string') {
                    switch (storage) {
                        case 'local':
                        case 'localStorage':
                            delete localStorage[key];
                            break;
                        case 'memory':
                            delete this.memoryStorage[key];
                            break;
                        default:
                            delete sessionStorage[key];
                            break;
                    }
                }
                else if (typeof storage == 'object') {
                    delete storage[key];
                }
            }
        };
        StorageService.prototype.get = function (key, storage) {
            var parsedValue;
            if (common.isPlatformBrowser(this.platformId)) {
                try {
                    parsedValue = JSON.parse(this.getValue(key, storage));
                }
                catch (err) {
                    parsedValue = this.getValue(key, storage);
                }
            }
            return parsedValue;
        };
        StorageService.prototype.set = function (key, value, storage) {
            if (common.isPlatformBrowser(this.platformId)) {
                var valueEncrypted = this.encrypt(JSON.stringify(value));
                if (!storage || typeof storage == 'string') {
                    switch (storage) {
                        case 'local':
                        case 'localStorage':
                            localStorage[key] = valueEncrypted;
                            break;
                        case 'memory':
                            this.memoryStorage[key] = valueEncrypted;
                            break;
                        default:
                            sessionStorage[key] = valueEncrypted;
                            break;
                    }
                }
                else {
                    storage[key] = valueEncrypted;
                }
            }
        };
        StorageService.ctorParameters = function () { return [
            { type: Object, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: ['FactorUtilsConfiguration',] }] }
        ]; };
        StorageService.ɵprov = core["ɵɵdefineInjectable"]({ factory: function StorageService_Factory() { return new StorageService(core["ɵɵinject"](core.PLATFORM_ID), core["ɵɵinject"]("FactorUtilsConfiguration")); }, token: StorageService, providedIn: "root" });
        StorageService = __decorate([
            core.Injectable({
                providedIn: 'root'
            }),
            __param(0, core.Inject(core.PLATFORM_ID)),
            __param(1, core.Inject('FactorUtilsConfiguration'))
        ], StorageService);
        return StorageService;
    }());

    var MAX_CACHE_AGE = 60 * 60 * 1000; // in milliseconds

    var CacheService = /** @class */ (function () {
        function CacheService() {
            this.cacheMap = new Map();
        }
        CacheService.prototype.get = function (req) {
            var entry = this.cacheMap.get(req.urlWithParams);
            if (!entry) {
                return null;
            }
            var isExpired = (Date.now() - entry.entryTime) > MAX_CACHE_AGE;
            return isExpired ? null : entry.response;
        };
        CacheService.prototype.put = function (req, res) {
            var entry = { url: req.urlWithParams, response: res, entryTime: Date.now() };
            this.cacheMap.set(req.urlWithParams, entry);
            this.deleteExpired();
        };
        CacheService.prototype.invalidate = function (url) {
            this.cacheMap.delete(url);
        };
        CacheService.prototype.deleteExpired = function () {
            var _this = this;
            this.cacheMap.forEach(function (entry) {
                if ((Date.now() - entry.entryTime) > MAX_CACHE_AGE) {
                    _this.cacheMap.delete(entry.url);
                }
            });
        };
        CacheService.ɵprov = core["ɵɵdefineInjectable"]({ factory: function CacheService_Factory() { return new CacheService(); }, token: CacheService, providedIn: "root" });
        CacheService = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], CacheService);
        return CacheService;
    }());

    //const CACHABLE_URL = "/api/booksSearch";
    var CacheInterceptor = /** @class */ (function () {
        function CacheInterceptor(cacheService, configuration) {
            this.cacheService = cacheService;
            this.configuration = configuration;
        }
        CacheInterceptor.prototype.intercept = function (req, next) {
            var _this = this;
            if (!this.isRequestCachable(req)) {
                return next.handle(req);
            }
            var response = this.cacheService.get(req);
            if (response !== null) {
                return rxjs.of(response);
            }
            return next.handle(req).pipe(operators.tap(function (event) {
                if (event instanceof http.HttpResponse) {
                    _this.cacheService.put(req, event);
                }
            }));
        };
        CacheInterceptor.prototype.isRequestCachable = function (req) {
            return (req.method === 'GET') && (this.configuration.cache.urls.find(function (url) { return req.url.indexOf(url) > -1; }));
        };
        CacheInterceptor.ctorParameters = function () { return [
            { type: CacheService },
            { type: undefined, decorators: [{ type: core.Inject, args: ['FactorUtilsConfiguration',] }] }
        ]; };
        CacheInterceptor = __decorate([
            core.Injectable(),
            __param(1, core.Inject('FactorUtilsConfiguration'))
        ], CacheInterceptor);
        return CacheInterceptor;
    }());

    var UtilsModule = /** @class */ (function () {
        function UtilsModule() {
        }
        UtilsModule_1 = UtilsModule;
        UtilsModule.forRoot = function (configuration) {
            return {
                ngModule: UtilsModule_1,
                providers: [
                    { provide: 'FactorUtilsConfiguration', useValue: configuration }
                ]
            };
        };
        var UtilsModule_1;
        UtilsModule = UtilsModule_1 = __decorate([
            core.NgModule({
                declarations: [],
                imports: [],
                exports: []
            })
        ], UtilsModule);
        return UtilsModule;
    }());

    exports.CacheInterceptor = CacheInterceptor;
    exports.CacheService = CacheService;
    exports.ColorService = ColorService;
    exports.FilesService = FilesService;
    exports.GoogleAnalyticsErrorHandler = GoogleAnalyticsErrorHandler;
    exports.GoogleAnalyticsService = GoogleAnalyticsService;
    exports.GoogleTagManagerErrorHandler = GoogleTagManagerErrorHandler;
    exports.GoogleTagManagerService = GoogleTagManagerService;
    exports.StorageService = StorageService;
    exports.UtilsModule = UtilsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=factor-utils.umd.js.map
