/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            'required': (/**
             * @param {?} params
             * @return {?}
             */
            (params) => 'Is required'),
            'min': (/**
             * @param {?} params
             * @return {?}
             */
            (params) => 'Should be a valid'),
            'max': (/**
             * @param {?} params
             * @return {?}
             */
            (params) => 'Should be a valid'),
            'minlength': (/**
             * @param {?} params
             * @return {?}
             */
            (params) => '##FIELD## should be minimum ' + params.requiredLength + ' characters'),
            'maxlength': (/**
             * @param {?} params
             * @return {?}
             */
            (params) => '##FIELD## should not be greater then ' + params.requiredLength + ' characters'),
            'pattern': (/**
             * @param {?} params
             * @return {?}
             */
            (params) => 'Should be a valid'),
            'email': (/**
             * @param {?} params
             * @return {?}
             */
            (params) => "Should be valid email."),
            'file': (/**
             * @param {?} params
             * @return {?}
             */
            (params) => 'File must be valid')
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
                .map((/**
             * @param {?} field
             * @return {?}
             */
            field => this.getMessage(field, this.control.errors[field], this.control)));
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
        fname = fname.replace(/\b\w/g, (/**
         * @param {?} l
         * @return {?}
         */
        l => l.toUpperCase()));
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
        return Object.keys(formGroup).find((/**
         * @param {?} name
         * @return {?}
         */
        name => control === formGroup[name])) || null;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52YWxpZC1mZWVkYmFjay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mYWN0b3ItaW5wdXRzLyIsInNvdXJjZXMiOlsibGliL2ludmFsaWQtZmVlZGJhY2svaW52YWxpZC1mZWVkYmFjay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBV2pELE1BQU0sT0FBTyx3QkFBd0I7SUFMckM7Ozs7UUFTbUIsb0JBQWUsR0FBRztZQUNqQyxVQUFVOzs7O1lBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLGFBQWEsQ0FBQTtZQUNyQyxLQUFLOzs7O1lBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLG1CQUFtQixDQUFBO1lBQ3RDLEtBQUs7Ozs7WUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsbUJBQW1CLENBQUE7WUFDdEMsV0FBVzs7OztZQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyw4QkFBOEIsR0FBRyxNQUFNLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQTtZQUMvRixXQUFXOzs7O1lBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLHVDQUF1QyxHQUFHLE1BQU0sQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFBO1lBQ3hHLFNBQVM7Ozs7WUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsbUJBQW1CLENBQUE7WUFDMUMsT0FBTzs7OztZQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQTtZQUM3QyxNQUFNOzs7O1lBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLG9CQUFvQixDQUFBO1NBQ3pDLENBQUM7UUFFTSxhQUFRLEdBQVEsRUFBRSxDQUFDO0lBb0M3QixDQUFDOzs7OztJQTNCQyxRQUFROztZQUNGLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07UUFDakMsSUFBSSxPQUFPLEtBQUssSUFBSSxFQUFFOztnQkFDaEIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7aUJBQzFDLEdBQUc7Ozs7WUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQztZQUNqRixPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsQjtJQUNILENBQUM7Ozs7Ozs7OztJQUlPLFVBQVUsQ0FBQyxJQUFZLEVBQUUsTUFBVyxFQUFFLE9BQVk7O1lBQ3BELEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztRQUN4QyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNqRSxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUMsQ0FBQTs7WUFFaEQsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxPQUFPO1FBQzlFLE9BQU8sT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2hGLENBQUM7Ozs7OztJQUtELGNBQWMsQ0FBQyxPQUF3Qjs7Y0FDL0IsU0FBUyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUTtRQUN6QyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSTs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLElBQUksQ0FBQztJQUNsRixDQUFDOzs7WUF2REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLDhCQUFnRDs7YUFFakQ7Ozt1QkFlRSxLQUFLO3NCQUtMLEtBQUs7Ozs7Ozs7O0lBZk4sbURBU0U7Ozs7O0lBQ0YsNENBQzJCOzs7Ozs7SUFJM0IsMkNBQzREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUsIEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8qKlxuICogQ29tcG9uZW50ZSBwYXJhIG1vc3RyYXIgbWVuc2FqZXMgZGUgZXJyb3IgZW4gbG9zIGlucHV0c1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmdC1pbnZhbGlkLWZlZWRiYWNrJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ludmFsaWQtZmVlZGJhY2suY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbnZhbGlkLWZlZWRiYWNrLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSW52YWxpZEZlZWRiYWNrQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIENhdMOhbG9nbyBkZSBtZW5zYWplcyBzZWfDum4gZWwgdGlwbyBkZSBlcnJvclxuICAgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBkZWZhdWx0TWVzc2FnZXMgPSB7XG4gICAgJ3JlcXVpcmVkJzogKHBhcmFtcykgPT4gJ0lzIHJlcXVpcmVkJyxcbiAgICAnbWluJzogKHBhcmFtcykgPT4gJ1Nob3VsZCBiZSBhIHZhbGlkJyxcbiAgICAnbWF4JzogKHBhcmFtcykgPT4gJ1Nob3VsZCBiZSBhIHZhbGlkJyxcbiAgICAnbWlubGVuZ3RoJzogKHBhcmFtcykgPT4gJyMjRklFTEQjIyBzaG91bGQgYmUgbWluaW11bSAnICsgcGFyYW1zLnJlcXVpcmVkTGVuZ3RoICsgJyBjaGFyYWN0ZXJzJyxcbiAgICAnbWF4bGVuZ3RoJzogKHBhcmFtcykgPT4gJyMjRklFTEQjIyBzaG91bGQgbm90IGJlIGdyZWF0ZXIgdGhlbiAnICsgcGFyYW1zLnJlcXVpcmVkTGVuZ3RoICsgJyBjaGFyYWN0ZXJzJyxcbiAgICAncGF0dGVybic6IChwYXJhbXMpID0+ICdTaG91bGQgYmUgYSB2YWxpZCcsXG4gICAgJ2VtYWlsJzogKHBhcmFtcykgPT4gXCJTaG91bGQgYmUgdmFsaWQgZW1haWwuXCIsXG4gICAgJ2ZpbGUnOiAocGFyYW1zKSA9PiAnRmlsZSBtdXN0IGJlIHZhbGlkJ1xuICB9O1xuICBASW5wdXQoKVxuICBwcml2YXRlIG1lc3NhZ2VzOiBhbnkgPSB7fTtcbiAgLyoqXG4gICAqIEVsIGlucHV0IHBhcmEgbW9zdHJhciBlbCBtZW5zYWplXG4gICAqL1xuICBASW5wdXQoKVxuICBwcml2YXRlIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZSB8IEFic3RyYWN0Q29udHJvbDtcbiAgLyoqXG4gICAqIE3DqXRvcm8gcXVlIGRldnVlbHZlIGVsIGVycm9yIHNlZ8O6biBjb3JyZXNwb25kYVxuICAgKi9cbiAgZ2V0RXJyb3IoKTogc3RyaW5nIHtcbiAgICBsZXQgb2JqZWN0cyA9IHRoaXMuY29udHJvbC5lcnJvcnM7XG4gICAgaWYgKG9iamVjdHMgIT09IG51bGwpIHtcbiAgICAgIHZhciBlcnJvcnMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbnRyb2wuZXJyb3JzKVxuICAgICAgICAubWFwKGZpZWxkID0+IHRoaXMuZ2V0TWVzc2FnZShmaWVsZCwgdGhpcy5jb250cm9sLmVycm9yc1tmaWVsZF0sIHRoaXMuY29udHJvbCkpO1xuICAgICAgcmV0dXJuIGVycm9yc1swXTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIE3DqXRvZG8gcXVlIG9idGllbmUgZWwgbWVuc2FqZSBkZSBlcnJvclxuICAgKi9cbiAgcHJpdmF0ZSBnZXRNZXNzYWdlKHR5cGU6IHN0cmluZywgcGFyYW1zOiBhbnksIGNvbnRyb2w6IGFueSkge1xuICAgIHZhciBmbmFtZSA9IHRoaXMuZ2V0Q29udHJvbE5hbWUoY29udHJvbCk7XG4gICAgZm5hbWUgPSBmbmFtZS5yZXBsYWNlKFwiX1wiLCBcIiBcIikucmVwbGFjZShcIiBpZFwiLCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuICAgIGZuYW1lID0gZm5hbWUucmVwbGFjZSgvXFxiXFx3L2csIGwgPT4gbC50b1VwcGVyQ2FzZSgpKVxuXG4gICAgdmFyIG1zZyA9IHRoaXMubWVzc2FnZXNbdHlwZV0gfHwgdGhpcy5kZWZhdWx0TWVzc2FnZXNbdHlwZV0ocGFyYW1zKSB8fCAnRXJyb3InO1xuICAgIHJldHVybiBjb250cm9sLmRpcnR5IHx8IGNvbnRyb2wudG91Y2hlZD8gbXNnLnJlcGxhY2UoXCIjI0ZJRUxEIyNcIiwgZm5hbWUpIDogJyc7XG4gIH1cbiAgLyoqXG4gICAqIE9idGllbmUgZWwgbmFtZSBkZWwgY29udHJvbCAoaW5wdXQpXG4gICAqIEBwYXJhbSBjb250cm9sIEFic3RyYWN0Q29udHJvbCBlcyBlbCBjb250cm9sIGNvbiBzdXMgcHJvcGllZGFkZXNcbiAgICovXG4gIGdldENvbnRyb2xOYW1lKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHN0cmluZyB8IG51bGwge1xuICAgIGNvbnN0IGZvcm1Hcm91cCA9IGNvbnRyb2wucGFyZW50LmNvbnRyb2xzO1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhmb3JtR3JvdXApLmZpbmQobmFtZSA9PiBjb250cm9sID09PSBmb3JtR3JvdXBbbmFtZV0pIHx8IG51bGw7XG4gIH1cbn1cbiJdfQ==