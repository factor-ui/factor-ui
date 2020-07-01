import { ErrorHandler, Injectable, Injector, Inject, PLATFORM_ID } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';

declare var window: any;

@Injectable()
export class GoogleTagManagerErrorHandler implements ErrorHandler {

  constructor(
    private injector: Injector,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) { }

  handleError(error: Error | HttpErrorResponse) {
    if (isPlatformBrowser(this.platformId) && error instanceof HttpErrorResponse) {
      const message = error.error ? JSON.stringify(error.error) : error.message;
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'http_error',
        'gtm.errorMessage': message,
        'gtm.errorUrl': error.url,
        'error_status': error.status
      });
    }
    throw error;
  }
}
