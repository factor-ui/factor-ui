import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [
    IconComponent,
    ImageComponent
  ],
  imports: [
    AngularCommonModule
  ],
  exports: [
    IconComponent,
    ImageComponent
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
