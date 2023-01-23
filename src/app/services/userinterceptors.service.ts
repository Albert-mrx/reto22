import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserinterceptorsService {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Este es el intyerceptor");
    req = req.clone({
      setHeaders:{'Authorization': 'Token de Autorizacion'}
    });
    return next.handle(req);
  }
}
