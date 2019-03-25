/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        if (!this.collection) {
            if (this.configuration.icon && this.configuration.icon.collection) {
                this.collection = this.configuration.icon.collection;
            }
            else {
                this.collection = 'icons';
            }
        }
        if (!this.path) {
            if (this.configuration.icon && this.configuration.icon.path) {
                this.path = this.configuration.icon.path;
            }
            else {
                this.path = 'assets';
            }
        }
    };
    IconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ft-icon',
                    template: " <svg><use attr.xlink:href=\"{{ this.path }}/{{ this.collection }}.svg#{{ name }}\" attr.href=\"{{ this.path }}/{{ this.collection }}.svg#{{ name }}\" /></svg>\n",
                    styles: [":host{line-height:0;display:inline-block}:host[size=\"1\"]{font-size:1rem}:host[size=\"2\"]{font-size:1.5rem}:host[size=\"3\"]{font-size:2rem}:host[size=\"4\"]{font-size:3rem}:host[size=\"5\"]{font-size:4.5rem}:host[size=\"6\"]{font-size:8rem}:host[size=\"7\"]{font-size:16rem}:host[size=\"8\"]{font-size:32rem}svg{width:1em;height:1em;vertical-align:middle;fill:currentColor}"]
                }] }
    ];
    /** @nocollapse */
    IconComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['FactorCommonConfiguration',] }] }
    ]; };
    IconComponent.propDecorators = {
        name: [{ type: Input }],
        collection: [{ type: Input }],
        path: [{ type: Input }]
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
    IconComponent.prototype.path;
    /**
     * @type {?}
     * @private
     */
    IconComponent.prototype.configuration;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mYWN0b3ItY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2ljb24vaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRTtJQWFFLHVCQUMrQyxhQUFhO1FBQWIsa0JBQWEsR0FBYixhQUFhLENBQUE7SUFDeEQsQ0FBQzs7OztJQUVMLGdDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNqRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUN0RDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQzthQUMzQjtTQUNGO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDM0QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDMUM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7YUFDdEI7U0FDRjtJQUNILENBQUM7O2dCQWhDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLDZLQUFvQzs7aUJBRXJDOzs7O2dEQVVJLE1BQU0sU0FBQywyQkFBMkI7Ozt1QkFScEMsS0FBSzs2QkFFTCxLQUFLO3VCQUVMLEtBQUs7O0lBdUJSLG9CQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7U0E1QlksYUFBYTs7O0lBQ3hCLDZCQUNhOztJQUNiLG1DQUNtQjs7SUFDbkIsNkJBQ2E7Ozs7O0lBR1gsc0NBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZnQtaWNvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9pY29uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaWNvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGNvbGxlY3Rpb246IHN0cmluZztcbiAgQElucHV0KClcbiAgcGF0aDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoJ0ZhY3RvckNvbW1vbkNvbmZpZ3VyYXRpb24nKSBwcml2YXRlIGNvbmZpZ3VyYXRpb25cbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuY29sbGVjdGlvbikge1xuICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi5pY29uICYmIHRoaXMuY29uZmlndXJhdGlvbi5pY29uLmNvbGxlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uID0gdGhpcy5jb25maWd1cmF0aW9uLmljb24uY29sbGVjdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbiA9ICdpY29ucyc7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghdGhpcy5wYXRoKSB7XG4gICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLmljb24gJiYgdGhpcy5jb25maWd1cmF0aW9uLmljb24ucGF0aCkge1xuICAgICAgICB0aGlzLnBhdGggPSB0aGlzLmNvbmZpZ3VyYXRpb24uaWNvbi5wYXRoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wYXRoID0gJ2Fzc2V0cyc7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=