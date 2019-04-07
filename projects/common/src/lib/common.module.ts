import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';
import { ImageComponent } from './image/image.component';
import { RippleDirective } from './ripple.directive';
import { ProgressComponent } from './progress/progress.component';
import { ObserveIntersectingDirective } from './observe-intersecting.directive';

@NgModule({
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
})
export class CommonModule {
  public static forRoot(configuration: any): ModuleWithProviders {
    return {
      ngModule: CommonModule,
      providers: [
        { provide: 'FactorCommonConfiguration', useValue: configuration }
      ]
    };
  }
}
