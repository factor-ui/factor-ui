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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZhY3Rvci1jb21tb24vIiwic291cmNlcyI6WyJsaWIvY29tbW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksSUFBSSxtQkFBbUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBbUJsRSxNQUFNLE9BQU8sWUFBWTs7Ozs7SUFDaEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFrQjtRQUN0QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUU7YUFDbEU7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBekJGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osYUFBYTtvQkFDYixjQUFjO29CQUNkLGVBQWU7b0JBQ2YsaUJBQWlCO2lCQUNsQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsbUJBQW1CO2lCQUNwQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsYUFBYTtvQkFDYixjQUFjO29CQUNkLGVBQWU7b0JBQ2YsaUJBQWlCO2lCQUNsQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSBhcyBBbmd1bGFyQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEljb25Db21wb25lbnQgfSBmcm9tICcuL2ljb24vaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW1hZ2VDb21wb25lbnQgfSBmcm9tICcuL2ltYWdlL2ltYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSaXBwbGVEaXJlY3RpdmUgfSBmcm9tICcuL3JpcHBsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUHJvZ3Jlc3NDb21wb25lbnQgfSBmcm9tICcuL3Byb2dyZXNzL3Byb2dyZXNzLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEljb25Db21wb25lbnQsXG4gICAgSW1hZ2VDb21wb25lbnQsXG4gICAgUmlwcGxlRGlyZWN0aXZlLFxuICAgIFByb2dyZXNzQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBBbmd1bGFyQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBJY29uQ29tcG9uZW50LFxuICAgIEltYWdlQ29tcG9uZW50LFxuICAgIFJpcHBsZURpcmVjdGl2ZSxcbiAgICBQcm9ncmVzc0NvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENvbW1vbk1vZHVsZSB7XG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChjb25maWd1cmF0aW9uOiBhbnkpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENvbW1vbk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6ICdGYWN0b3JDb21tb25Db25maWd1cmF0aW9uJywgdXNlVmFsdWU6IGNvbmZpZ3VyYXRpb24gfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==