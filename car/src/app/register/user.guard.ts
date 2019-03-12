import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor( private _auth:AuthService,private _router:Router){}
  canActivate():boolean{
    if(this._auth.getperson()=="user")
    return true;
    else
    {
    this._router.navigate(['/notfound']);
    return false;
    }
  }
}
