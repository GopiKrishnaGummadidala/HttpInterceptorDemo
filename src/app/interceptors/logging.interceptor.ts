import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpEventType } from "@angular/common/http";
import { Observable } from "rxjs"
import { tap } from "rxjs/operators"

@Injectable() 
export class LoggingInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(`LoggingInterceptor - ${req.headers}`);
        return next.handle(req).pipe(
            tap(event => {
                if(event.type === HttpEventType.Response){
                    console.log(event.body);
                }
            })
        );
    }
}