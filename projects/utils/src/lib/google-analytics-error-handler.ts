import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

import { GoogleAnalyticsService } from './google-analytics.service';

@Injectable()
export class GoogleAnalyticsErrorHandler implements ErrorHandler {

  constructor(
    private injector: Injector
  ) { }

  handleError(error: Error | HttpErrorResponse) {
    const googleAnalyticsService = this.injector.get(GoogleAnalyticsService);
    if (error instanceof HttpErrorResponse) {
      if (navigator.onLine) {
        const message = error.error ? JSON.stringify(error.error) : error.message;
        googleAnalyticsService.trackEvent(error.url, 'Http Error', `${error.status} - ${message}`);
      }
    } else {
      const location = this.injector.get(LocationStrategy);
      const message = error.message ? error.message : error.toString();
      const stack = error.stack ? error.stack : error.toString();
      const url = location instanceof PathLocationStrategy ? location.path() : '';
      googleAnalyticsService.trackEvent(message, 'Javascript Error', stack);
    }
    throw error;
  }
}
