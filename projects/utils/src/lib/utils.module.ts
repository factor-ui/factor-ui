import { NgModule, ModuleWithProviders } from '@angular/core';

@NgModule({
  declarations: [

  ],
  imports: [

  ],
  exports: [

  ]
})
export class UtilsModule {
  public static forRoot(configuration: any): ModuleWithProviders {
    return {
      ngModule: UtilsModule,
      providers: [
        { provide: 'FactorUtilsConfiguration', useValue: configuration }
      ]
    };
  }
}
