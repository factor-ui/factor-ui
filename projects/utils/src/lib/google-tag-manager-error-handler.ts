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
    }
    throw error;
  }
}
