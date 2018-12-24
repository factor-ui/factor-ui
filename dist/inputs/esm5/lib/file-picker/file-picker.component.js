/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, forwardRef, HostBinding, HostListener, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var FilePickerComponent = /** @class */ (function () {
    function FilePickerComponent(elementRef) {
        this.elementRef = elementRef;
        this.propagateChange = function (_) { };
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
        this.fileInput.addEventListener('change', function (event) {
            /** @type {?} */
            var reader = new FileReader();
            _this.loadValue(event.target.files);
        });
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
     * @param {?} value
     * @return {?}
     */
    FilePickerComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) { };
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
     * @return {?}
     */
    FilePickerComponent.prototype.registerOnTouched = /**
     * @return {?}
     */
    function () { };
    FilePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ft-file-picker',
                    template: "<ng-content></ng-content>\n",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return FilePickerComponent; }),
                            multi: true
                        }
                    ],
                    styles: [""]
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
        openDialog: [{ type: HostListener, args: ['click',] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmFjdG9yLWlucHV0cy8iLCJzb3VyY2VzIjpbImxpYi9maWxlLXBpY2tlci9maWxlLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBa0IsTUFBTSxlQUFlLENBQUM7QUFDcEgsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFO0lBOEJFLDZCQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRjFDLG9CQUFlLEdBQUcsVUFBQyxDQUFNLElBQU8sQ0FBQyxDQUFDO1FBR2hDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBbkJELHNCQUNJLHVDQUFNOzs7OztRQURWLFVBQ1ksS0FBYTtZQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7SUFDRCxzQkFDSSx5Q0FBUTs7Ozs7UUFEWixVQUNjLEtBQWM7WUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLENBQUM7OztPQUFBO0lBQ0Qsc0JBQ0kseUNBQVE7Ozs7O1FBRFosVUFDYyxLQUFjO1lBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTs7OztJQVVELHNDQUFROzs7SUFBUjtJQUVBLENBQUM7Ozs7SUFDRCx5Q0FBVzs7O0lBQVg7UUFBQSxpQkFVQzs7WUFUTyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWE7UUFDdEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxD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V0FBVyxTQUFDLGdCQUFnQjs2QkE2QzVCLFlBQVksU0FBQyxPQUFPOztJQWdCdkIsMEJBQUM7Q0FBQSxBQXRGRCxJQXNGQztTQTFFWSxtQkFBbUI7OztJQWE5Qix1Q0FBaUQ7O0lBQ2pELHdDQUE0Qjs7SUFDNUIscUNBQWU7O0lBQ2YsOENBQWtDOzs7OztJQUV0Qix5Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIGZvcndhcmRSZWYsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmdC1maWxlLXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9maWxlLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ZpbGUtcGlja2VyLmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRmlsZVBpY2tlckNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBGaWxlUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIEBJbnB1dCgpXG4gIHNldCBhY2NlcHQgKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmZpbGVJbnB1dC5hY2NlcHQgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZGlzYWJsZWQgKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5maWxlSW5wdXQuZGlzYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgbXVsdGlwbGUgKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5maWxlSW5wdXQubXVsdGlwbGUgPSB2YWx1ZTtcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRyYWdvdmVyJykgZHJhZ292ZXI6IGJvb2xlYW47XG4gIGZpbGVJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgX3ZhbHVlOiBzdHJpbmc7XG4gIHByb3BhZ2F0ZUNoYW5nZSA9IChfOiBhbnkpID0+IHsgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmNyZWF0ZUlucHV0KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICB9XG4gIGNyZWF0ZUlucHV0KCkge1xuICAgIGNvbnN0IGNvbXBvbmVudEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLmZpbGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGhpcy5maWxlSW5wdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB0aGlzLmZpbGVJbnB1dC50eXBlID0gJ2ZpbGUnO1xuICAgIHRoaXMuZmlsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudDogYW55KSA9PiB7XG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgdGhpcy5sb2FkVmFsdWUoZXZlbnQudGFyZ2V0LmZpbGVzKTtcbiAgICB9KTtcbiAgICBjb21wb25lbnRFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZmlsZUlucHV0KTtcbiAgfVxuICBsb2FkVmFsdWUoZmlsZXMpIHtcbiAgICBpZiAoZmlsZXMgJiYgZmlsZXMubGVuZ3RoPjApIHtcbiAgICAgIGxldCBkYXRhOiBhbnlbXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGk8ZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGZpbGVzLml0ZW0oaSk7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgIGRhdGEucHVzaCh7XG4gICAgICAgICAgICBkYXRhOiByZWFkZXIucmVzdWx0LFxuICAgICAgICAgICAgbGFzdE1vZGlmaWVkRGF0ZTogZmlsZS5sYXN0TW9kaWZpZWREYXRlLFxuICAgICAgICAgICAgbmFtZTogZmlsZS5uYW1lLFxuICAgICAgICAgICAgc2l6ZTogZmlsZS5zaXplLFxuICAgICAgICAgICAgdHlwZTogZmlsZS50eXBlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKGRhdGEubGVuZ3RoPT1maWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBkYXRhLmxlbmd0aD4wPyBkYXRhIDogbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgb3BlbkRpYWxvZygpIHtcbiAgICB0aGlzLmZpbGVJbnB1dC5jbGljaygpO1xuICB9XG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbiAgc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKHRoaXMuX3ZhbHVlKTtcbiAgfVxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHsgfVxuICByZWdpc3Rlck9uQ2hhbmdlKGZuKSB7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcbiAgfVxuICByZWdpc3Rlck9uVG91Y2hlZCgpIHsgfVxufVxuIl19