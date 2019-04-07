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
import { ObserveIntersectingDirective } from './observe-intersecting.directive';
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
                        ProgressComponent,
                        ObserveIntersectingDirective
                    ],
                    imports: [
                        AngularCommonModule
                    ],
                    exports: [
                        IconComponent,
                        ImageComponent,
                        RippleDirective,
                        ProgressComponent,
                        ObserveIntersectingDirective
                    ]
                },] }
    ];
    return CommonModule;
}());
export { CommonModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZhY3Rvci1jb21tb24vIiwic291cmNlcyI6WyJsaWIvY29tbW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksSUFBSSxtQkFBbUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRWhGO0lBQUE7SUE0QkEsQ0FBQzs7Ozs7SUFSZSxvQkFBTzs7OztJQUFyQixVQUFzQixhQUFrQjtRQUN0QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUU7YUFDbEU7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBM0JGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osYUFBYTt3QkFDYixjQUFjO3dCQUNkLGVBQWU7d0JBQ2YsaUJBQWlCO3dCQUNqQiw0QkFBNEI7cUJBQzdCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxtQkFBbUI7cUJBQ3BCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxhQUFhO3dCQUNiLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixpQkFBaUI7d0JBQ2pCLDRCQUE0QjtxQkFDN0I7aUJBQ0Y7O0lBVUQsbUJBQUM7Q0FBQSxBQTVCRCxJQTRCQztTQVRZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIGFzIEFuZ3VsYXJDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSWNvbkNvbXBvbmVudCB9IGZyb20gJy4vaWNvbi9pY29uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4vaW1hZ2UvaW1hZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFJpcHBsZURpcmVjdGl2ZSB9IGZyb20gJy4vcmlwcGxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBQcm9ncmVzc0NvbXBvbmVudCB9IGZyb20gJy4vcHJvZ3Jlc3MvcHJvZ3Jlc3MuY29tcG9uZW50JztcbmltcG9ydCB7IE9ic2VydmVJbnRlcnNlY3RpbmdEaXJlY3RpdmUgfSBmcm9tICcuL29ic2VydmUtaW50ZXJzZWN0aW5nLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEljb25Db21wb25lbnQsXG4gICAgSW1hZ2VDb21wb25lbnQsXG4gICAgUmlwcGxlRGlyZWN0aXZlLFxuICAgIFByb2dyZXNzQ29tcG9uZW50LFxuICAgIE9ic2VydmVJbnRlcnNlY3RpbmdEaXJlY3RpdmVcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIEFuZ3VsYXJDb21tb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEljb25Db21wb25lbnQsXG4gICAgSW1hZ2VDb21wb25lbnQsXG4gICAgUmlwcGxlRGlyZWN0aXZlLFxuICAgIFByb2dyZXNzQ29tcG9uZW50LFxuICAgIE9ic2VydmVJbnRlcnNlY3RpbmdEaXJlY3RpdmVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb21tb25Nb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlndXJhdGlvbjogYW55KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDb21tb25Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiAnRmFjdG9yQ29tbW9uQ29uZmlndXJhdGlvbicsIHVzZVZhbHVlOiBjb25maWd1cmF0aW9uIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=