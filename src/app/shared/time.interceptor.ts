import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class TimeInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const startTime = Date.now();
    return next.handle(request).pipe(
      finalize(() => {
        const endTime = Date.now();
        console.log(
          `Request on ${request.method} ${request.url} - ${
            endTime - startTime
          }ms`
        );
      })
    );
  }
}
