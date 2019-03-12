import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/register/auth.service';
import { Adm } from '../adm';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  loginUser={};
  message;
 constructor(private _auth:AuthService,private _router:Router) { }
 loginadmin(){
  console.log(this.loginUser);
  this._auth.loinadmin(this.loginUser).subscribe(
   res=>{console.log(res)
   localStorage.setItem("token",res.token)
   localStorage.setItem("person",res.uservm.person)
   this.message="";
   this._router.navigate(["/admin"]);
 },
   er=>{
     if(er instanceof HttpErrorResponse && er.status==401 )
     {
      this.message="The Email or Password is invalid Admin only enter !";
     }
    },
)

}

  ngOnInit() {
  }
}
