import { __decorate } from "tslib";
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
    CommonModule_1 = CommonModule;
    CommonModule.forRoot = function (configuration) {
        return {
            ngModule: CommonModule_1,
            providers: [
                { provide: 'FactorCommonConfiguration', useValue: configuration }
            ]
        };
    };
    var CommonModule_1;
    CommonModule = CommonModule_1 = __decorate([
        NgModule({
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
        })
    ], CommonModule);
    return CommonModule;
}());
export { CommonModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZhY3Rvci1jb21tb24vIiwic291cmNlcyI6WyJsaWIvY29tbW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksSUFBSSxtQkFBbUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXRFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBcUJsRTtJQUFBO0lBU0EsQ0FBQztxQkFUWSxZQUFZO0lBQ1Qsb0JBQU8sR0FBckIsVUFBc0IsYUFBbUI7UUFDdkMsT0FBTztZQUNMLFFBQVEsRUFBRSxjQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFO2FBQ2xFO1NBQ0YsQ0FBQztJQUNKLENBQUM7O0lBUlUsWUFBWTtRQW5CeEIsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLGVBQWU7Z0JBQ2YsYUFBYTtnQkFDYixjQUFjO2dCQUNkLDRCQUE0QjtnQkFDNUIsaUJBQWlCO2FBQ2xCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLG1CQUFtQjthQUNwQjtZQUNELE9BQU8sRUFBRTtnQkFDUCxlQUFlO2dCQUNmLGFBQWE7Z0JBQ2IsY0FBYztnQkFDZCw0QkFBNEI7Z0JBQzVCLGlCQUFpQjthQUNsQjtTQUNGLENBQUM7T0FDVyxZQUFZLENBU3hCO0lBQUQsbUJBQUM7Q0FBQSxBQVRELElBU0M7U0FUWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSBhcyBBbmd1bGFyQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQXZhdGFyQ29tcG9uZW50IH0gZnJvbSAnLi9hdmF0YXIvYXZhdGFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9pY29uL2ljb24uY29tcG9uZW50JztcbmltcG9ydCB7IEltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9pbWFnZS9pbWFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgT2JzZXJ2ZUludGVyc2VjdGluZ0RpcmVjdGl2ZSB9IGZyb20gJy4vb2JzZXJ2ZS1pbnRlcnNlY3RpbmcuZGlyZWN0aXZlJztcbmltcG9ydCB7IFByb2dyZXNzQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9ncmVzcy9wcm9ncmVzcy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBdmF0YXJDb21wb25lbnQsXG4gICAgSWNvbkNvbXBvbmVudCxcbiAgICBJbWFnZUNvbXBvbmVudCxcbiAgICBPYnNlcnZlSW50ZXJzZWN0aW5nRGlyZWN0aXZlLFxuICAgIFByb2dyZXNzQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBBbmd1bGFyQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBBdmF0YXJDb21wb25lbnQsXG4gICAgSWNvbkNvbXBvbmVudCxcbiAgICBJbWFnZUNvbXBvbmVudCxcbiAgICBPYnNlcnZlSW50ZXJzZWN0aW5nRGlyZWN0aXZlLFxuICAgIFByb2dyZXNzQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29tbW9uTW9kdWxlIHtcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KGNvbmZpZ3VyYXRpb24/OiBhbnkpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENvbW1vbk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6ICdGYWN0b3JDb21tb25Db25maWd1cmF0aW9uJywgdXNlVmFsdWU6IGNvbmZpZ3VyYXRpb24gfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==