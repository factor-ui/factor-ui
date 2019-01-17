/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject } from '@angular/core';
export class IconComponent {
    /**
     * @param {?} configuration
     */
    constructor(configuration) {
        this.configuration = configuration;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.collection) {
            if (this.configuration.icon && this.configuration.icon.collection) {
                this.collection = this.configuration.icon.collection;
            }
            else {
                this.collection = 'icons';
            }
        }
    }
}
IconComponent.decorators = [
    { type: Component, args: [{
                selector: 'ft-icon',
                template: "<svg><use attr.xlink:href=\"assets/{{ this.collection }}.svg#{{ name }}\" /></svg>\n",
                styles: [":host{line-height:0;display:inline-block}svg{width:1em;height:1em;vertical-align:middle;fill:currentColor}"]
            }] }
];
/** @nocollapse */
IconComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['FactorCommonConfiguration',] }] }
];
IconComponent.propDecorators = {
    name: [{ type: Input }],
    collection: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mYWN0b3ItY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2ljb24vaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU9qRSxNQUFNLE9BQU8sYUFBYTs7OztJQU14QixZQUMrQyxhQUFhO1FBQWIsa0JBQWEsR0FBYixhQUFhLENBQUE7SUFDeEQsQ0FBQzs7OztJQUVMLFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDakUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDdEQ7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7YUFDM0I7U0FDRjtJQUNILENBQUM7OztZQXZCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLGdHQUFvQzs7YUFFckM7Ozs7NENBUUksTUFBTSxTQUFDLDJCQUEyQjs7O21CQU5wQyxLQUFLO3lCQUVMLEtBQUs7Ozs7SUFGTiw2QkFDYTs7SUFDYixtQ0FDbUI7Ozs7O0lBR2pCLHNDQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Z0LWljb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vaWNvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ljb24uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBjb2xsZWN0aW9uOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdCgnRmFjdG9yQ29tbW9uQ29uZmlndXJhdGlvbicpIHByaXZhdGUgY29uZmlndXJhdGlvblxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5jb2xsZWN0aW9uKSB7XG4gICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLmljb24gJiYgdGhpcy5jb25maWd1cmF0aW9uLmljb24uY29sbGVjdGlvbikge1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb24gPSB0aGlzLmNvbmZpZ3VyYXRpb24uaWNvbi5jb2xsZWN0aW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uID0gJ2ljb25zJztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==