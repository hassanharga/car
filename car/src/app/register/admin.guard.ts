import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor( private _auth:AuthService,private _router:Router){}
  canActivate():boolean{
    if(this._auth.getperson()=="admin")
    return true;
    else
    {
    this._router.navigate(['/notfound']);
    return false;
    }
  }
}
