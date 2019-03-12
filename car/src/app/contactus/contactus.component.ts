import { Component, OnInit } from '@angular/core';
import { AuthService } from '../register/auth.service';
import { Contact } from './contact';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  conplain:Contact=new Contact("","","","","","");
  message:string
  constructor(private _auth:AuthService,private _router:Router) { }
  addcomplains()
  {
    this._auth.addcomplain(this.conplain).subscribe(
      res=>{console.log(res);
        this.message="";},
      err=>{console.log(err);
        if(err instanceof HttpErrorResponse && err.status==401 )
        {
         this.message="You Should Login First!";
        }
    }
    );
    this._router.navigate(["/home"]);
  }

  ngOnInit() {
  }

}
