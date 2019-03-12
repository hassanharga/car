import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user={
    address:{}
  };

  //registeruser:Regist=this.user;
  constructor(private _auth:AuthService,private _router:Router) { }
 adduser(){
  console.log(this.user);
   this._auth.adduser(this.user).subscribe(
    res=>{console.log(res.registereduser);
    localStorage.setItem("token",res.token);
    localStorage.setItem("person",res.registereduser);
  },

    er=>{console.log(er)})
       this._router.navigate(["/login"]);
 }
  ngOnInit() {
  }

}
