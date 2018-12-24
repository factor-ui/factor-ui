/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject } from '@angular/core';
var IconComponent = /** @class */ (function () {
    function IconComponent(configuration) {
        this.configuration = configuration;
    }
    /**
     * @return {?}
     */
    IconComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.collection) {
            this.libraryUrl = "assets/" + this.collection + ".svg";
        }
        else if (this.configuration.icon && this.configuration.icon.collection) {
            this.libraryUrl = "assets/" + this.configuration.icon.collection + ".svg";
        }
        else {
            this.libraryUrl = 'assets/icons.svg';
        }
    };
    IconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ft-icon',
                    template: "<svg><use attr.xlink:href=\"{{ libraryUrl }}#{{ name }}\" /></svg>\n",
                    styles: [":host{line-height:0;display:inline-block}svg{width:1em;height:1em;vertical-align:middle;fill:none}"]
                }] }
    ];
    /** @nocollapse */
    IconComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['FactorCommonConfiguration',] }] }
    ]; };
    IconComponent.propDecorators = {
        name: [{ type: Input }],
        collection: [{ type: Input }]
    };
    return IconComponent;
}());
export { IconComponent };
if (false) {
    /** @type {?} */
    IconComponent.prototype.name;
    /** @type {?} */
    IconComponent.prototype.collection;
    /** @type {?} */
    IconComponent.prototype.libraryUrl;
    /**
     * @type {?}
     * @private
     */
    IconComponent.prototype.configuration;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mYWN0b3ItY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2ljb24vaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRTtJQVlFLHVCQUMrQyxhQUFhO1FBQWIsa0JBQWEsR0FBYixhQUFhLENBQUE7SUFDeEQsQ0FBQzs7OztJQUVMLGdDQUFROzs7SUFBUjtRQUNFLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLFlBQVUsSUFBSSxDQUFDLFVBQVUsU0FBTSxDQUFDO1NBQ25EO2FBQU0sSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDeEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxZQUFVLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsU0FBTSxDQUFDO1NBQ3RFO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxHQUFHLGtCQUFrQixDQUFDO1NBQ3RDO0lBQ0gsQ0FBQzs7Z0JBeEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsZ0ZBQW9DOztpQkFFckM7Ozs7Z0RBU0ksTUFBTSxTQUFDLDJCQUEyQjs7O3VCQVBwQyxLQUFLOzZCQUVMLEtBQUs7O0lBaUJSLG9CQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0FwQlksYUFBYTs7O0lBQ3hCLDZCQUNhOztJQUNiLG1DQUNtQjs7SUFDbkIsbUNBQW1COzs7OztJQUdqQixzQ0FBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmdC1pY29uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ljb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pY29uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIG5hbWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgY29sbGVjdGlvbjogc3RyaW5nO1xuICBsaWJyYXJ5VXJsOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdCgnRmFjdG9yQ29tbW9uQ29uZmlndXJhdGlvbicpIHByaXZhdGUgY29uZmlndXJhdGlvblxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmNvbGxlY3Rpb24pIHtcbiAgICAgIHRoaXMubGlicmFyeVVybCA9IGBhc3NldHMvJHt0aGlzLmNvbGxlY3Rpb259LnN2Z2A7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24uaWNvbiAmJiB0aGlzLmNvbmZpZ3VyYXRpb24uaWNvbi5jb2xsZWN0aW9uKSB7XG4gICAgICB0aGlzLmxpYnJhcnlVcmwgPSBgYXNzZXRzLyR7dGhpcy5jb25maWd1cmF0aW9uLmljb24uY29sbGVjdGlvbn0uc3ZnYDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5saWJyYXJ5VXJsID0gJ2Fzc2V0cy9pY29ucy5zdmcnO1xuICAgIH1cbiAgfVxufVxuIl19