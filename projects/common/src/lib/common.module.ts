import { NgModule, ModuleWithProviders } from '@angular/core';
import { IconComponent } from './icon/icon.component';

@NgModule({
  declarations: [
    IconComponent
  ],
  imports: [
  ],
  exports: [
    IconComponent
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
