var FilePickerComponent_1;
import { __decorate } from "tslib";
import { Component, ElementRef, forwardRef, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
let FilePickerComponent = FilePickerComponent_1 = class FilePickerComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.propagateChange = (_) => { };
        this.createInput();
    }
    set accept(value) {
        this.fileInput.accept = value;
    }
    set disabled(value) {
        this.fileInput.disabled = value;
    }
    set multiple(value) {
        this.fileInput.multiple = value;
    }
    ngOnInit() {
    }
    createInput() {
        const componentElement = this.elementRef.nativeElement;
        this.fileInput = document.createElement('input');
        this.fileInput.style.display = 'none';
        this.fileInput.type = 'file';
        this.fileInput.addEventListener('change', (event) => {
            const reader = new FileReader();
            this.loadValue(event.target.files);
        });
        componentElement.appendChild(this.fileInput);
    }
    loadValue(files) {
        if (files && files.length > 0) {
            let data = [];
            for (let i = 0; i < files.length; i++) {
                const file = files.item(i);
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
    openDialog() {
        this.fileInput.click();
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
        this.propagateChange(this._value);
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) {
        //this.propagateChange = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    updateValue(event) {
        this.value = event.target.value;
    }
    writeValue(value) {
        this.value = value;
    }
};
FilePickerComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
                useExisting: forwardRef(() => FilePickerComponent_1),
                multi: true
            }
        ],
        styles: [":host{display:inline-block}"]
    })
], FilePickerComponent);
export { FilePickerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmFjdG9yLWlucHV0cy8iLCJzb3VyY2VzIjpbImxpYi9maWxlLXBpY2tlci9maWxlLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwSCxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFjekUsSUFBYSxtQkFBbUIsMkJBQWhDLE1BQWEsbUJBQW1CO0lBbUI5QixZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRjFDLG9CQUFlLEdBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUdoQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQW5CRCxJQUFJLE1BQU0sQ0FBRSxLQUFhO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBRUQsSUFBSSxRQUFRLENBQUUsS0FBYztRQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQztJQUVELElBQUksUUFBUSxDQUFFLEtBQWM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFXRCxRQUFRO0lBRVIsQ0FBQztJQUNELFdBQVc7UUFDVCxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMs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QkFBZ0IsQ0FBQztxREFDWjtBQThDbEI7SUFEQyxZQUFZLENBQUMsT0FBTyxDQUFDO3FEQUdyQjtBQUtEO0lBREMsS0FBSyxFQUFFO2dEQUlQO0FBdEVVLG1CQUFtQjtJQVovQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLHVDQUEyQztRQUUzQyxTQUFTLEVBQUU7WUFDVDtnQkFDRSxPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHFCQUFtQixDQUFDO2dCQUNsRCxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0Y7O0tBQ0YsQ0FBQztHQUNXLG1CQUFtQixDQXNGL0I7U0F0RlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBmb3J3YXJkUmVmLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZnQtZmlsZS1waWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZmlsZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9maWxlLXBpY2tlci5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEZpbGVQaWNrZXJDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRmlsZVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBASW5wdXQoKVxuICBzZXQgYWNjZXB0ICh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5maWxlSW5wdXQuYWNjZXB0ID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGRpc2FibGVkICh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuZmlsZUlucHV0LmRpc2FibGVkID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IG11bHRpcGxlICh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuZmlsZUlucHV0Lm11bHRpcGxlID0gdmFsdWU7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kcmFnb3ZlcicpXG4gIGRyYWdvdmVyOiBib29sZWFuO1xuICBmaWxlSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gIF92YWx1ZTogc3RyaW5nO1xuICBwcm9wYWdhdGVDaGFuZ2UgPSAoXzogYW55KSA9PiB7IH07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5jcmVhdGVJbnB1dCgpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgfVxuICBjcmVhdGVJbnB1dCgpIHtcbiAgICBjb25zdCBjb21wb25lbnRFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5maWxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRoaXMuZmlsZUlucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdGhpcy5maWxlSW5wdXQudHlwZSA9ICdmaWxlJztcbiAgICB0aGlzLmZpbGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIHRoaXMubG9hZFZhbHVlKGV2ZW50LnRhcmdldC5maWxlcyk7XG4gICAgfSk7XG4gICAgY29tcG9uZW50RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmZpbGVJbnB1dCk7XG4gIH1cbiAgbG9hZFZhbHVlKGZpbGVzKSB7XG4gICAgaWYgKGZpbGVzICYmIGZpbGVzLmxlbmd0aD4wKSB7XG4gICAgICBsZXQgZGF0YTogYW55W10gPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpPGZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBmaWxlcy5pdGVtKGkpO1xuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICBkYXRhLnB1c2goe1xuICAgICAgICAgICAgZGF0YTogcmVhZGVyLnJlc3VsdCxcbiAgICAgICAgICAgIGxhc3RNb2RpZmllZERhdGU6IGZpbGUubGFzdE1vZGlmaWVkRGF0ZSxcbiAgICAgICAgICAgIG5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgICAgIHNpemU6IGZpbGUuc2l6ZSxcbiAgICAgICAgICAgIHR5cGU6IGZpbGUudHlwZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChkYXRhLmxlbmd0aD09ZmlsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gZGF0YS5sZW5ndGg+MD8gZGF0YSA6IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIG9wZW5EaWFsb2coKSB7XG4gICAgdGhpcy5maWxlSW5wdXQuY2xpY2soKTtcbiAgfVxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSh0aGlzLl92YWx1ZSk7XG4gIH1cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbikge1xuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XG4gIH1cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm4pIHtcbiAgICAvL3RoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XG4gIH1cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cbiAgdXBkYXRlVmFsdWUoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gIH1cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG59XG4iXX0=