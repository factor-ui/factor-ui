import { Inject, Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler } from '@angular/common/http';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CacheService } from './cache.service';

//const CACHABLE_URL = "/api/booksSearch";

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  constructor(
    private cacheService: CacheService,
    @Inject('FactorUtilsConfiguration') private configuration
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRequestCachable(req)) {
      return next.handle(req);
    }
    const response = this.cacheService.get(req);
    if (response !== null) {
      return of(response);
    }
    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          this.cacheService.put(req, event);
        }
      })
    );
  }
  private isRequestCachable(req: HttpRequest<any>) {
    return (req.method === 'GET') && (this.configuration.cache.urls.find(url => req.url.indexOf(url) > -1));
  }

}
