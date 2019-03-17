import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler } from '@angular/common/http';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CacheMapService } from './cache-map.service';

//const CACHABLE_URL = "/api/booksSearch";

@Injectable()
export class CachingInterceptor implements HttpInterceptor {

  constructor(
    private cacheMapService: CacheMapService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    /*
    if (!this.isRequestCachable(req)) {
        return next.handle(req);
    }
    */
    const response = this.cacheMapService.get(req);
    if (response !== null) {
      return of(response);
    }
    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          this.cacheMapService.put(req, event);
        }
      })
    );
  }
  /*
  private isRequestCachable(req: HttpRequest<any>) {
      return (req.method === 'GET') && (req.url.indexOf(CACHABLE_URL) > -1);
  }
  */
}
