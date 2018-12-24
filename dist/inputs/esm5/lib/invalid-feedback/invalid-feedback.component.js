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
        return control.dirty ? msg.replace("##FIELD##", fname) : '';
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
                    styles: [""]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52YWxpZC1mZWVkYmFjay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mYWN0b3ItaW5wdXRzLyIsInNvdXJjZXMiOlsibGliL2ludmFsaWQtZmVlZGJhY2svaW52YWxpZC1mZWVkYmFjay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBTWpEO0lBQUE7Ozs7UUFTbUIsb0JBQWUsR0FBRztZQUNqQyxVQUFVLEVBQUUsVUFBQyxNQUFNLElBQUssT0FBQSxhQUFhLEVBQWIsQ0FBYTtZQUNyQyxLQUFLLEVBQUUsVUFBQyxNQUFNLElBQUssT0FBQSxtQkFBbUIsRUFBbkIsQ0FBbUI7WUFDdEMsS0FBSyxFQUFFLFVBQUMsTUFBTSxJQUFLLE9BQUEsbUJBQW1CLEVBQW5CLENBQW1CO1lBQ3RDLFdBQVcsRUFBRSxVQUFDLE1BQU0sSUFBSyxPQUFBLDhCQUE4QixHQUFHLE1BQU0sQ0FBQyxjQUFjLEdBQUcsYUFBYSxFQUF0RSxDQUFzRTtZQUMvRixXQUFXLEVBQUUsVUFBQyxNQUFNLElBQUssT0FBQSx1Q0FBdUMsR0FBRyxNQUFNLENBQUMsY0FBYyxHQUFHLGFBQWEsRUFBL0UsQ0FBK0U7WUFDeEcsU0FBUyxFQUFFLFVBQUMsTUFBTSxJQUFLLE9BQUEsbUJBQW1CLEVBQW5CLENBQW1CO1lBQzFDLE9BQU8sRUFBRSxVQUFDLE1BQU0sSUFBSyxPQUFBLHdCQUF3QixFQUF4QixDQUF3QjtZQUM3QyxNQUFNLEVBQUUsVUFBQyxNQUFNLElBQUssT0FBQSxvQkFBb0IsRUFBcEIsQ0FBb0I7U0FDekMsQ0FBQztRQUVNLGFBQVEsR0FBUSxFQUFFLENBQUM7SUFvQzdCLENBQUM7SUE5QkM7O09BRUc7Ozs7O0lBQ0gsMkNBQVE7Ozs7SUFBUjtRQUFBLGlCQU9DOztZQU5LLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07UUFDakMsSUFBSSxPQUFPLEtBQUssSUFBSSxFQUFFOztnQkFDaEIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7aUJBQzFDLEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBaEUsQ0FBZ0UsQ0FBQztZQUNqRixPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsQjtJQUNILENBQUM7SUFDRDs7T0FFRzs7Ozs7Ozs7O0lBQ0ssNkNBQVU7Ozs7Ozs7O0lBQWxCLFVBQW1CLElBQVksRUFBRSxNQUFXLEVBQUUsT0FBWTs7WUFDcEQsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO1FBQ3hDLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pFLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQTs7WUFFaEQsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxPQUFPO1FBQzlFLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM3RCxDQUFDO0lBQ0Q7OztPQUdHOzs7Ozs7SUFDSCxpREFBYzs7Ozs7SUFBZCxVQUFlLE9BQXdCOztZQUMvQixTQUFTLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRO1FBQ3pDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLEtBQUssU0FBUyxDQUFDLElBQUksQ0FBQyxFQUEzQixDQUEyQixDQUFDLElBQUksSUFBSSxDQUFDO0lBQ2xGLENBQUM7O2dCQXZERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsOEJBQWdEOztpQkFFakQ7OzsyQkFlRSxLQUFLOzBCQUtMLEtBQUs7O0lBZ0NSLCtCQUFDO0NBQUEsQUF4REQsSUF3REM7U0FuRFksd0JBQXdCOzs7Ozs7O0lBSW5DLG1EQVNFOzs7OztJQUNGLDRDQUMyQjs7Ozs7O0lBSTNCLDJDQUM0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vKipcbiAqIENvbXBvbmVudGUgcGFyYSBtb3N0cmFyIG1lbnNhamVzIGRlIGVycm9yIGVuIGxvcyBpbnB1dHNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZnQtaW52YWxpZC1mZWVkYmFjaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnZhbGlkLWZlZWRiYWNrLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW52YWxpZC1mZWVkYmFjay5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEludmFsaWRGZWVkYmFja0NvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBDYXTDoWxvZ28gZGUgbWVuc2FqZXMgc2Vnw7puIGVsIHRpcG8gZGUgZXJyb3JcbiAgICovXG4gIHByaXZhdGUgcmVhZG9ubHkgZGVmYXVsdE1lc3NhZ2VzID0ge1xuICAgICdyZXF1aXJlZCc6IChwYXJhbXMpID0+ICdJcyByZXF1aXJlZCcsXG4gICAgJ21pbic6IChwYXJhbXMpID0+ICdTaG91bGQgYmUgYSB2YWxpZCcsXG4gICAgJ21heCc6IChwYXJhbXMpID0+ICdTaG91bGQgYmUgYSB2YWxpZCcsXG4gICAgJ21pbmxlbmd0aCc6IChwYXJhbXMpID0+ICcjI0ZJRUxEIyMgc2hvdWxkIGJlIG1pbmltdW0gJyArIHBhcmFtcy5yZXF1aXJlZExlbmd0aCArICcgY2hhcmFjdGVycycsXG4gICAgJ21heGxlbmd0aCc6IChwYXJhbXMpID0+ICcjI0ZJRUxEIyMgc2hvdWxkIG5vdCBiZSBncmVhdGVyIHRoZW4gJyArIHBhcmFtcy5yZXF1aXJlZExlbmd0aCArICcgY2hhcmFjdGVycycsXG4gICAgJ3BhdHRlcm4nOiAocGFyYW1zKSA9PiAnU2hvdWxkIGJlIGEgdmFsaWQnLFxuICAgICdlbWFpbCc6IChwYXJhbXMpID0+IFwiU2hvdWxkIGJlIHZhbGlkIGVtYWlsLlwiLFxuICAgICdmaWxlJzogKHBhcmFtcykgPT4gJ0ZpbGUgbXVzdCBiZSB2YWxpZCdcbiAgfTtcbiAgQElucHV0KClcbiAgcHJpdmF0ZSBtZXNzYWdlczogYW55ID0ge307XG4gIC8qKlxuICAgKiBFbCBpbnB1dCBwYXJhIG1vc3RyYXIgZWwgbWVuc2FqZVxuICAgKi9cbiAgQElucHV0KClcbiAgcHJpdmF0ZSBjb250cm9sOiBBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUgfCBBYnN0cmFjdENvbnRyb2w7XG4gIC8qKlxuICAgKiBNw6l0b3JvIHF1ZSBkZXZ1ZWx2ZSBlbCBlcnJvciBzZWfDum4gY29ycmVzcG9uZGFcbiAgICovXG4gIGdldEVycm9yKCk6IHN0cmluZyB7XG4gICAgbGV0IG9iamVjdHMgPSB0aGlzLmNvbnRyb2wuZXJyb3JzO1xuICAgIGlmIChvYmplY3RzICE9PSBudWxsKSB7XG4gICAgICB2YXIgZXJyb3JzID0gT2JqZWN0LmtleXModGhpcy5jb250cm9sLmVycm9ycylcbiAgICAgICAgLm1hcChmaWVsZCA9PiB0aGlzLmdldE1lc3NhZ2UoZmllbGQsIHRoaXMuY29udHJvbC5lcnJvcnNbZmllbGRdLCB0aGlzLmNvbnRyb2wpKTtcbiAgICAgIHJldHVybiBlcnJvcnNbMF07XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBNw6l0b2RvIHF1ZSBvYnRpZW5lIGVsIG1lbnNhamUgZGUgZXJyb3JcbiAgICovXG4gIHByaXZhdGUgZ2V0TWVzc2FnZSh0eXBlOiBzdHJpbmcsIHBhcmFtczogYW55LCBjb250cm9sOiBhbnkpIHtcbiAgICB2YXIgZm5hbWUgPSB0aGlzLmdldENvbnRyb2xOYW1lKGNvbnRyb2wpO1xuICAgIGZuYW1lID0gZm5hbWUucmVwbGFjZShcIl9cIiwgXCIgXCIpLnJlcGxhY2UoXCIgaWRcIiwgXCJcIikudG9Mb3dlckNhc2UoKTtcbiAgICBmbmFtZSA9IGZuYW1lLnJlcGxhY2UoL1xcYlxcdy9nLCBsID0+IGwudG9VcHBlckNhc2UoKSlcblxuICAgIHZhciBtc2cgPSB0aGlzLm1lc3NhZ2VzW3R5cGVdIHx8IHRoaXMuZGVmYXVsdE1lc3NhZ2VzW3R5cGVdKHBhcmFtcykgfHwgJ0Vycm9yJztcbiAgICByZXR1cm4gY29udHJvbC5kaXJ0eT8gbXNnLnJlcGxhY2UoXCIjI0ZJRUxEIyNcIiwgZm5hbWUpIDogJyc7XG4gIH1cbiAgLyoqXG4gICAqIE9idGllbmUgZWwgbmFtZSBkZWwgY29udHJvbCAoaW5wdXQpXG4gICAqIEBwYXJhbSBjb250cm9sIEFic3RyYWN0Q29udHJvbCBlcyBlbCBjb250cm9sIGNvbiBzdXMgcHJvcGllZGFkZXNcbiAgICovXG4gIGdldENvbnRyb2xOYW1lKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHN0cmluZyB8IG51bGwge1xuICAgIGNvbnN0IGZvcm1Hcm91cCA9IGNvbnRyb2wucGFyZW50LmNvbnRyb2xzO1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhmb3JtR3JvdXApLmZpbmQobmFtZSA9PiBjb250cm9sID09PSBmb3JtR3JvdXBbbmFtZV0pIHx8IG51bGw7XG4gIH1cbn1cbiJdfQ==