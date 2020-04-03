import { __decorate } from 'tslib';
import { ElementRef, Input, HostBinding, HostListener, Component, forwardRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonModule as CommonModule$1 } from 'factor-common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

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
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], FilePickerComponent.prototype, "accept", null);
    __decorate([
        Input()
    ], FilePickerComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], FilePickerComponent.prototype, "multiple", null);
    __decorate([
        HostBinding('class.dragover')
    ], FilePickerComponent.prototype, "dragover", void 0);
    __decorate([
        HostListener('click')
    ], FilePickerComponent.prototype, "openDialog", null);
    __decorate([
        Input()
    ], FilePickerComponent.prototype, "value", null);
    FilePickerComponent = FilePickerComponent_1 = __decorate([
        Component({
            selector: 'ft-file-picker',
            template: "<ng-content></ng-content>\n",
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return FilePickerComponent_1; }),
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
        Input()
    ], RatingComponent.prototype, "readOnly", void 0);
    __decorate([
        Input()
    ], RatingComponent.prototype, "value", null);
    RatingComponent = RatingComponent_1 = __decorate([
        Component({
            selector: 'ft-rating',
            template: "<ng-container *ngFor=\"let star of stars\">\n  <ng-container *ngTemplateOutlet=\"!readOnly? buttonTemplate : starTemplate; context:{star:star}\"></ng-container>\n</ng-container>\n<ng-template #buttonTemplate let-star=\"star\">\n  <button type=\"button\" *ngIf=\"!readOnly; else starTemplate\" [disabled]=\"disabled\" (mouseover)=\"setRate(star.value, true)\" (focus)=\"setRate(star.value, true)\" (blur)=\"setRate(0, true)\" (mouseout)=\"setRate(0, true)\" (click)=\"setRate(star.value)\">\n    <ng-container *ngTemplateOutlet=\"starTemplate; context:{star:star}\"></ng-container>\n  </button>\n</ng-template>\n<ng-template #starTemplate let-star=\"star\">\n  <svg [ngClass]=\"{hover: hover >= star.value, active: value >= star.value}\" viewBox=\"0 0 24 24\">\n    <path d=\"M17.93 21.315c-.534.408-5.22-3.186-5.881-3.181-.663 0-5.307 3.656-5.846 3.254-.537-.403 1.29-6.165 1.081-6.822-.209-.656-4.972-4.138-4.772-4.796.201-.658 6.015-.627 6.55-1.036.533-.41 2.233-6.215 2.895-6.219.663 0 2.43 5.779 2.968 6.182.539.403 6.352.297 6.56.953.21.656-4.513 4.197-4.714 4.856-.2.658 1.692 6.398 1.159 6.808z\" />\n  </svg>\n</ng-template>\n",
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return RatingComponent_1; }),
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
        NgModule({
            declarations: [
                FilePickerComponent,
                RatingComponent
            ],
            imports: [
                CommonModule,
                CommonModule$1
            ],
            exports: [
                FilePickerComponent,
                RatingComponent
            ]
        })
    ], InputsModule);
    return InputsModule;
}());

/*
 * Public API Surface of inputs
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FilePickerComponent, InputsModule, RatingComponent };
//# sourceMappingURL=factor-inputs.js.map
