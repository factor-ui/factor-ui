/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { IconComponent } from './icon/icon.component';
import { ImageComponent } from './image/image.component';
import { ObserveIntersectingDirective } from './observe-intersecting.directive';
import { ProgressComponent } from './progress/progress.component';
var CommonModule = /** @class */ (function () {
    function CommonModule() {
    }
    /**
     * @param {?=} configuration
     * @return {?}
     */
    CommonModule.forRoot = /**
     * @param {?=} configuration
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
                        AvatarComponent,
                        IconComponent,
                        ImageComponent,
                        ObserveIntersectingDirective,
                        ProgressComponent
                    ],
                    imports: [
                        AngularCommonModule
                    ],
                    exports: [
                        AvatarComponent,
                        IconComponent,
                        ImageComponent,
                        ObserveIntersectingDirective,
                        ProgressComponent
                    ]
                },] }
    ];
    return CommonModule;
}());
export { CommonModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZhY3Rvci1jb21tb24vIiwic291cmNlcyI6WyJsaWIvY29tbW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksSUFBSSxtQkFBbUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXRFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRWxFO0lBQUE7SUE0QkEsQ0FBQzs7Ozs7SUFSZSxvQkFBTzs7OztJQUFyQixVQUFzQixhQUFtQjtRQUN2QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUU7YUFDbEU7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBM0JGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osZUFBZTt3QkFDZixhQUFhO3dCQUNiLGNBQWM7d0JBQ2QsNEJBQTRCO3dCQUM1QixpQkFBaUI7cUJBQ2xCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxtQkFBbUI7cUJBQ3BCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsY0FBYzt3QkFDZCw0QkFBNEI7d0JBQzVCLGlCQUFpQjtxQkFDbEI7aUJBQ0Y7O0lBVUQsbUJBQUM7Q0FBQSxBQTVCRCxJQTRCQztTQVRZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIGFzIEFuZ3VsYXJDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBBdmF0YXJDb21wb25lbnQgfSBmcm9tICcuL2F2YXRhci9hdmF0YXIuY29tcG9uZW50JztcbmltcG9ydCB7IEljb25Db21wb25lbnQgfSBmcm9tICcuL2ljb24vaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW1hZ2VDb21wb25lbnQgfSBmcm9tICcuL2ltYWdlL2ltYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPYnNlcnZlSW50ZXJzZWN0aW5nRGlyZWN0aXZlIH0gZnJvbSAnLi9vYnNlcnZlLWludGVyc2VjdGluZy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUHJvZ3Jlc3NDb21wb25lbnQgfSBmcm9tICcuL3Byb2dyZXNzL3Byb2dyZXNzLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEF2YXRhckNvbXBvbmVudCxcbiAgICBJY29uQ29tcG9uZW50LFxuICAgIEltYWdlQ29tcG9uZW50LFxuICAgIE9ic2VydmVJbnRlcnNlY3RpbmdEaXJlY3RpdmUsXG4gICAgUHJvZ3Jlc3NDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIEFuZ3VsYXJDb21tb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEF2YXRhckNvbXBvbmVudCxcbiAgICBJY29uQ29tcG9uZW50LFxuICAgIEltYWdlQ29tcG9uZW50LFxuICAgIE9ic2VydmVJbnRlcnNlY3RpbmdEaXJlY3RpdmUsXG4gICAgUHJvZ3Jlc3NDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb21tb25Nb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlndXJhdGlvbj86IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29tbW9uTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogJ0ZhY3RvckNvbW1vbkNvbmZpZ3VyYXRpb24nLCB1c2VWYWx1ZTogY29uZmlndXJhdGlvbiB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19