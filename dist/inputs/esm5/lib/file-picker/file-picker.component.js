import { __decorate } from "tslib";
import { Component, ElementRef, forwardRef, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
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
export { FilePickerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmFjdG9yLWlucHV0cy8iLCJzb3VyY2VzIjpbImxpYi9maWxlLXBpY2tlci9maWxlLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BILE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQWN6RTtJQW1CRSw2QkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUYxQyxvQkFBZSxHQUFHLFVBQUMsQ0FBTSxJQUFPLENBQUMsQ0FBQztRQUdoQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs0QkFyQlUsbUJBQW1CO0lBRTlCLHNCQUFJLHVDQUFNO2FBQVYsVUFBWSxLQUFhO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHlDQUFRO2FBQVosVUFBYyxLQUFjO1lBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHlDQUFRO2FBQVosVUFBYyxLQUFjO1lBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQVdELHNDQUFRLEdBQVI7SUFFQSxDQUFDO0lBQ0QseUNBQVcsR0FBWDtRQUFBLGlCQVVDO1FBVEMsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUN2RCxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFh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QUFLLEVBQUU7cURBR1A7SUFFRDtRQURDLEtBQUssRUFBRTt1REFHUDtJQUVEO1FBREMsS0FBSyxFQUFFO3VEQUdQO0lBRUQ7UUFEQyxXQUFXLENBQUMsZ0JBQWdCLENBQUM7eURBQ1o7SUE4Q2xCO1FBREMsWUFBWSxDQUFDLE9BQU8sQ0FBQzt5REFHckI7SUFLRDtRQURDLEtBQUssRUFBRTtvREFJUDtJQXRFVSxtQkFBbUI7UUFaL0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQix1Q0FBMkM7WUFFM0MsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHFCQUFtQixFQUFuQixDQUFtQixDQUFDO29CQUNsRCxLQUFLLEVBQUUsSUFBSTtpQkFDWjthQUNGOztTQUNGLENBQUM7T0FDVyxtQkFBbUIsQ0FzRi9CO0lBQUQsMEJBQUM7Q0FBQSxBQXRGRCxJQXNGQztTQXRGWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIGZvcndhcmRSZWYsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmdC1maWxlLXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9maWxlLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ZpbGUtcGlja2VyLmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRmlsZVBpY2tlckNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBGaWxlUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIEBJbnB1dCgpXG4gIHNldCBhY2NlcHQgKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmZpbGVJbnB1dC5hY2NlcHQgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZGlzYWJsZWQgKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5maWxlSW5wdXQuZGlzYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgbXVsdGlwbGUgKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5maWxlSW5wdXQubXVsdGlwbGUgPSB2YWx1ZTtcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRyYWdvdmVyJylcbiAgZHJhZ292ZXI6IGJvb2xlYW47XG4gIGZpbGVJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgX3ZhbHVlOiBzdHJpbmc7XG4gIHByb3BhZ2F0ZUNoYW5nZSA9IChfOiBhbnkpID0+IHsgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmNyZWF0ZUlucHV0KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICB9XG4gIGNyZWF0ZUlucHV0KCkge1xuICAgIGNvbnN0IGNvbXBvbmVudEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLmZpbGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGhpcy5maWxlSW5wdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB0aGlzLmZpbGVJbnB1dC50eXBlID0gJ2ZpbGUnO1xuICAgIHRoaXMuZmlsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudDogYW55KSA9PiB7XG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgdGhpcy5sb2FkVmFsdWUoZXZlbnQudGFyZ2V0LmZpbGVzKTtcbiAgICB9KTtcbiAgICBjb21wb25lbnRFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZmlsZUlucHV0KTtcbiAgfVxuICBsb2FkVmFsdWUoZmlsZXMpIHtcbiAgICBpZiAoZmlsZXMgJiYgZmlsZXMubGVuZ3RoPjApIHtcbiAgICAgIGxldCBkYXRhOiBhbnlbXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGk8ZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGZpbGVzLml0ZW0oaSk7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgIGRhdGEucHVzaCh7XG4gICAgICAgICAgICBkYXRhOiByZWFkZXIucmVzdWx0LFxuICAgICAgICAgICAgbGFzdE1vZGlmaWVkRGF0ZTogZmlsZS5sYXN0TW9kaWZpZWREYXRlLFxuICAgICAgICAgICAgbmFtZTogZmlsZS5uYW1lLFxuICAgICAgICAgICAgc2l6ZTogZmlsZS5zaXplLFxuICAgICAgICAgICAgdHlwZTogZmlsZS50eXBlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKGRhdGEubGVuZ3RoPT1maWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBkYXRhLmxlbmd0aD4wPyBkYXRhIDogbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgb3BlbkRpYWxvZygpIHtcbiAgICB0aGlzLmZpbGVJbnB1dC5jbGljaygpO1xuICB9XG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKHRoaXMuX3ZhbHVlKTtcbiAgfVxuICByZWdpc3Rlck9uQ2hhbmdlKGZuKSB7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcbiAgfVxuICByZWdpc3Rlck9uVG91Y2hlZChmbikge1xuICAgIC8vdGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcbiAgfVxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuICB1cGRhdGVWYWx1ZShldmVudDogYW55KSB7XG4gICAgdGhpcy52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgfVxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cbn1cbiJdfQ==