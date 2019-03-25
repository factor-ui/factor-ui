/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, forwardRef, HostBinding, HostListener, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var FilePickerComponent = /** @class */ (function () {
    function FilePickerComponent(elementRef) {
        this.elementRef = elementRef;
        this.propagateChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) { });
        this.createInput();
    }
    Object.defineProperty(FilePickerComponent.prototype, "accept", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.fileInput.accept = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilePickerComponent.prototype, "disabled", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.fileInput.disabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilePickerComponent.prototype, "multiple", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.fileInput.multiple = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FilePickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FilePickerComponent.prototype.createInput = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var componentElement = this.elementRef.nativeElement;
        this.fileInput = document.createElement('input');
        this.fileInput.style.display = 'none';
        this.fileInput.type = 'file';
        this.fileInput.addEventListener('change', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var reader = new FileReader();
            _this.loadValue(event.target.files);
        }));
        componentElement.appendChild(this.fileInput);
    };
    /**
     * @param {?} files
     * @return {?}
     */
    FilePickerComponent.prototype.loadValue = /**
     * @param {?} files
     * @return {?}
     */
    function (files) {
        var _this = this;
        if (files && files.length > 0) {
            /** @type {?} */
            var data_1 = [];
            var _loop_1 = function (i) {
                /** @type {?} */
                var file = files.item(i);
                /** @type {?} */
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = (/**
                 * @return {?}
                 */
                function () {
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
                });
            };
            for (var i = 0; i < files.length; i++) {
                _loop_1(i);
            }
        }
    };
    /**
     * @return {?}
     */
    FilePickerComponent.prototype.openDialog = /**
     * @return {?}
     */
    function () {
        this.fileInput.click();
    };
    Object.defineProperty(FilePickerComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._value = value;
            this.propagateChange(this._value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} fn
     * @return {?}
     */
    FilePickerComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.propagateChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    FilePickerComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        //this.propagateChange = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    FilePickerComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FilePickerComponent.prototype.updateValue = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.value = event.target.value;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FilePickerComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
    };
    FilePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ft-file-picker',
                    template: "<ng-content></ng-content>\n",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return FilePickerComponent; })),
                            multi: true
                        }
                    ],
                    styles: [":host{display:inline-block}"]
                }] }
    ];
    /** @nocollapse */
    FilePickerComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    FilePickerComponent.propDecorators = {
        accept: [{ type: Input }],
        disabled: [{ type: Input }],
        multiple: [{ type: Input }],
        dragover: [{ type: HostBinding, args: ['class.dragover',] }],
        openDialog: [{ type: HostListener, args: ['click',] }],
        value: [{ type: Input }]
    };
    return FilePickerComponent;
}());
export { FilePickerComponent };
if (false) {
    /** @type {?} */
    FilePickerComponent.prototype.dragover;
    /** @type {?} */
    FilePickerComponent.prototype.fileInput;
    /** @type {?} */
    FilePickerComponent.prototype._value;
    /** @type {?} */
    FilePickerComponent.prototype.propagateChange;
    /**
     * @type {?}
     * @private
     */
    FilePickerComponent.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmFjdG9yLWlucHV0cy8iLCJzb3VyY2VzIjpbImxpYi9maWxlLXBpY2tlci9maWxlLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBa0IsTUFBTSxlQUFlLENBQUM7QUFDcEgsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFO0lBK0JFLDZCQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRjFDLG9CQUFlOzs7O1FBQUcsVUFBQyxDQUFNLElBQU8sQ0FBQyxFQUFDO1FBR2hDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBcEJELHNCQUNJLHVDQUFNOzs7OztRQURWLFVBQ1ksS0FBYTtZQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7SUFDRCxzQkFDSSx5Q0FBUTs7Ozs7UUFEWixVQUNjLEtBQWM7WUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLENBQUM7OztPQUFBO0lBQ0Qsc0JBQ0kseUNBQVE7Ozs7O1FBRFosVUFDYyxLQUFjO1lBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTs7OztJQVdELHNDQUFROzs7SUFBUjtJQUVBLENBQUM7Ozs7SUFDRCx5Q0FBVzs7O0lBQVg7UUFBQSxpQkFVQzs7WUFUTyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWE7UUFDdEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FB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LFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsdUNBQTJDO29CQUUzQyxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEsbUJBQW1CLEVBQW5CLENBQW1CLEVBQUM7NEJBQ2xELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGOztpQkFDRjs7OztnQkFkbUIsVUFBVTs7O3lCQWdCM0IsS0FBSzsyQkFJTCxLQUFLOzJCQUlMLEtBQUs7MkJBSUwsV0FBVyxTQUFDLGdCQUFnQjs2QkE4QzVCLFlBQVksU0FBQyxPQUFPO3dCQU9wQixLQUFLOztJQW9CUiwwQkFBQztDQUFBLEFBbEdELElBa0dDO1NBdEZZLG1CQUFtQjs7O0lBYTlCLHVDQUNrQjs7SUFDbEIsd0NBQTRCOztJQUM1QixxQ0FBZTs7SUFDZiw4Q0FBa0M7Ozs7O0lBRXRCLHlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgZm9yd2FyZFJlZiwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Z0LWZpbGUtcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpbGUtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmlsZS1waWNrZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBGaWxlUGlja2VyQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEZpbGVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQElucHV0KClcbiAgc2V0IGFjY2VwdCAodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuZmlsZUlucHV0LmFjY2VwdCA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlZCAodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmZpbGVJbnB1dC5kaXNhYmxlZCA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBtdWx0aXBsZSAodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmZpbGVJbnB1dC5tdWx0aXBsZSA9IHZhbHVlO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuZHJhZ292ZXInKVxuICBkcmFnb3ZlcjogYm9vbGVhbjtcbiAgZmlsZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICBfdmFsdWU6IHN0cmluZztcbiAgcHJvcGFnYXRlQ2hhbmdlID0gKF86IGFueSkgPT4geyB9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHRoaXMuY3JlYXRlSW5wdXQoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cbiAgY3JlYXRlSW5wdXQoKSB7XG4gICAgY29uc3QgY29tcG9uZW50RWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuZmlsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0aGlzLmZpbGVJbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHRoaXMuZmlsZUlucHV0LnR5cGUgPSAnZmlsZSc7XG4gICAgdGhpcy5maWxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICB0aGlzLmxvYWRWYWx1ZShldmVudC50YXJnZXQuZmlsZXMpO1xuICAgIH0pO1xuICAgIGNvbXBvbmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5maWxlSW5wdXQpO1xuICB9XG4gIGxvYWRWYWx1ZShmaWxlcykge1xuICAgIGlmIChmaWxlcyAmJiBmaWxlcy5sZW5ndGg+MCkge1xuICAgICAgbGV0IGRhdGE6IGFueVtdID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaTxmaWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBmaWxlID0gZmlsZXMuaXRlbShpKTtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgZGF0YS5wdXNoKHtcbiAgICAgICAgICAgIGRhdGE6IHJlYWRlci5yZXN1bHQsXG4gICAgICAgICAgICBsYXN0TW9kaWZpZWREYXRlOiBmaWxlLmxhc3RNb2RpZmllZERhdGUsXG4gICAgICAgICAgICBuYW1lOiBmaWxlLm5hbWUsXG4gICAgICAgICAgICBzaXplOiBmaWxlLnNpemUsXG4gICAgICAgICAgICB0eXBlOiBmaWxlLnR5cGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoZGF0YS5sZW5ndGg9PWZpbGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGRhdGEubGVuZ3RoPjA/IGRhdGEgOiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBvcGVuRGlhbG9nKCkge1xuICAgIHRoaXMuZmlsZUlucHV0LmNsaWNrKCk7XG4gIH1cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgdmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UodGhpcy5fdmFsdWUpO1xuICB9XG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm4pIHtcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xuICB9XG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuKSB7XG4gICAgLy90aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xuICB9XG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG4gIHVwZGF0ZVZhbHVlKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICB9XG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxufVxuIl19