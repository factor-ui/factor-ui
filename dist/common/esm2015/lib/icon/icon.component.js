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
        if (this.collection) {
            this.libraryUrl = `assets/${this.collection}.svg`;
        }
        else if (this.configuration.icon && this.configuration.icon.collection) {
            this.libraryUrl = `assets/${this.configuration.icon.collection}.svg`;
        }
        else {
            this.libraryUrl = 'assets/icons.svg';
        }
    }
}
IconComponent.decorators = [
    { type: Component, args: [{
                selector: 'ft-icon',
                template: "<svg><use attr.xlink:href=\"{{ libraryUrl }}#{{ name }}\" /></svg>\n",
                styles: [":host{line-height:0;display:inline-block}svg{width:1em;height:1em;vertical-align:middle;fill:none}"]
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
    /** @type {?} */
    IconComponent.prototype.libraryUrl;
    /**
     * @type {?}
     * @private
     */
    IconComponent.prototype.configuration;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mYWN0b3ItY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2ljb24vaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU9qRSxNQUFNLE9BQU8sYUFBYTs7OztJQU94QixZQUMrQyxhQUFhO1FBQWIsa0JBQWEsR0FBYixhQUFhLENBQUE7SUFDeEQsQ0FBQzs7OztJQUVMLFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLElBQUksQ0FBQyxVQUFVLE1BQU0sQ0FBQztTQUNuRDthQUFNLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3hFLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLE1BQU0sQ0FBQztTQUN0RTthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxrQkFBa0IsQ0FBQztTQUN0QztJQUNILENBQUM7OztZQXhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLGdGQUFvQzs7YUFFckM7Ozs7NENBU0ksTUFBTSxTQUFDLDJCQUEyQjs7O21CQVBwQyxLQUFLO3lCQUVMLEtBQUs7Ozs7SUFGTiw2QkFDYTs7SUFDYixtQ0FDbUI7O0lBQ25CLG1DQUFtQjs7Ozs7SUFHakIsc0NBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZnQtaWNvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9pY29uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaWNvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGNvbGxlY3Rpb246IHN0cmluZztcbiAgbGlicmFyeVVybDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoJ0ZhY3RvckNvbW1vbkNvbmZpZ3VyYXRpb24nKSBwcml2YXRlIGNvbmZpZ3VyYXRpb25cbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5jb2xsZWN0aW9uKSB7XG4gICAgICB0aGlzLmxpYnJhcnlVcmwgPSBgYXNzZXRzLyR7dGhpcy5jb2xsZWN0aW9ufS5zdmdgO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb25maWd1cmF0aW9uLmljb24gJiYgdGhpcy5jb25maWd1cmF0aW9uLmljb24uY29sbGVjdGlvbikge1xuICAgICAgdGhpcy5saWJyYXJ5VXJsID0gYGFzc2V0cy8ke3RoaXMuY29uZmlndXJhdGlvbi5pY29uLmNvbGxlY3Rpb259LnN2Z2A7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGlicmFyeVVybCA9ICdhc3NldHMvaWNvbnMuc3ZnJztcbiAgICB9XG4gIH1cbn1cbiJdfQ==