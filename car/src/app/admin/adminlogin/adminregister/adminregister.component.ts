import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/register/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminregisterComponent implements OnInit {

  user={
  };

  //registeruser:Regist=this.user;
  constructor(private _auth:AuthService,private _router:Router) { }
 addadmin(){
  console.log(this.user);
   this._auth.adminreqister(this.user).subscribe(
    res=>{console.log(res.registereduser);
    localStorage.setItem("token",res.token);
    localStorage.setItem("person",res.registereduser);
       this._router.navigate(["/adminlogin"]);
  },
    er=>{console.log(er)})

 }
  ngOnInit() {
  }

}
