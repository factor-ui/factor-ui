/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, forwardRef, HostBinding, HostListener, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export class FilePickerComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.propagateChange = (_) => { };
        this.createInput();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set accept(value) {
        this.fileInput.accept = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this.fileInput.disabled = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set multiple(value) {
        this.fileInput.multiple = value;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    createInput() {
        /** @type {?} */
        const componentElement = this.elementRef.nativeElement;
        this.fileInput = document.createElement('input');
        this.fileInput.style.display = 'none';
        this.fileInput.type = 'file';
        this.fileInput.addEventListener('change', (event) => {
            /** @type {?} */
            const reader = new FileReader();
            this.loadValue(event.target.files);
        });
        componentElement.appendChild(this.fileInput);
    }
    /**
     * @param {?} files
     * @return {?}
     */
    loadValue(files) {
        if (files && files.length > 0) {
            /** @type {?} */
            let data = [];
            for (let i = 0; i < files.length; i++) {
                /** @type {?} */
                const file = files.item(i);
                /** @type {?} */
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    data.push({
                        data: reader.result,
                        lastModifiedDate: file.lastModifiedDate,
                        name: file.name,
                        size: file.size,
                        type: file.type
                    });
                    if (data.length == files.length) {
                        this.value = data.length > 0 ? data : null;
                    }
                };
            }
        }
    }
    /**
     * @return {?}
     */
    openDialog() {
        this.fileInput.click();
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._value = value;
        this.propagateChange(this._value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) { }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    /**
     * @return {?}
     */
    registerOnTouched() { }
}
FilePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ft-file-picker',
                template: "<ng-content></ng-content>\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => FilePickerComponent),
                        multi: true
                    }
                ],
                styles: [""]
            }] }
];
/** @nocollapse */
FilePickerComponent.ctorParameters = () => [
    { type: ElementRef }
];
FilePickerComponent.propDecorators = {
    accept: [{ type: Input }],
    disabled: [{ type: Input }],
    multiple: [{ type: Input }],
    dragover: [{ type: HostBinding, args: ['class.dragover',] }],
    openDialog: [{ type: HostListener, args: ['click',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmFjdG9yLWlucHV0cy8iLCJzb3VyY2VzIjpbImxpYi9maWxlLXBpY2tlci9maWxlLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBa0IsTUFBTSxlQUFlLENBQUM7QUFDcEgsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBY3pFLE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFrQjlCLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFGMUMsb0JBQWUsR0FBRyxDQUFDLENBQU0sRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBR2hDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQW5CRCxJQUNJLE1BQU0sQ0FBRSxLQUFhO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDOzs7OztJQUNELElBQ0ksUUFBUSxDQUFFLEtBQWM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBQ0QsSUFDSSxRQUFRLENBQUUsS0FBYztRQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQzs7OztJQVVELFFBQVE7SUFFUixDQUFDOzs7O0lBQ0QsV0FBVzs7Y0FDSCxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWE7UUFDdEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFD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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIGZvcndhcmRSZWYsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmdC1maWxlLXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9maWxlLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ZpbGUtcGlja2VyLmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRmlsZVBpY2tlckNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBGaWxlUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIEBJbnB1dCgpXG4gIHNldCBhY2NlcHQgKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmZpbGVJbnB1dC5hY2NlcHQgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZGlzYWJsZWQgKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5maWxlSW5wdXQuZGlzYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgbXVsdGlwbGUgKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5maWxlSW5wdXQubXVsdGlwbGUgPSB2YWx1ZTtcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRyYWdvdmVyJykgZHJhZ292ZXI6IGJvb2xlYW47XG4gIGZpbGVJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgX3ZhbHVlOiBzdHJpbmc7XG4gIHByb3BhZ2F0ZUNoYW5nZSA9IChfOiBhbnkpID0+IHsgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmNyZWF0ZUlucHV0KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICB9XG4gIGNyZWF0ZUlucHV0KCkge1xuICAgIGNvbnN0IGNvbXBvbmVudEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLmZpbGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGhpcy5maWxlSW5wdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB0aGlzLmZpbGVJbnB1dC50eXBlID0gJ2ZpbGUnO1xuICAgIHRoaXMuZmlsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudDogYW55KSA9PiB7XG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgdGhpcy5sb2FkVmFsdWUoZXZlbnQudGFyZ2V0LmZpbGVzKTtcbiAgICB9KTtcbiAgICBjb21wb25lbnRFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZmlsZUlucHV0KTtcbiAgfVxuICBsb2FkVmFsdWUoZmlsZXMpIHtcbiAgICBpZiAoZmlsZXMgJiYgZmlsZXMubGVuZ3RoPjApIHtcbiAgICAgIGxldCBkYXRhOiBhbnlbXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGk8ZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGZpbGVzLml0ZW0oaSk7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgIGRhdGEucHVzaCh7XG4gICAgICAgICAgICBkYXRhOiByZWFkZXIucmVzdWx0LFxuICAgICAgICAgICAgbGFzdE1vZGlmaWVkRGF0ZTogZmlsZS5sYXN0TW9kaWZpZWREYXRlLFxuICAgICAgICAgICAgbmFtZTogZmlsZS5uYW1lLFxuICAgICAgICAgICAgc2l6ZTogZmlsZS5zaXplLFxuICAgICAgICAgICAgdHlwZTogZmlsZS50eXBlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKGRhdGEubGVuZ3RoPT1maWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBkYXRhLmxlbmd0aD4wPyBkYXRhIDogbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgb3BlbkRpYWxvZygpIHtcbiAgICB0aGlzLmZpbGVJbnB1dC5jbGljaygpO1xuICB9XG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbiAgc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKHRoaXMuX3ZhbHVlKTtcbiAgfVxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHsgfVxuICByZWdpc3Rlck9uQ2hhbmdlKGZuKSB7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcbiAgfVxuICByZWdpc3Rlck9uVG91Y2hlZCgpIHsgfVxufVxuIl19