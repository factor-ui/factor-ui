import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';

import { AvatarComponent } from './avatar/avatar.component';
import { IconComponent } from './icon/icon.component';
import { ImageComponent } from './image/image.component';
import { ObserveIntersectingDirective } from './observe-intersecting.directive';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
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
export class CommonModule {
  public static forRoot(configuration?: any): ModuleWithProviders {
    return {
      ngModule: CommonModule,
      providers: [
        { provide: 'FactorCommonConfiguration', useValue: configuration }
      ]
    };
  }
}
