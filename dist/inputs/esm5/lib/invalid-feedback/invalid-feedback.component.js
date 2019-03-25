/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            'required': (/**
             * @param {?} params
             * @return {?}
             */
            function (params) { return 'Is required'; }),
            'min': (/**
             * @param {?} params
             * @return {?}
             */
            function (params) { return 'Should be a valid'; }),
            'max': (/**
             * @param {?} params
             * @return {?}
             */
            function (params) { return 'Should be a valid'; }),
            'minlength': (/**
             * @param {?} params
             * @return {?}
             */
            function (params) { return '##FIELD## should be minimum ' + params.requiredLength + ' characters'; }),
            'maxlength': (/**
             * @param {?} params
             * @return {?}
             */
            function (params) { return '##FIELD## should not be greater then ' + params.requiredLength + ' characters'; }),
            'pattern': (/**
             * @param {?} params
             * @return {?}
             */
            function (params) { return 'Should be a valid'; }),
            'email': (/**
             * @param {?} params
             * @return {?}
             */
            function (params) { return "Should be valid email."; }),
            'file': (/**
             * @param {?} params
             * @return {?}
             */
            function (params) { return 'File must be valid'; })
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
                .map((/**
             * @param {?} field
             * @return {?}
             */
            function (field) { return _this.getMessage(field, _this.control.errors[field], _this.control); }));
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
        fname = fname.replace(/\b\w/g, (/**
         * @param {?} l
         * @return {?}
         */
        function (l) { return l.toUpperCase(); }));
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
        return Object.keys(formGroup).find((/**
         * @param {?} name
         * @return {?}
         */
        function (name) { return control === formGroup[name]; })) || null;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52YWxpZC1mZWVkYmFjay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mYWN0b3ItaW5wdXRzLyIsInNvdXJjZXMiOlsibGliL2ludmFsaWQtZmVlZGJhY2svaW52YWxpZC1mZWVkYmFjay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBTWpEO0lBQUE7Ozs7UUFTbUIsb0JBQWUsR0FBRztZQUNqQyxVQUFVOzs7O1lBQUUsVUFBQyxNQUFNLElBQUssT0FBQSxhQUFhLEVBQWIsQ0FBYSxDQUFBO1lBQ3JDLEtBQUs7Ozs7WUFBRSxVQUFDLE1BQU0sSUFBSyxPQUFBLG1CQUFtQixFQUFuQixDQUFtQixDQUFBO1lBQ3RDLEtBQUs7Ozs7WUFBRSxVQUFDLE1BQU0sSUFBSyxPQUFBLG1CQUFtQixFQUFuQixDQUFtQixDQUFBO1lBQ3RDLFdBQVc7Ozs7WUFBRSxVQUFDLE1BQU0sSUFBSyxPQUFBLDhCQUE4QixHQUFHLE1BQU0sQ0FBQyxjQUFjLEdBQUcsYUFBYSxFQUF0RSxDQUFzRSxDQUFBO1lBQy9GLFdBQVc7Ozs7WUFBRSxVQUFDLE1BQU0sSUFBSyxPQUFBLHVDQUF1QyxHQUFHLE1BQU0sQ0FBQyxjQUFjLEdBQUcsYUFBYSxFQUEvRSxDQUErRSxDQUFBO1lBQ3hHLFNBQVM7Ozs7WUFBRSxVQUFDLE1BQU0sSUFBSyxPQUFBLG1CQUFtQixFQUFuQixDQUFtQixDQUFBO1lBQzFDLE9BQU87Ozs7WUFBRSxVQUFDLE1BQU0sSUFBSyxPQUFBLHdCQUF3QixFQUF4QixDQUF3QixDQUFBO1lBQzdDLE1BQU07Ozs7WUFBRSxVQUFDLE1BQU0sSUFBSyxPQUFBLG9CQUFvQixFQUFwQixDQUFvQixDQUFBO1NBQ3pDLENBQUM7UUFFTSxhQUFRLEdBQVEsRUFBRSxDQUFDO0lBb0M3QixDQUFDO0lBOUJDOztPQUVHOzs7OztJQUNILDJDQUFROzs7O0lBQVI7UUFBQSxpQkFPQzs7WUFOSyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNO1FBQ2pDLElBQUksT0FBTyxLQUFLLElBQUksRUFBRTs7Z0JBQ2hCLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2lCQUMxQyxHQUFHOzs7O1lBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLEVBQWhFLENBQWdFLEVBQUM7WUFDakYsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEI7SUFDSCxDQUFDO0lBQ0Q7O09BRUc7Ozs7Ozs7OztJQUNLLDZDQUFVOzs7Ozs7OztJQUFsQixVQUFtQixJQUFZLEVBQUUsTUFBVyxFQUFFLE9BQVk7O1lBQ3BELEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztRQUN4QyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNqRSxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQWYsQ0FBZSxFQUFDLENBQUE7O1lBRWhELEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksT0FBTztRQUM5RSxPQUFPLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNoRixDQUFDO0lBQ0Q7OztPQUdHOzs7Ozs7SUFDSCxpREFBYzs7Ozs7SUFBZCxVQUFlLE9BQXdCOztZQUMvQixTQUFTLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRO1FBQ3pDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLEtBQUssU0FBUyxDQUFDLElBQUksQ0FBQyxFQUEzQixDQUEyQixFQUFDLElBQUksSUFBSSxDQUFDO0lBQ2xGLENBQUM7O2dCQXZERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsOEJBQWdEOztpQkFFakQ7OzsyQkFlRSxLQUFLOzBCQUtMLEtBQUs7O0lBZ0NSLCtCQUFDO0NBQUEsQUF4REQsSUF3REM7U0FuRFksd0JBQXdCOzs7Ozs7O0lBSW5DLG1EQVNFOzs7OztJQUNGLDRDQUMyQjs7Ozs7O0lBSTNCLDJDQUM0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vKipcbiAqIENvbXBvbmVudGUgcGFyYSBtb3N0cmFyIG1lbnNhamVzIGRlIGVycm9yIGVuIGxvcyBpbnB1dHNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZnQtaW52YWxpZC1mZWVkYmFjaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnZhbGlkLWZlZWRiYWNrLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW52YWxpZC1mZWVkYmFjay5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEludmFsaWRGZWVkYmFja0NvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBDYXTDoWxvZ28gZGUgbWVuc2FqZXMgc2Vnw7puIGVsIHRpcG8gZGUgZXJyb3JcbiAgICovXG4gIHByaXZhdGUgcmVhZG9ubHkgZGVmYXVsdE1lc3NhZ2VzID0ge1xuICAgICdyZXF1aXJlZCc6IChwYXJhbXMpID0+ICdJcyByZXF1aXJlZCcsXG4gICAgJ21pbic6IChwYXJhbXMpID0+ICdTaG91bGQgYmUgYSB2YWxpZCcsXG4gICAgJ21heCc6IChwYXJhbXMpID0+ICdTaG91bGQgYmUgYSB2YWxpZCcsXG4gICAgJ21pbmxlbmd0aCc6IChwYXJhbXMpID0+ICcjI0ZJRUxEIyMgc2hvdWxkIGJlIG1pbmltdW0gJyArIHBhcmFtcy5yZXF1aXJlZExlbmd0aCArICcgY2hhcmFjdGVycycsXG4gICAgJ21heGxlbmd0aCc6IChwYXJhbXMpID0+ICcjI0ZJRUxEIyMgc2hvdWxkIG5vdCBiZSBncmVhdGVyIHRoZW4gJyArIHBhcmFtcy5yZXF1aXJlZExlbmd0aCArICcgY2hhcmFjdGVycycsXG4gICAgJ3BhdHRlcm4nOiAocGFyYW1zKSA9PiAnU2hvdWxkIGJlIGEgdmFsaWQnLFxuICAgICdlbWFpbCc6IChwYXJhbXMpID0+IFwiU2hvdWxkIGJlIHZhbGlkIGVtYWlsLlwiLFxuICAgICdmaWxlJzogKHBhcmFtcykgPT4gJ0ZpbGUgbXVzdCBiZSB2YWxpZCdcbiAgfTtcbiAgQElucHV0KClcbiAgcHJpdmF0ZSBtZXNzYWdlczogYW55ID0ge307XG4gIC8qKlxuICAgKiBFbCBpbnB1dCBwYXJhIG1vc3RyYXIgZWwgbWVuc2FqZVxuICAgKi9cbiAgQElucHV0KClcbiAgcHJpdmF0ZSBjb250cm9sOiBBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUgfCBBYnN0cmFjdENvbnRyb2w7XG4gIC8qKlxuICAgKiBNw6l0b3JvIHF1ZSBkZXZ1ZWx2ZSBlbCBlcnJvciBzZWfDum4gY29ycmVzcG9uZGFcbiAgICovXG4gIGdldEVycm9yKCk6IHN0cmluZyB7XG4gICAgbGV0IG9iamVjdHMgPSB0aGlzLmNvbnRyb2wuZXJyb3JzO1xuICAgIGlmIChvYmplY3RzICE9PSBudWxsKSB7XG4gICAgICB2YXIgZXJyb3JzID0gT2JqZWN0LmtleXModGhpcy5jb250cm9sLmVycm9ycylcbiAgICAgICAgLm1hcChmaWVsZCA9PiB0aGlzLmdldE1lc3NhZ2UoZmllbGQsIHRoaXMuY29udHJvbC5lcnJvcnNbZmllbGRdLCB0aGlzLmNvbnRyb2wpKTtcbiAgICAgIHJldHVybiBlcnJvcnNbMF07XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBNw6l0b2RvIHF1ZSBvYnRpZW5lIGVsIG1lbnNhamUgZGUgZXJyb3JcbiAgICovXG4gIHByaXZhdGUgZ2V0TWVzc2FnZSh0eXBlOiBzdHJpbmcsIHBhcmFtczogYW55LCBjb250cm9sOiBhbnkpIHtcbiAgICB2YXIgZm5hbWUgPSB0aGlzLmdldENvbnRyb2xOYW1lKGNvbnRyb2wpO1xuICAgIGZuYW1lID0gZm5hbWUucmVwbGFjZShcIl9cIiwgXCIgXCIpLnJlcGxhY2UoXCIgaWRcIiwgXCJcIikudG9Mb3dlckNhc2UoKTtcbiAgICBmbmFtZSA9IGZuYW1lLnJlcGxhY2UoL1xcYlxcdy9nLCBsID0+IGwudG9VcHBlckNhc2UoKSlcblxuICAgIHZhciBtc2cgPSB0aGlzLm1lc3NhZ2VzW3R5cGVdIHx8IHRoaXMuZGVmYXVsdE1lc3NhZ2VzW3R5cGVdKHBhcmFtcykgfHwgJ0Vycm9yJztcbiAgICByZXR1cm4gY29udHJvbC5kaXJ0eSB8fCBjb250cm9sLnRvdWNoZWQ/IG1zZy5yZXBsYWNlKFwiIyNGSUVMRCMjXCIsIGZuYW1lKSA6ICcnO1xuICB9XG4gIC8qKlxuICAgKiBPYnRpZW5lIGVsIG5hbWUgZGVsIGNvbnRyb2wgKGlucHV0KVxuICAgKiBAcGFyYW0gY29udHJvbCBBYnN0cmFjdENvbnRyb2wgZXMgZWwgY29udHJvbCBjb24gc3VzIHByb3BpZWRhZGVzXG4gICAqL1xuICBnZXRDb250cm9sTmFtZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBzdHJpbmcgfCBudWxsIHtcbiAgICBjb25zdCBmb3JtR3JvdXAgPSBjb250cm9sLnBhcmVudC5jb250cm9scztcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZm9ybUdyb3VwKS5maW5kKG5hbWUgPT4gY29udHJvbCA9PT0gZm9ybUdyb3VwW25hbWVdKSB8fCBudWxsO1xuICB9XG59XG4iXX0=