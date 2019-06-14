import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

declare var window: any;

@Injectable()
export class GoogleTagManagerErrorHandler implements ErrorHandler {

  constructor(
    private injector: Injector
  ) { }

  handleError(error: Error | HttpErrorResponse) {
    if (error instanceof HttpErrorResponse) {
      if (navigator.onLine) {
        const message = error.error ? JSON.stringify(error.error) : error.message;
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'http_error',
          'gtm.errorMessage': message,
          'gtm.errorUrl': error.url,
          'error_status': error.status
        });
      }
    } /* else {
      // DEPRECATED: Google Tag Manager automatically collect javascript errors this not neccesary now
      const location = this.injector.get(LocationStrategy);
      const message = error.message ? error.message : error.toString();
      const stack = error.stack ? error.stack : error.toString();
      const url = location instanceof PathLocationStrategy ? location.path() : '';
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'javascript_error',
        'gtm.errorMessage': message,
        'gtm.errorUrl': url,
        'error_stack': stack,

      });
    }*/
    throw error;
  }
}
