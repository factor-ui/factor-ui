import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { IconComponent } from './icon/icon.component';
import { ImageComponent } from './image/image.component';
import { ProgressComponent } from './progress/progress.component';
import { ObserveIntersectingDirective } from './observe-intersecting.directive';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    IconComponent,
    ImageComponent,
    ProgressComponent,
    ObserveIntersectingDirective,
    MessageComponent
  ],
  imports: [
    AngularCommonModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  exports: [
    IconComponent,
    ImageComponent,
    ProgressComponent,
    ObserveIntersectingDirective
  ],
  entryComponents: [
    MessageComponent
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
