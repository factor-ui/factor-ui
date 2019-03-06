/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
/**
 * Componente para mostrar mensajes de error en los inputs
 */
export class InvalidFeedbackComponent {
    constructor() {
        /**
         * Catálogo de mensajes según el tipo de error
         */
        this.defaultMessages = {
            'required': (params) => 'Is required',
            'min': (params) => 'Should be a valid',
            'max': (params) => 'Should be a valid',
            'minlength': (params) => '##FIELD## should be minimum ' + params.requiredLength + ' characters',
            'maxlength': (params) => '##FIELD## should not be greater then ' + params.requiredLength + ' characters',
            'pattern': (params) => 'Should be a valid',
            'email': (params) => "Should be valid email.",
            'file': (params) => 'File must be valid'
        };
        this.messages = {};
    }
    /**
     * Métoro que devuelve el error según corresponda
     * @return {?}
     */
    getError() {
        /** @type {?} */
        let objects = this.control.errors;
        if (objects !== null) {
            /** @type {?} */
            var errors = Object.keys(this.control.errors)
                .map(field => this.getMessage(field, this.control.errors[field], this.control));
            return errors[0];
        }
    }
    /**
     * Método que obtiene el mensaje de error
     * @private
     * @param {?} type
     * @param {?} params
     * @param {?} control
     * @return {?}
     */
    getMessage(type, params, control) {
        /** @type {?} */
        var fname = this.getControlName(control);
        fname = fname.replace("_", " ").replace(" id", "").toLowerCase();
        fname = fname.replace(/\b\w/g, l => l.toUpperCase());
        /** @type {?} */
        var msg = this.messages[type] || this.defaultMessages[type](params) || 'Error';
        return control.dirty || control.touched ? msg.replace("##FIELD##", fname) : '';
    }
    /**
     * Obtiene el name del control (input)
     * @param {?} control AbstractControl es el control con sus propiedades
     * @return {?}
     */
    getControlName(control) {
        /** @type {?} */
        const formGroup = control.parent.controls;
        return Object.keys(formGroup).find(name => control === formGroup[name]) || null;
    }
}
InvalidFeedbackComponent.decorators = [
    { type: Component, args: [{
                selector: 'ft-invalid-feedback',
                template: "{{ getError() }}\n",
                styles: [":host{font-size:80%;color:#dc3545}"]
            }] }
];
InvalidFeedbackComponent.propDecorators = {
    messages: [{ type: Input }],
    control: [{ type: Input }]
};
if (false) {
    /**
     * Catálogo de mensajes según el tipo de error
     * @type {?}
     * @private
     */
    InvalidFeedbackComponent.prototype.defaultMessages;
    /**
     * @type {?}
     * @private
     */
    InvalidFeedbackComponent.prototype.messages;
    /**
     * El input para mostrar el mensaje
     * @type {?}
     * @private
     */
    InvalidFeedbackComponent.prototype.control;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52YWxpZC1mZWVkYmFjay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mYWN0b3ItaW5wdXRzLyIsInNvdXJjZXMiOlsibGliL2ludmFsaWQtZmVlZGJhY2svaW52YWxpZC1mZWVkYmFjay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBV2pELE1BQU0sT0FBTyx3QkFBd0I7SUFMckM7Ozs7UUFTbUIsb0JBQWUsR0FBRztZQUNqQyxVQUFVLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLGFBQWE7WUFDckMsS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxtQkFBbUI7WUFDdEMsS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxtQkFBbUI7WUFDdEMsV0FBVyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyw4QkFBOEIsR0FBRyxNQUFNLENBQUMsY0FBYyxHQUFHLGFBQWE7WUFDL0YsV0FBVyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyx1Q0FBdUMsR0FBRyxNQUFNLENBQUMsY0FBYyxHQUFHLGFBQWE7WUFDeEcsU0FBUyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxtQkFBbUI7WUFDMUMsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyx3QkFBd0I7WUFDN0MsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxvQkFBb0I7U0FDekMsQ0FBQztRQUVNLGFBQVEsR0FBUSxFQUFFLENBQUM7SUFvQzdCLENBQUM7Ozs7O0lBM0JDLFFBQVE7O1lBQ0YsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTtRQUNqQyxJQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7O2dCQUNoQixNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztpQkFDMUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2pGLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQzs7Ozs7Ozs7O0lBSU8sVUFBVSxDQUFDLElBQVksRUFBRSxNQUFXLEVBQUUsT0FBWTs7WUFDcEQsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO1FBQ3hDLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pFLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFBOztZQUVoRCxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLE9BQU87UUFDOUUsT0FBTyxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDaEYsQ0FBQzs7Ozs7O0lBS0QsY0FBYyxDQUFDLE9BQXdCOztjQUMvQixTQUFTLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRO1FBQ3pDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDO0lBQ2xGLENBQUM7OztZQXZERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsOEJBQWdEOzthQUVqRDs7O3VCQWVFLEtBQUs7c0JBS0wsS0FBSzs7Ozs7Ozs7SUFmTixtREFTRTs7Ozs7SUFDRiw0Q0FDMkI7Ozs7OztJQUkzQiwyQ0FDNEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZSwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLyoqXG4gKiBDb21wb25lbnRlIHBhcmEgbW9zdHJhciBtZW5zYWplcyBkZSBlcnJvciBlbiBsb3MgaW5wdXRzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Z0LWludmFsaWQtZmVlZGJhY2snLFxuICB0ZW1wbGF0ZVVybDogJy4vaW52YWxpZC1mZWVkYmFjay5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ludmFsaWQtZmVlZGJhY2suY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJbnZhbGlkRmVlZGJhY2tDb21wb25lbnQge1xuICAvKipcbiAgICogQ2F0w6Fsb2dvIGRlIG1lbnNhamVzIHNlZ8O6biBlbCB0aXBvIGRlIGVycm9yXG4gICAqL1xuICBwcml2YXRlIHJlYWRvbmx5IGRlZmF1bHRNZXNzYWdlcyA9IHtcbiAgICAncmVxdWlyZWQnOiAocGFyYW1zKSA9PiAnSXMgcmVxdWlyZWQnLFxuICAgICdtaW4nOiAocGFyYW1zKSA9PiAnU2hvdWxkIGJlIGEgdmFsaWQnLFxuICAgICdtYXgnOiAocGFyYW1zKSA9PiAnU2hvdWxkIGJlIGEgdmFsaWQnLFxuICAgICdtaW5sZW5ndGgnOiAocGFyYW1zKSA9PiAnIyNGSUVMRCMjIHNob3VsZCBiZSBtaW5pbXVtICcgKyBwYXJhbXMucmVxdWlyZWRMZW5ndGggKyAnIGNoYXJhY3RlcnMnLFxuICAgICdtYXhsZW5ndGgnOiAocGFyYW1zKSA9PiAnIyNGSUVMRCMjIHNob3VsZCBub3QgYmUgZ3JlYXRlciB0aGVuICcgKyBwYXJhbXMucmVxdWlyZWRMZW5ndGggKyAnIGNoYXJhY3RlcnMnLFxuICAgICdwYXR0ZXJuJzogKHBhcmFtcykgPT4gJ1Nob3VsZCBiZSBhIHZhbGlkJyxcbiAgICAnZW1haWwnOiAocGFyYW1zKSA9PiBcIlNob3VsZCBiZSB2YWxpZCBlbWFpbC5cIixcbiAgICAnZmlsZSc6IChwYXJhbXMpID0+ICdGaWxlIG11c3QgYmUgdmFsaWQnXG4gIH07XG4gIEBJbnB1dCgpXG4gIHByaXZhdGUgbWVzc2FnZXM6IGFueSA9IHt9O1xuICAvKipcbiAgICogRWwgaW5wdXQgcGFyYSBtb3N0cmFyIGVsIG1lbnNhamVcbiAgICovXG4gIEBJbnB1dCgpXG4gIHByaXZhdGUgY29udHJvbDogQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlIHwgQWJzdHJhY3RDb250cm9sO1xuICAvKipcbiAgICogTcOpdG9ybyBxdWUgZGV2dWVsdmUgZWwgZXJyb3Igc2Vnw7puIGNvcnJlc3BvbmRhXG4gICAqL1xuICBnZXRFcnJvcigpOiBzdHJpbmcge1xuICAgIGxldCBvYmplY3RzID0gdGhpcy5jb250cm9sLmVycm9ycztcbiAgICBpZiAob2JqZWN0cyAhPT0gbnVsbCkge1xuICAgICAgdmFyIGVycm9ycyA9IE9iamVjdC5rZXlzKHRoaXMuY29udHJvbC5lcnJvcnMpXG4gICAgICAgIC5tYXAoZmllbGQgPT4gdGhpcy5nZXRNZXNzYWdlKGZpZWxkLCB0aGlzLmNvbnRyb2wuZXJyb3JzW2ZpZWxkXSwgdGhpcy5jb250cm9sKSk7XG4gICAgICByZXR1cm4gZXJyb3JzWzBdO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogTcOpdG9kbyBxdWUgb2J0aWVuZSBlbCBtZW5zYWplIGRlIGVycm9yXG4gICAqL1xuICBwcml2YXRlIGdldE1lc3NhZ2UodHlwZTogc3RyaW5nLCBwYXJhbXM6IGFueSwgY29udHJvbDogYW55KSB7XG4gICAgdmFyIGZuYW1lID0gdGhpcy5nZXRDb250cm9sTmFtZShjb250cm9sKTtcbiAgICBmbmFtZSA9IGZuYW1lLnJlcGxhY2UoXCJfXCIsIFwiIFwiKS5yZXBsYWNlKFwiIGlkXCIsIFwiXCIpLnRvTG93ZXJDYXNlKCk7XG4gICAgZm5hbWUgPSBmbmFtZS5yZXBsYWNlKC9cXGJcXHcvZywgbCA9PiBsLnRvVXBwZXJDYXNlKCkpXG5cbiAgICB2YXIgbXNnID0gdGhpcy5tZXNzYWdlc1t0eXBlXSB8fCB0aGlzLmRlZmF1bHRNZXNzYWdlc1t0eXBlXShwYXJhbXMpIHx8ICdFcnJvcic7XG4gICAgcmV0dXJuIGNvbnRyb2wuZGlydHkgfHwgY29udHJvbC50b3VjaGVkPyBtc2cucmVwbGFjZShcIiMjRklFTEQjI1wiLCBmbmFtZSkgOiAnJztcbiAgfVxuICAvKipcbiAgICogT2J0aWVuZSBlbCBuYW1lIGRlbCBjb250cm9sIChpbnB1dClcbiAgICogQHBhcmFtIGNvbnRyb2wgQWJzdHJhY3RDb250cm9sIGVzIGVsIGNvbnRyb2wgY29uIHN1cyBwcm9waWVkYWRlc1xuICAgKi9cbiAgZ2V0Q29udHJvbE5hbWUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgY29uc3QgZm9ybUdyb3VwID0gY29udHJvbC5wYXJlbnQuY29udHJvbHM7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGZvcm1Hcm91cCkuZmluZChuYW1lID0+IGNvbnRyb2wgPT09IGZvcm1Hcm91cFtuYW1lXSkgfHwgbnVsbDtcbiAgfVxufVxuIl19