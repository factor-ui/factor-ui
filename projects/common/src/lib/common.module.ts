import { NgModule, ModuleWithProviders } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptor } from './auth-interceptor';

@NgModule({
  imports: [],
  declarations: [],
  exports: []
})
export class CommonModule {
  public static forRoot(environment: any): ModuleWithProviders {
    return {
      ngModule: CommonModule,
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        { provide: 'environment', useValue: environment }
      ]
    };
  }
}
