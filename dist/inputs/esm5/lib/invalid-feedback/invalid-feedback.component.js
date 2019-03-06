/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
/**
 * Componente para mostrar mensajes de error en los inputs
 */
var InvalidFeedbackComponent = /** @class */ (function () {
    function InvalidFeedbackComponent() {
        /**
         * Catálogo de mensajes según el tipo de error
         */
        this.defaultMessages = {
            'required': function (params) { return 'Is required'; },
            'min': function (params) { return 'Should be a valid'; },
            'max': function (params) { return 'Should be a valid'; },
            'minlength': function (params) { return '##FIELD## should be minimum ' + params.requiredLength + ' characters'; },
            'maxlength': function (params) { return '##FIELD## should not be greater then ' + params.requiredLength + ' characters'; },
            'pattern': function (params) { return 'Should be a valid'; },
            'email': function (params) { return "Should be valid email."; },
            'file': function (params) { return 'File must be valid'; }
        };
        this.messages = {};
    }
    /**
     * Métoro que devuelve el error según corresponda
     */
    /**
     * Métoro que devuelve el error según corresponda
     * @return {?}
     */
    InvalidFeedbackComponent.prototype.getError = /**
     * Métoro que devuelve el error según corresponda
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var objects = this.control.errors;
        if (objects !== null) {
            /** @type {?} */
            var errors = Object.keys(this.control.errors)
                .map(function (field) { return _this.getMessage(field, _this.control.errors[field], _this.control); });
            return errors[0];
        }
    };
    /**
     * Método que obtiene el mensaje de error
     */
    /**
     * Método que obtiene el mensaje de error
     * @private
     * @param {?} type
     * @param {?} params
     * @param {?} control
     * @return {?}
     */
    InvalidFeedbackComponent.prototype.getMessage = /**
     * Método que obtiene el mensaje de error
     * @private
     * @param {?} type
     * @param {?} params
     * @param {?} control
     * @return {?}
     */
    function (type, params, control) {
        /** @type {?} */
        var fname = this.getControlName(control);
        fname = fname.replace("_", " ").replace(" id", "").toLowerCase();
        fname = fname.replace(/\b\w/g, function (l) { return l.toUpperCase(); });
        /** @type {?} */
        var msg = this.messages[type] || this.defaultMessages[type](params) || 'Error';
        return control.dirty || control.touched ? msg.replace("##FIELD##", fname) : '';
    };
    /**
     * Obtiene el name del control (input)
     * @param control AbstractControl es el control con sus propiedades
     */
    /**
     * Obtiene el name del control (input)
     * @param {?} control AbstractControl es el control con sus propiedades
     * @return {?}
     */
    InvalidFeedbackComponent.prototype.getControlName = /**
     * Obtiene el name del control (input)
     * @param {?} control AbstractControl es el control con sus propiedades
     * @return {?}
     */
    function (control) {
        /** @type {?} */
        var formGroup = control.parent.controls;
        return Object.keys(formGroup).find(function (name) { return control === formGroup[name]; }) || null;
    };
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
    return InvalidFeedbackComponent;
}());
export { InvalidFeedbackComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52YWxpZC1mZWVkYmFjay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mYWN0b3ItaW5wdXRzLyIsInNvdXJjZXMiOlsibGliL2ludmFsaWQtZmVlZGJhY2svaW52YWxpZC1mZWVkYmFjay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBTWpEO0lBQUE7Ozs7UUFTbUIsb0JBQWUsR0FBRztZQUNqQyxVQUFVLEVBQUUsVUFBQyxNQUFNLElBQUssT0FBQSxhQUFhLEVBQWIsQ0FBYTtZQUNyQyxLQUFLLEVBQUUsVUFBQyxNQUFNLElBQUssT0FBQSxtQkFBbUIsRUFBbkIsQ0FBbUI7WUFDdEMsS0FBSyxFQUFFLFVBQUMsTUFBTSxJQUFLLE9BQUEsbUJBQW1CLEVBQW5CLENBQW1CO1lBQ3RDLFdBQVcsRUFBRSxVQUFDLE1BQU0sSUFBSyxPQUFBLDhCQUE4QixHQUFHLE1BQU0sQ0FBQyxjQUFjLEdBQUcsYUFBYSxFQUF0RSxDQUFzRTtZQUMvRixXQUFXLEVBQUUsVUFBQyxNQUFNLElBQUssT0FBQSx1Q0FBdUMsR0FBRyxNQUFNLENBQUMsY0FBYyxHQUFHLGFBQWEsRUFBL0UsQ0FBK0U7WUFDeEcsU0FBUyxFQUFFLFVBQUMsTUFBTSxJQUFLLE9BQUEsbUJBQW1CLEVBQW5CLENBQW1CO1lBQzFDLE9BQU8sRUFBRSxVQUFDLE1BQU0sSUFBSyxPQUFBLHdCQUF3QixFQUF4QixDQUF3QjtZQUM3QyxNQUFNLEVBQUUsVUFBQyxNQUFNLElBQUssT0FBQSxvQkFBb0IsRUFBcEIsQ0FBb0I7U0FDekMsQ0FBQztRQUVNLGFBQVEsR0FBUSxFQUFFLENBQUM7SUFvQzdCLENBQUM7SUE5QkM7O09BRUc7Ozs7O0lBQ0gsMkNBQVE7Ozs7SUFBUjtRQUFBLGlCQU9DOztZQU5LLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07UUFDakMsSUFBSSxPQUFPLEtBQUssSUFBSSxFQUFFOztnQkFDaEIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7aUJBQzFDLEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBaEUsQ0FBZ0UsQ0FBQztZQUNqRixPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsQjtJQUNILENBQUM7SUFDRDs7T0FFRzs7Ozs7Ozs7O0lBQ0ssNkNBQVU7Ozs7Ozs7O0lBQWxCLFVBQW1CLElBQVksRUFBRSxNQUFXLEVBQUUsT0FBWTs7WUFDcEQsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO1FBQ3hDLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pFLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQTs7WUFFaEQsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxPQUFPO1FBQzlFLE9BQU8sT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2hGLENBQUM7SUFDRDs7O09BR0c7Ozs7OztJQUNILGlEQUFjOzs7OztJQUFkLFVBQWUsT0FBd0I7O1lBQy9CLFNBQVMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVE7UUFDekMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLE9BQU8sS0FBSyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQTNCLENBQTJCLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDbEYsQ0FBQzs7Z0JBdkRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQiw4QkFBZ0Q7O2lCQUVqRDs7OzJCQWVFLEtBQUs7MEJBS0wsS0FBSzs7SUFnQ1IsK0JBQUM7Q0FBQSxBQXhERCxJQXdEQztTQW5EWSx3QkFBd0I7Ozs7Ozs7SUFJbkMsbURBU0U7Ozs7O0lBQ0YsNENBQzJCOzs7Ozs7SUFJM0IsMkNBQzREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUsIEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8qKlxuICogQ29tcG9uZW50ZSBwYXJhIG1vc3RyYXIgbWVuc2FqZXMgZGUgZXJyb3IgZW4gbG9zIGlucHV0c1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmdC1pbnZhbGlkLWZlZWRiYWNrJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ludmFsaWQtZmVlZGJhY2suY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbnZhbGlkLWZlZWRiYWNrLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSW52YWxpZEZlZWRiYWNrQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIENhdMOhbG9nbyBkZSBtZW5zYWplcyBzZWfDum4gZWwgdGlwbyBkZSBlcnJvclxuICAgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBkZWZhdWx0TWVzc2FnZXMgPSB7XG4gICAgJ3JlcXVpcmVkJzogKHBhcmFtcykgPT4gJ0lzIHJlcXVpcmVkJyxcbiAgICAnbWluJzogKHBhcmFtcykgPT4gJ1Nob3VsZCBiZSBhIHZhbGlkJyxcbiAgICAnbWF4JzogKHBhcmFtcykgPT4gJ1Nob3VsZCBiZSBhIHZhbGlkJyxcbiAgICAnbWlubGVuZ3RoJzogKHBhcmFtcykgPT4gJyMjRklFTEQjIyBzaG91bGQgYmUgbWluaW11bSAnICsgcGFyYW1zLnJlcXVpcmVkTGVuZ3RoICsgJyBjaGFyYWN0ZXJzJyxcbiAgICAnbWF4bGVuZ3RoJzogKHBhcmFtcykgPT4gJyMjRklFTEQjIyBzaG91bGQgbm90IGJlIGdyZWF0ZXIgdGhlbiAnICsgcGFyYW1zLnJlcXVpcmVkTGVuZ3RoICsgJyBjaGFyYWN0ZXJzJyxcbiAgICAncGF0dGVybic6IChwYXJhbXMpID0+ICdTaG91bGQgYmUgYSB2YWxpZCcsXG4gICAgJ2VtYWlsJzogKHBhcmFtcykgPT4gXCJTaG91bGQgYmUgdmFsaWQgZW1haWwuXCIsXG4gICAgJ2ZpbGUnOiAocGFyYW1zKSA9PiAnRmlsZSBtdXN0IGJlIHZhbGlkJ1xuICB9O1xuICBASW5wdXQoKVxuICBwcml2YXRlIG1lc3NhZ2VzOiBhbnkgPSB7fTtcbiAgLyoqXG4gICAqIEVsIGlucHV0IHBhcmEgbW9zdHJhciBlbCBtZW5zYWplXG4gICAqL1xuICBASW5wdXQoKVxuICBwcml2YXRlIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZSB8IEFic3RyYWN0Q29udHJvbDtcbiAgLyoqXG4gICAqIE3DqXRvcm8gcXVlIGRldnVlbHZlIGVsIGVycm9yIHNlZ8O6biBjb3JyZXNwb25kYVxuICAgKi9cbiAgZ2V0RXJyb3IoKTogc3RyaW5nIHtcbiAgICBsZXQgb2JqZWN0cyA9IHRoaXMuY29udHJvbC5lcnJvcnM7XG4gICAgaWYgKG9iamVjdHMgIT09IG51bGwpIHtcbiAgICAgIHZhciBlcnJvcnMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbnRyb2wuZXJyb3JzKVxuICAgICAgICAubWFwKGZpZWxkID0+IHRoaXMuZ2V0TWVzc2FnZShmaWVsZCwgdGhpcy5jb250cm9sLmVycm9yc1tmaWVsZF0sIHRoaXMuY29udHJvbCkpO1xuICAgICAgcmV0dXJuIGVycm9yc1swXTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIE3DqXRvZG8gcXVlIG9idGllbmUgZWwgbWVuc2FqZSBkZSBlcnJvclxuICAgKi9cbiAgcHJpdmF0ZSBnZXRNZXNzYWdlKHR5cGU6IHN0cmluZywgcGFyYW1zOiBhbnksIGNvbnRyb2w6IGFueSkge1xuICAgIHZhciBmbmFtZSA9IHRoaXMuZ2V0Q29udHJvbE5hbWUoY29udHJvbCk7XG4gICAgZm5hbWUgPSBmbmFtZS5yZXBsYWNlKFwiX1wiLCBcIiBcIikucmVwbGFjZShcIiBpZFwiLCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuICAgIGZuYW1lID0gZm5hbWUucmVwbGFjZSgvXFxiXFx3L2csIGwgPT4gbC50b1VwcGVyQ2FzZSgpKVxuXG4gICAgdmFyIG1zZyA9IHRoaXMubWVzc2FnZXNbdHlwZV0gfHwgdGhpcy5kZWZhdWx0TWVzc2FnZXNbdHlwZV0ocGFyYW1zKSB8fCAnRXJyb3InO1xuICAgIHJldHVybiBjb250cm9sLmRpcnR5IHx8IGNvbnRyb2wudG91Y2hlZD8gbXNnLnJlcGxhY2UoXCIjI0ZJRUxEIyNcIiwgZm5hbWUpIDogJyc7XG4gIH1cbiAgLyoqXG4gICAqIE9idGllbmUgZWwgbmFtZSBkZWwgY29udHJvbCAoaW5wdXQpXG4gICAqIEBwYXJhbSBjb250cm9sIEFic3RyYWN0Q29udHJvbCBlcyBlbCBjb250cm9sIGNvbiBzdXMgcHJvcGllZGFkZXNcbiAgICovXG4gIGdldENvbnRyb2xOYW1lKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHN0cmluZyB8IG51bGwge1xuICAgIGNvbnN0IGZvcm1Hcm91cCA9IGNvbnRyb2wucGFyZW50LmNvbnRyb2xzO1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhmb3JtR3JvdXApLmZpbmQobmFtZSA9PiBjb250cm9sID09PSBmb3JtR3JvdXBbbmFtZV0pIHx8IG51bGw7XG4gIH1cbn1cbiJdfQ==