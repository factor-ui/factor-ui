import { __decorate, __param } from 'tslib';
import { ɵɵdefineInjectable, Injectable, ɵɵinject, Injector, Inject, PLATFORM_ID, NgModule } from '@angular/core';
import { LocationStrategy, PathLocationStrategy, isPlatformBrowser } from '@angular/common';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { NavigationEnd, Router } from '@angular/router';
import { AES, enc } from 'crypto-js';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

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
    ColorService.ɵprov = ɵɵdefineInjectable({ factory: function ColorService_Factory() { return new ColorService(); }, token: ColorService, providedIn: "root" });
    ColorService = __decorate([
        Injectable({
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
    FilesService.ɵprov = ɵɵdefineInjectable({ factory: function FilesService_Factory() { return new FilesService(); }, token: FilesService, providedIn: "root" });
    FilesService = __decorate([
        Injectable({
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
                    if (event instanceof NavigationEnd && _this.trackingId) {
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
        { type: Router }
    ]; };
    GoogleAnalyticsService.ɵprov = ɵɵdefineInjectable({ factory: function GoogleAnalyticsService_Factory() { return new GoogleAnalyticsService(ɵɵinject(Router)); }, token: GoogleAnalyticsService, providedIn: "root" });
    GoogleAnalyticsService = __decorate([
        Injectable({
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
        if (error instanceof HttpErrorResponse) {
            if (navigator.onLine) {
                var message = error.error ? JSON.stringify(error.error) : error.message;
                googleAnalyticsService.trackEvent(error.url, 'Http Error', error.status + " - " + message);
            }
        }
        else {
            var location_1 = this.injector.get(LocationStrategy);
            var message = error.message ? error.message : error.toString();
            var stack = error.stack ? error.stack : error.toString();
            var url = location_1 instanceof PathLocationStrategy ? location_1.path() : '';
            googleAnalyticsService.trackEvent(message, 'Javascript Error', stack);
        }
        throw error;
    };
    GoogleAnalyticsErrorHandler.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    GoogleAnalyticsErrorHandler = __decorate([
        Injectable()
    ], GoogleAnalyticsErrorHandler);
    return GoogleAnalyticsErrorHandler;
}());

var GoogleTagManagerErrorHandler = /** @class */ (function () {
    function GoogleTagManagerErrorHandler(injector) {
        this.injector = injector;
    }
    GoogleTagManagerErrorHandler.prototype.handleError = function (error) {
        if (error instanceof HttpErrorResponse) {
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
        { type: Injector }
    ]; };
    GoogleTagManagerErrorHandler = __decorate([
        Injectable()
    ], GoogleTagManagerErrorHandler);
    return GoogleTagManagerErrorHandler;
}());

var GoogleTagManagerService = /** @class */ (function () {
    function GoogleTagManagerService(platformId) {
        this.platformId = platformId;
    }
    GoogleTagManagerService.prototype.appendTrackingCode = function (trackingId) {
        try {
            if (isPlatformBrowser(this.platformId) && trackingId) {
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
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    GoogleTagManagerService.ɵprov = ɵɵdefineInjectable({ factory: function GoogleTagManagerService_Factory() { return new GoogleTagManagerService(ɵɵinject(PLATFORM_ID)); }, token: GoogleTagManagerService, providedIn: "root" });
    GoogleTagManagerService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __param(0, Inject(PLATFORM_ID))
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
            var decryptedValue = AES.decrypt(value, this.configuration.storage.encryptionSecret);
            value = decryptedValue.toString(enc.Utf8);
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
            value = AES.encrypt(value, this.configuration.storage.encryptionSecret);
            return value.toString();
        }
        else {
            return value;
        }
    };
    StorageService.prototype.delete = function (key, storage) {
        if (isPlatformBrowser(this.platformId)) {
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
        if (isPlatformBrowser(this.platformId)) {
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
        if (isPlatformBrowser(this.platformId)) {
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
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: undefined, decorators: [{ type: Inject, args: ['FactorUtilsConfiguration',] }] }
    ]; };
    StorageService.ɵprov = ɵɵdefineInjectable({ factory: function StorageService_Factory() { return new StorageService(ɵɵinject(PLATFORM_ID), ɵɵinject("FactorUtilsConfiguration")); }, token: StorageService, providedIn: "root" });
    StorageService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __param(0, Inject(PLATFORM_ID)),
        __param(1, Inject('FactorUtilsConfiguration'))
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
    CacheService.ɵprov = ɵɵdefineInjectable({ factory: function CacheService_Factory() { return new CacheService(); }, token: CacheService, providedIn: "root" });
    CacheService = __decorate([
        Injectable({
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
            return of(response);
        }
        return next.handle(req).pipe(tap(function (event) {
            if (event instanceof HttpResponse) {
                _this.cacheService.put(req, event);
            }
        }));
    };
    CacheInterceptor.prototype.isRequestCachable = function (req) {
        return (req.method === 'GET') && (this.configuration.cache.urls.find(function (url) { return req.url.indexOf(url) > -1; }));
    };
    CacheInterceptor.ctorParameters = function () { return [
        { type: CacheService },
        { type: undefined, decorators: [{ type: Inject, args: ['FactorUtilsConfiguration',] }] }
    ]; };
    CacheInterceptor = __decorate([
        Injectable(),
        __param(1, Inject('FactorUtilsConfiguration'))
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
        NgModule({
            declarations: [],
            imports: [],
            exports: []
        })
    ], UtilsModule);
    return UtilsModule;
}());

/*
 * Public API Surface of utils
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CacheInterceptor, CacheService, ColorService, FilesService, GoogleAnalyticsErrorHandler, GoogleAnalyticsService, GoogleTagManagerErrorHandler, GoogleTagManagerService, StorageService, UtilsModule };
//# sourceMappingURL=factor-utils.js.map
