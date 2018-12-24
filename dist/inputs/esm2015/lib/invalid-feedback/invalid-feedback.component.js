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
        return control.dirty ? msg.replace("##FIELD##", fname) : '';
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
                styles: [""]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52YWxpZC1mZWVkYmFjay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mYWN0b3ItaW5wdXRzLyIsInNvdXJjZXMiOlsibGliL2ludmFsaWQtZmVlZGJhY2svaW52YWxpZC1mZWVkYmFjay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBV2pELE1BQU0sT0FBTyx3QkFBd0I7SUFMckM7Ozs7UUFTbUIsb0JBQWUsR0FBRztZQUNqQyxVQUFVLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLGFBQWE7WUFDckMsS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxtQkFBbUI7WUFDdEMsS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxtQkFBbUI7WUFDdEMsV0FBVyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyw4QkFBOEIsR0FBRyxNQUFNLENBQUMsY0FBYyxHQUFHLGFBQWE7WUFDL0YsV0FBVyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyx1Q0FBdUMsR0FBRyxNQUFNLENBQUMsY0FBYyxHQUFHLGFBQWE7WUFDeEcsU0FBUyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxtQkFBbUI7WUFDMUMsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyx3QkFBd0I7WUFDN0MsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxvQkFBb0I7U0FDekMsQ0FBQztRQUVNLGFBQVEsR0FBUSxFQUFFLENBQUM7SUFvQzdCLENBQUM7Ozs7O0lBM0JDLFFBQVE7O1lBQ0YsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTtRQUNqQyxJQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7O2dCQUNoQixNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztpQkFDMUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2pGLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQzs7Ozs7Ozs7O0lBSU8sVUFBVSxDQUFDLElBQVksRUFBRSxNQUFXLEVBQUUsT0FBWTs7WUFDcEQsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO1FBQ3hDLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pFLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFBOztZQUVoRCxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLE9BQU87UUFDOUUsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzdELENBQUM7Ozs7OztJQUtELGNBQWMsQ0FBQyxPQUF3Qjs7Y0FDL0IsU0FBUyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUTtRQUN6QyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQztJQUNsRixDQUFDOzs7WUF2REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLDhCQUFnRDs7YUFFakQ7Ozt1QkFlRSxLQUFLO3NCQUtMLEtBQUs7Ozs7Ozs7O0lBZk4sbURBU0U7Ozs7O0lBQ0YsNENBQzJCOzs7Ozs7SUFJM0IsMkNBQzREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUsIEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8qKlxuICogQ29tcG9uZW50ZSBwYXJhIG1vc3RyYXIgbWVuc2FqZXMgZGUgZXJyb3IgZW4gbG9zIGlucHV0c1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmdC1pbnZhbGlkLWZlZWRiYWNrJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ludmFsaWQtZmVlZGJhY2suY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbnZhbGlkLWZlZWRiYWNrLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSW52YWxpZEZlZWRiYWNrQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIENhdMOhbG9nbyBkZSBtZW5zYWplcyBzZWfDum4gZWwgdGlwbyBkZSBlcnJvclxuICAgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBkZWZhdWx0TWVzc2FnZXMgPSB7XG4gICAgJ3JlcXVpcmVkJzogKHBhcmFtcykgPT4gJ0lzIHJlcXVpcmVkJyxcbiAgICAnbWluJzogKHBhcmFtcykgPT4gJ1Nob3VsZCBiZSBhIHZhbGlkJyxcbiAgICAnbWF4JzogKHBhcmFtcykgPT4gJ1Nob3VsZCBiZSBhIHZhbGlkJyxcbiAgICAnbWlubGVuZ3RoJzogKHBhcmFtcykgPT4gJyMjRklFTEQjIyBzaG91bGQgYmUgbWluaW11bSAnICsgcGFyYW1zLnJlcXVpcmVkTGVuZ3RoICsgJyBjaGFyYWN0ZXJzJyxcbiAgICAnbWF4bGVuZ3RoJzogKHBhcmFtcykgPT4gJyMjRklFTEQjIyBzaG91bGQgbm90IGJlIGdyZWF0ZXIgdGhlbiAnICsgcGFyYW1zLnJlcXVpcmVkTGVuZ3RoICsgJyBjaGFyYWN0ZXJzJyxcbiAgICAncGF0dGVybic6IChwYXJhbXMpID0+ICdTaG91bGQgYmUgYSB2YWxpZCcsXG4gICAgJ2VtYWlsJzogKHBhcmFtcykgPT4gXCJTaG91bGQgYmUgdmFsaWQgZW1haWwuXCIsXG4gICAgJ2ZpbGUnOiAocGFyYW1zKSA9PiAnRmlsZSBtdXN0IGJlIHZhbGlkJ1xuICB9O1xuICBASW5wdXQoKVxuICBwcml2YXRlIG1lc3NhZ2VzOiBhbnkgPSB7fTtcbiAgLyoqXG4gICAqIEVsIGlucHV0IHBhcmEgbW9zdHJhciBlbCBtZW5zYWplXG4gICAqL1xuICBASW5wdXQoKVxuICBwcml2YXRlIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZSB8IEFic3RyYWN0Q29udHJvbDtcbiAgLyoqXG4gICAqIE3DqXRvcm8gcXVlIGRldnVlbHZlIGVsIGVycm9yIHNlZ8O6biBjb3JyZXNwb25kYVxuICAgKi9cbiAgZ2V0RXJyb3IoKTogc3RyaW5nIHtcbiAgICBsZXQgb2JqZWN0cyA9IHRoaXMuY29udHJvbC5lcnJvcnM7XG4gICAgaWYgKG9iamVjdHMgIT09IG51bGwpIHtcbiAgICAgIHZhciBlcnJvcnMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbnRyb2wuZXJyb3JzKVxuICAgICAgICAubWFwKGZpZWxkID0+IHRoaXMuZ2V0TWVzc2FnZShmaWVsZCwgdGhpcy5jb250cm9sLmVycm9yc1tmaWVsZF0sIHRoaXMuY29udHJvbCkpO1xuICAgICAgcmV0dXJuIGVycm9yc1swXTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIE3DqXRvZG8gcXVlIG9idGllbmUgZWwgbWVuc2FqZSBkZSBlcnJvclxuICAgKi9cbiAgcHJpdmF0ZSBnZXRNZXNzYWdlKHR5cGU6IHN0cmluZywgcGFyYW1zOiBhbnksIGNvbnRyb2w6IGFueSkge1xuICAgIHZhciBmbmFtZSA9IHRoaXMuZ2V0Q29udHJvbE5hbWUoY29udHJvbCk7XG4gICAgZm5hbWUgPSBmbmFtZS5yZXBsYWNlKFwiX1wiLCBcIiBcIikucmVwbGFjZShcIiBpZFwiLCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuICAgIGZuYW1lID0gZm5hbWUucmVwbGFjZSgvXFxiXFx3L2csIGwgPT4gbC50b1VwcGVyQ2FzZSgpKVxuXG4gICAgdmFyIG1zZyA9IHRoaXMubWVzc2FnZXNbdHlwZV0gfHwgdGhpcy5kZWZhdWx0TWVzc2FnZXNbdHlwZV0ocGFyYW1zKSB8fCAnRXJyb3InO1xuICAgIHJldHVybiBjb250cm9sLmRpcnR5PyBtc2cucmVwbGFjZShcIiMjRklFTEQjI1wiLCBmbmFtZSkgOiAnJztcbiAgfVxuICAvKipcbiAgICogT2J0aWVuZSBlbCBuYW1lIGRlbCBjb250cm9sIChpbnB1dClcbiAgICogQHBhcmFtIGNvbnRyb2wgQWJzdHJhY3RDb250cm9sIGVzIGVsIGNvbnRyb2wgY29uIHN1cyBwcm9waWVkYWRlc1xuICAgKi9cbiAgZ2V0Q29udHJvbE5hbWUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgY29uc3QgZm9ybUdyb3VwID0gY29udHJvbC5wYXJlbnQuY29udHJvbHM7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGZvcm1Hcm91cCkuZmluZChuYW1lID0+IGNvbnRyb2wgPT09IGZvcm1Hcm91cFtuYW1lXSkgfHwgbnVsbDtcbiAgfVxufVxuIl19