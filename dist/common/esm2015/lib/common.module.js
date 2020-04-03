var CommonModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { IconComponent } from './icon/icon.component';
import { ImageComponent } from './image/image.component';
import { ObserveIntersectingDirective } from './observe-intersecting.directive';
import { ProgressComponent } from './progress/progress.component';
let CommonModule = CommonModule_1 = class CommonModule {
    static forRoot(configuration) {
        return {
            ngModule: CommonModule_1,
            providers: [
                { provide: 'FactorCommonConfiguration', useValue: configuration }
            ]
        };
    }
};
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
export { CommonModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZhY3Rvci1jb21tb24vIiwic291cmNlcyI6WyJsaWIvY29tbW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLElBQUksbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQXFCbEUsSUFBYSxZQUFZLG9CQUF6QixNQUFhLFlBQVk7SUFDaEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFtQjtRQUN2QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGNBQVk7WUFDdEIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUU7YUFDbEU7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUFUWSxZQUFZO0lBbkJ4QixRQUFRLENBQUM7UUFDUixZQUFZLEVBQUU7WUFDWixlQUFlO1lBQ2YsYUFBYTtZQUNiLGNBQWM7WUFDZCw0QkFBNEI7WUFDNUIsaUJBQWlCO1NBQ2xCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsbUJBQW1CO1NBQ3BCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsZUFBZTtZQUNmLGFBQWE7WUFDYixjQUFjO1lBQ2QsNEJBQTRCO1lBQzVCLGlCQUFpQjtTQUNsQjtLQUNGLENBQUM7R0FDVyxZQUFZLENBU3hCO1NBVFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgYXMgQW5ndWxhckNvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEF2YXRhckNvbXBvbmVudCB9IGZyb20gJy4vYXZhdGFyL2F2YXRhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWNvbkNvbXBvbmVudCB9IGZyb20gJy4vaWNvbi9pY29uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4vaW1hZ2UvaW1hZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IE9ic2VydmVJbnRlcnNlY3RpbmdEaXJlY3RpdmUgfSBmcm9tICcuL29ic2VydmUtaW50ZXJzZWN0aW5nLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBQcm9ncmVzc0NvbXBvbmVudCB9IGZyb20gJy4vcHJvZ3Jlc3MvcHJvZ3Jlc3MuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXZhdGFyQ29tcG9uZW50LFxuICAgIEljb25Db21wb25lbnQsXG4gICAgSW1hZ2VDb21wb25lbnQsXG4gICAgT2JzZXJ2ZUludGVyc2VjdGluZ0RpcmVjdGl2ZSxcbiAgICBQcm9ncmVzc0NvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQW5ndWxhckNvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQXZhdGFyQ29tcG9uZW50LFxuICAgIEljb25Db21wb25lbnQsXG4gICAgSW1hZ2VDb21wb25lbnQsXG4gICAgT2JzZXJ2ZUludGVyc2VjdGluZ0RpcmVjdGl2ZSxcbiAgICBQcm9ncmVzc0NvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENvbW1vbk1vZHVsZSB7XG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChjb25maWd1cmF0aW9uPzogYW55KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDb21tb25Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiAnRmFjdG9yQ29tbW9uQ29uZmlndXJhdGlvbicsIHVzZVZhbHVlOiBjb25maWd1cmF0aW9uIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=