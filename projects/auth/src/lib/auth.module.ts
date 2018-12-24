import { NgModule, ModuleWithProviders } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptor } from './auth-interceptor';

@NgModule({
  declarations: [],
  imports: [],
  exports: []
})
export class AuthModule {
  public static forRoot(configuration: any): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        { provide: 'FactorAuthConfiguration', useValue: configuration }
      ]
    };
  }
}
