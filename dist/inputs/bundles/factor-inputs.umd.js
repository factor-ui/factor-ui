(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('factor-common'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('factor-inputs', ['exports', '@angular/core', '@angular/common', 'factor-common', '@angular/forms'], factory) :
    (global = global || self, factory(global['factor-inputs'] = {}, global.ng.core, global.ng.common, global['factor-common'], global.ng.forms));
}(this, (function (exports, core, common, factorCommon, forms) { 'use strict';

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

    var FilePickerComponent = /** @class */ (function () {
        function FilePickerComponent(elementRef) {
            this.elementRef = elementRef;
            this.propagateChange = function (_) { };
            this.createInput();
        }
        FilePickerComponent_1 = FilePickerComponent;
        Object.defineProperty(FilePickerComponent.prototype, "accept", {
            set: function (value) {
                this.fileInput.accept = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FilePickerComponent.prototype, "disabled", {
            set: function (value) {
                this.fileInput.disabled = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FilePickerComponent.prototype, "multiple", {
            set: function (value) {
                this.fileInput.multiple = value;
            },
            enumerable: true,
            configurable: true
        });
        FilePickerComponent.prototype.ngOnInit = function () {
        };
        FilePickerComponent.prototype.createInput = function () {
            var _this = this;
            var componentElement = this.elementRef.nativeElement;
            this.fileInput = document.createElement('input');
            this.fileInput.style.display = 'none';
            this.fileInput.type = 'file';
            this.fileInput.addEventListener('change', function (event) {
                var reader = new FileReader();
                _this.loadValue(event.target.files);
            });
            componentElement.appendChild(this.fileInput);
        };
        FilePickerComponent.prototype.loadValue = function (files) {
            var _this = this;
            if (files && files.length > 0) {
                var data_1 = [];
                var _loop_1 = function (i) {
                    var file = files.item(i);
                    var reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = function () {
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
                    };
                };
                for (var i = 0; i < files.length; i++) {
                    _loop_1(i);
                }
            }
        };
        FilePickerComponent.prototype.openDialog = function () {
            this.fileInput.click();
        };
        Object.defineProperty(FilePickerComponent.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (value) {
                this._value = value;
                this.propagateChange(this._value);
            },
            enumerable: true,
            configurable: true
        });
        FilePickerComponent.prototype.registerOnChange = function (fn) {
            this.propagateChange = fn;
        };
        FilePickerComponent.prototype.registerOnTouched = function (fn) {
            //this.propagateChange = fn;
        };
        FilePickerComponent.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
        };
        FilePickerComponent.prototype.updateValue = function (event) {
            this.value = event.target.value;
        };
        FilePickerComponent.prototype.writeValue = function (value) {
            this.value = value;
        };
        var FilePickerComponent_1;
        FilePickerComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], FilePickerComponent.prototype, "accept", null);
        __decorate([
            core.Input()
        ], FilePickerComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], FilePickerComponent.prototype, "multiple", null);
        __decorate([
            core.HostBinding('class.dragover')
        ], FilePickerComponent.prototype, "dragover", void 0);
        __decorate([
            core.HostListener('click')
        ], FilePickerComponent.prototype, "openDialog", null);
        __decorate([
            core.Input()
        ], FilePickerComponent.prototype, "value", null);
        FilePickerComponent = FilePickerComponent_1 = __decorate([
            core.Component({
                selector: 'ft-file-picker',
                template: "<ng-content></ng-content>\n",
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return FilePickerComponent_1; }),
                        multi: true
                    }
                ],
                styles: [":host{display:inline-block}"]
            })
        ], FilePickerComponent);
        return FilePickerComponent;
    }());

    var RatingComponent = /** @class */ (function () {
        function RatingComponent() {
            this.propagateChange = function (_) { };
            this.stars = [
                { value: 1 },
                { value: 2 },
                { value: 3 },
                { value: 4 },
                { value: 5 }
            ];
        }
        RatingComponent_1 = RatingComponent;
        RatingComponent.prototype.ngOnInit = function () {
        };
        Object.defineProperty(RatingComponent.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (value) {
                this._value = value;
                this.propagateChange(this._value);
            },
            enumerable: true,
            configurable: true
        });
        RatingComponent.prototype.registerOnChange = function (fn) {
            this.propagateChange = fn;
        };
        RatingComponent.prototype.registerOnTouched = function (fn) {
            //this.propagateChange = fn;
        };
        RatingComponent.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
        };
        RatingComponent.prototype.setRate = function (value, isHover) {
            if (isHover) {
                this.hover = value;
            }
            else {
                this.value = value;
            }
        };
        RatingComponent.prototype.updateValue = function (event) {
            this.value = event.target.value;
        };
        RatingComponent.prototype.writeValue = function (value) {
            this.value = value;
        };
        var RatingComponent_1;
        __decorate([
            core.Input()
        ], RatingComponent.prototype, "readOnly", void 0);
        __decorate([
            core.Input()
        ], RatingComponent.prototype, "value", null);
        RatingComponent = RatingComponent_1 = __decorate([
            core.Component({
                selector: 'ft-rating',
                template: "<ng-container *ngFor=\"let star of stars\">\n  <ng-container *ngTemplateOutlet=\"!readOnly? buttonTemplate : starTemplate; context:{star:star}\"></ng-container>\n</ng-container>\n<ng-template #buttonTemplate let-star=\"star\">\n  <button type=\"button\" *ngIf=\"!readOnly; else starTemplate\" [disabled]=\"disabled\" (mouseover)=\"setRate(star.value, true)\" (focus)=\"setRate(star.value, true)\" (blur)=\"setRate(0, true)\" (mouseout)=\"setRate(0, true)\" (click)=\"setRate(star.value)\">\n    <ng-container *ngTemplateOutlet=\"starTemplate; context:{star:star}\"></ng-container>\n  </button>\n</ng-template>\n<ng-template #starTemplate let-star=\"star\">\n  <svg [ngClass]=\"{hover: hover >= star.value, active: value >= star.value}\" viewBox=\"0 0 24 24\">\n    <path d=\"M17.93 21.315c-.534.408-5.22-3.186-5.881-3.181-.663 0-5.307 3.656-5.846 3.254-.537-.403 1.29-6.165 1.081-6.822-.209-.656-4.972-4.138-4.772-4.796.201-.658 6.015-.627 6.55-1.036.533-.41 2.233-6.215 2.895-6.219.663 0 2.43 5.779 2.968 6.182.539.403 6.352.297 6.56.953.21.656-4.513 4.197-4.714 4.856-.2.658 1.692 6.398 1.159 6.808z\" />\n  </svg>\n</ng-template>\n",
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return RatingComponent_1; }),
                        multi: true
                    }
                ],
                styles: [":host{line-height:0;display:inline-flex}:host:hover button{color:var(--primary)}:host:hover button svg:not(.hover){color:var(--gray)}:host[size=\"1\"]{font-size:1rem}:host[size=\"2\"]{font-size:1.5rem}:host[size=\"3\"]{font-size:2rem}:host[size=\"4\"]{font-size:3rem}:host[size=\"5\"]{font-size:4.5rem}:host[size=\"6\"]{font-size:8rem}:host[size=\"7\"]{font-size:16rem}:host[size=\"8\"]{font-size:32rem}svg{width:1em;height:1em;display:block}svg path{fill:none;stroke-width:1;stroke:currentColor}svg.active path,svg.hover path{fill:currentColor}button{border:0;background:0 0;padding:0}button:active,button:focus{outline:0}"]
            })
        ], RatingComponent);
        return RatingComponent;
    }());

    var InputsModule = /** @class */ (function () {
        function InputsModule() {
        }
        InputsModule = __decorate([
            core.NgModule({
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
            })
        ], InputsModule);
        return InputsModule;
    }());

    exports.FilePickerComponent = FilePickerComponent;
    exports.InputsModule = InputsModule;
    exports.RatingComponent = RatingComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=factor-inputs.umd.js.map
