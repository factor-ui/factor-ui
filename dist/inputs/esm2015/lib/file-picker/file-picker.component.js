/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, forwardRef, HostBinding, HostListener, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export class FilePickerComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.propagateChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
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
        this.fileInput.addEventListener('change', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const reader = new FileReader();
            this.loadValue(event.target.files);
        }));
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
                reader.onload = (/**
                 * @return {?}
                 */
                () => {
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
                });
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
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        //this.propagateChange = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    updateValue(event) {
        this.value = event.target.value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
    }
}
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
                        () => FilePickerComponent)),
                        multi: true
                    }
                ],
                styles: [":host{display:inline-block}"]
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
    openDialog: [{ type: HostListener, args: ['click',] }],
    value: [{ type: Input }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmFjdG9yLWlucHV0cy8iLCJzb3VyY2VzIjpbImxpYi9maWxlLXBpY2tlci9maWxlLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBa0IsTUFBTSxlQUFlLENBQUM7QUFDcEgsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBY3pFLE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFtQjlCLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFGMUMsb0JBQWU7Ozs7UUFBRyxDQUFDLENBQU0sRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFDO1FBR2hDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQXBCRCxJQUNJLE1BQU0sQ0FBRSxLQUFhO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDOzs7OztJQUNELElBQ0ksUUFBUSxDQUFFLEtBQWM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBQ0QsSUFDSSxRQUFRLENBQUUsS0FBYztRQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQzs7OztJQVdELFFBQVE7SUFFUixDQUFDOzs7O0lBQ0QsV0FBVzs7Y0FDSCxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWE7UUFDdEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxD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LEdBQUcsRUFBRSxDQUFDLG1CQUFtQixFQUFDO3dCQUNsRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjs7YUFDRjs7OztZQWRtQixVQUFVOzs7cUJBZ0IzQixLQUFLO3VCQUlMLEtBQUs7dUJBSUwsS0FBSzt1QkFJTCxXQUFXLFNBQUMsZ0JBQWdCO3lCQThDNUIsWUFBWSxTQUFDLE9BQU87b0JBT3BCLEtBQUs7Ozs7SUFyRE4sdUNBQ2tCOztJQUNsQix3Q0FBNEI7O0lBQzVCLHFDQUFlOztJQUNmLDhDQUFrQzs7Ozs7SUFFdEIseUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBmb3J3YXJkUmVmLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZnQtZmlsZS1waWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZmlsZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9maWxlLXBpY2tlci5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEZpbGVQaWNrZXJDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRmlsZVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBASW5wdXQoKVxuICBzZXQgYWNjZXB0ICh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5maWxlSW5wdXQuYWNjZXB0ID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGRpc2FibGVkICh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuZmlsZUlucHV0LmRpc2FibGVkID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IG11bHRpcGxlICh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuZmlsZUlucHV0Lm11bHRpcGxlID0gdmFsdWU7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kcmFnb3ZlcicpXG4gIGRyYWdvdmVyOiBib29sZWFuO1xuICBmaWxlSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gIF92YWx1ZTogc3RyaW5nO1xuICBwcm9wYWdhdGVDaGFuZ2UgPSAoXzogYW55KSA9PiB7IH07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5jcmVhdGVJbnB1dCgpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgfVxuICBjcmVhdGVJbnB1dCgpIHtcbiAgICBjb25zdCBjb21wb25lbnRFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5maWxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRoaXMuZmlsZUlucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdGhpcy5maWxlSW5wdXQudHlwZSA9ICdmaWxlJztcbiAgICB0aGlzLmZpbGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIHRoaXMubG9hZFZhbHVlKGV2ZW50LnRhcmdldC5maWxlcyk7XG4gICAgfSk7XG4gICAgY29tcG9uZW50RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmZpbGVJbnB1dCk7XG4gIH1cbiAgbG9hZFZhbHVlKGZpbGVzKSB7XG4gICAgaWYgKGZpbGVzICYmIGZpbGVzLmxlbmd0aD4wKSB7XG4gICAgICBsZXQgZGF0YTogYW55W10gPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpPGZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBmaWxlcy5pdGVtKGkpO1xuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICBkYXRhLnB1c2goe1xuICAgICAgICAgICAgZGF0YTogcmVhZGVyLnJlc3VsdCxcbiAgICAgICAgICAgIGxhc3RNb2RpZmllZERhdGU6IGZpbGUubGFzdE1vZGlmaWVkRGF0ZSxcbiAgICAgICAgICAgIG5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgICAgIHNpemU6IGZpbGUuc2l6ZSxcbiAgICAgICAgICAgIHR5cGU6IGZpbGUudHlwZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChkYXRhLmxlbmd0aD09ZmlsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gZGF0YS5sZW5ndGg+MD8gZGF0YSA6IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIG9wZW5EaWFsb2coKSB7XG4gICAgdGhpcy5maWxlSW5wdXQuY2xpY2soKTtcbiAgfVxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSh0aGlzLl92YWx1ZSk7XG4gIH1cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbikge1xuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XG4gIH1cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm4pIHtcbiAgICAvL3RoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XG4gIH1cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cbiAgdXBkYXRlVmFsdWUoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gIH1cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG59XG4iXX0=