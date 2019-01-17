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
        if (!this.collection) {
            if (this.configuration.icon && this.configuration.icon.collection) {
                this.collection = this.configuration.icon.collection;
            }
            else {
                this.collection = 'icons';
            }
        }
    };
    IconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ft-icon',
                    template: "<svg><use attr.xlink:href=\"assets/{{ this.collection }}.svg#{{ name }}\" /></svg>\n",
                    styles: [":host{line-height:0;display:inline-block}svg{width:1em;height:1em;vertical-align:middle;fill:currentColor}"]
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
    /**
     * @type {?}
     * @private
     */
    IconComponent.prototype.configuration;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mYWN0b3ItY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2ljb24vaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRTtJQVdFLHVCQUMrQyxhQUFhO1FBQWIsa0JBQWEsR0FBYixhQUFhLENBQUE7SUFDeEQsQ0FBQzs7OztJQUVMLGdDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNqRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUN0RDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQzthQUMzQjtTQUNGO0lBQ0gsQ0FBQzs7Z0JBdkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsZ0dBQW9DOztpQkFFckM7Ozs7Z0RBUUksTUFBTSxTQUFDLDJCQUEyQjs7O3VCQU5wQyxLQUFLOzZCQUVMLEtBQUs7O0lBZ0JSLG9CQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0FuQlksYUFBYTs7O0lBQ3hCLDZCQUNhOztJQUNiLG1DQUNtQjs7Ozs7SUFHakIsc0NBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZnQtaWNvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9pY29uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaWNvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGNvbGxlY3Rpb246IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KCdGYWN0b3JDb21tb25Db25maWd1cmF0aW9uJykgcHJpdmF0ZSBjb25maWd1cmF0aW9uXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmNvbGxlY3Rpb24pIHtcbiAgICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24uaWNvbiAmJiB0aGlzLmNvbmZpZ3VyYXRpb24uaWNvbi5jb2xsZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbiA9IHRoaXMuY29uZmlndXJhdGlvbi5pY29uLmNvbGxlY3Rpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb24gPSAnaWNvbnMnO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19