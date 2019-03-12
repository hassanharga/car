import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardregGuard implements CanActivate {
  constructor(private _auth:AuthService,private _router:Router ) { }
  canActivate():boolean{
    if(this._auth.loginedIN())
    return true;
    else
    {
    this._router.navigate(['/login']);
    return false;
    }
  }
}
