/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';
import { ImageComponent } from './image/image.component';
import { RippleDirective } from './ripple.directive';
import { ProgressComponent } from './progress/progress.component';
var CommonModule = /** @class */ (function () {
    function CommonModule() {
    }
    /**
     * @param {?} configuration
     * @return {?}
     */
    CommonModule.forRoot = /**
     * @param {?} configuration
     * @return {?}
     */
    function (configuration) {
        return {
            ngModule: CommonModule,
            providers: [
                { provide: 'FactorCommonConfiguration', useValue: configuration }
            ]
        };
    };
    CommonModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        IconComponent,
                        ImageComponent,
                        RippleDirective,
                        ProgressComponent
                    ],
                    imports: [
                        AngularCommonModule
                    ],
                    exports: [
                        IconComponent,
                        ImageComponent,
                        RippleDirective,
                        ProgressComponent
                    ]
                },] }
    ];
    return CommonModule;
}());
export { CommonModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZhY3Rvci1jb21tb24vIiwic291cmNlcyI6WyJsaWIvY29tbW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksSUFBSSxtQkFBbUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRWxFO0lBQUE7SUEwQkEsQ0FBQzs7Ozs7SUFSZSxvQkFBTzs7OztJQUFyQixVQUFzQixhQUFrQjtRQUN0QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUU7YUFDbEU7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBekJGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osYUFBYTt3QkFDYixjQUFjO3dCQUNkLGVBQWU7d0JBQ2YsaUJBQWlCO3FCQUNsQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsbUJBQW1CO3FCQUNwQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsYUFBYTt3QkFDYixjQUFjO3dCQUNkLGVBQWU7d0JBQ2YsaUJBQWlCO3FCQUNsQjtpQkFDRjs7SUFVRCxtQkFBQztDQUFBLEFBMUJELElBMEJDO1NBVFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgYXMgQW5ndWxhckNvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9pY29uL2ljb24uY29tcG9uZW50JztcbmltcG9ydCB7IEltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9pbWFnZS9pbWFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmlwcGxlRGlyZWN0aXZlIH0gZnJvbSAnLi9yaXBwbGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IFByb2dyZXNzQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9ncmVzcy9wcm9ncmVzcy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBJY29uQ29tcG9uZW50LFxuICAgIEltYWdlQ29tcG9uZW50LFxuICAgIFJpcHBsZURpcmVjdGl2ZSxcbiAgICBQcm9ncmVzc0NvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQW5ndWxhckNvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgSWNvbkNvbXBvbmVudCxcbiAgICBJbWFnZUNvbXBvbmVudCxcbiAgICBSaXBwbGVEaXJlY3RpdmUsXG4gICAgUHJvZ3Jlc3NDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb21tb25Nb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlndXJhdGlvbjogYW55KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDb21tb25Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiAnRmFjdG9yQ29tbW9uQ29uZmlndXJhdGlvbicsIHVzZVZhbHVlOiBjb25maWd1cmF0aW9uIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=