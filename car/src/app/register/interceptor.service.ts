import { Injectable, Injector } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor( private injector:Injector) { }
  intercept(req,next)
  {
    let authservice=this.injector.get(AuthService);
    let tokenedrequest=req.clone({
      setHeaders:{
        Authorization:`Bearer ${authservice.getToken()} `
      }
    });
    return next.handle(tokenedrequest);
  }
}
