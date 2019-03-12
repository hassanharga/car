import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser={};
   message;
  constructor(private _auth:AuthService,private _router:Router) { }
 loginuser(){
   console.log(this.loginUser);
   this._auth.loinuser(this.loginUser).subscribe(
    res=>{console.log(res)
    localStorage.setItem("token",res.token)
    localStorage.setItem("person",res.uservm.person)
    this.message="";
  if(res.uservm.person=="vendor")
  {
    this._router.navigate(["/vendor-action/users/detailsvendor/"+res.uservm.u_id]);
  }
  else if(res.uservm.person=="maintenance")
  {
    this._router.navigate(["/maintenance-action/users/detailsmaintenance/"+res.uservm.u_id]);
  }
  else
  {
    this._router.navigate(["/user-action/users/detailsuser/"+res.uservm.u_id]);
  }
  },
    er=>{
      if(er instanceof HttpErrorResponse && er.status==401 )
      {
       this.message="The Email or Password is invalid or Unverified !";
      }
     },
 )
 }

  ngOnInit() {
  }

}
