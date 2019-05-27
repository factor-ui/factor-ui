import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

import { GoogleTagManagerService } from './google-tag-manager.service';

declare var window: any;

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
          error_message: message,
          error_status: error.status,
          error_url: error.url
        });
      }
    } else {
      const location = this.injector.get(LocationStrategy);
      const message = error.message ? error.message : error.toString();
      const stack = error.stack ? error.stack : error.toString();
      const url = location instanceof PathLocationStrategy ? location.path() : '';
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'javascript_error',
        error_message: message,
        error_stack: stack,
        error_url: url
      });
    }
    throw error;
  }
}
