
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { InProgressRequestService } from '../services/in-progress.service';

@Injectable()
export class ProgressInterceptor implements HttpInterceptor {

    constructor(private counter: InProgressRequestService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        Promise.resolve(null).then(() => this.counter.increment());

        return next.handle(req).pipe(finalize(() => {
            this.counter.decrement();
        }));
    }

}
