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
export class CommonModule {
    /**
     * @param {?} configuration
     * @return {?}
     */
    static forRoot(configuration) {
        return {
            ngModule: CommonModule,
            providers: [
                { provide: 'FactorCommonConfiguration', useValue: configuration }
            ]
        };
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZhY3Rvci1jb21tb24vIiwic291cmNlcyI6WyJsaWIvY29tbW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksSUFBSSxtQkFBbUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBcUJoRixNQUFNLE9BQU8sWUFBWTs7Ozs7SUFDaEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFrQjtRQUN0QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUU7YUFDbEU7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBM0JGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osYUFBYTtvQkFDYixjQUFjO29CQUNkLGVBQWU7b0JBQ2YsaUJBQWlCO29CQUNqQiw0QkFBNEI7aUJBQzdCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxtQkFBbUI7aUJBQ3BCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxhQUFhO29CQUNiLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZixpQkFBaUI7b0JBQ2pCLDRCQUE0QjtpQkFDN0I7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgYXMgQW5ndWxhckNvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9pY29uL2ljb24uY29tcG9uZW50JztcbmltcG9ydCB7IEltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9pbWFnZS9pbWFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmlwcGxlRGlyZWN0aXZlIH0gZnJvbSAnLi9yaXBwbGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IFByb2dyZXNzQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9ncmVzcy9wcm9ncmVzcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgT2JzZXJ2ZUludGVyc2VjdGluZ0RpcmVjdGl2ZSB9IGZyb20gJy4vb2JzZXJ2ZS1pbnRlcnNlY3RpbmcuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgSWNvbkNvbXBvbmVudCxcbiAgICBJbWFnZUNvbXBvbmVudCxcbiAgICBSaXBwbGVEaXJlY3RpdmUsXG4gICAgUHJvZ3Jlc3NDb21wb25lbnQsXG4gICAgT2JzZXJ2ZUludGVyc2VjdGluZ0RpcmVjdGl2ZVxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQW5ndWxhckNvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgSWNvbkNvbXBvbmVudCxcbiAgICBJbWFnZUNvbXBvbmVudCxcbiAgICBSaXBwbGVEaXJlY3RpdmUsXG4gICAgUHJvZ3Jlc3NDb21wb25lbnQsXG4gICAgT2JzZXJ2ZUludGVyc2VjdGluZ0RpcmVjdGl2ZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENvbW1vbk1vZHVsZSB7XG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChjb25maWd1cmF0aW9uOiBhbnkpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENvbW1vbk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6ICdGYWN0b3JDb21tb25Db25maWd1cmF0aW9uJywgdXNlVmFsdWU6IGNvbmZpZ3VyYXRpb24gfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==