import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { Contact } from '../contactus/contact';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private curl="http://localhost:8080/users/";
  private acul="http://localhost:8080/admin/";
  private admincul="http://localhost:8080/admins/";
  private conurl="http://localhost:8080/complains/";
  constructor(private http:HttpClient,private _router:Router) { }
  addcomplain(complain)
  {
    return this.http.post<Contact>(this.conurl+"addcomplain",complain);
  }
  allcomplain()
  {
    return this.http.get<Contact[]>(this.conurl+"allcomplain");
  }
  deletecomplain(id)
  {
    return this.http.get<Contact>(this.conurl+"delete/"+id);
  }
  adduser(user){
    if(user.person=="user")
    {
      user.status="verified";

      console.log("user"+ user.counter_user);
    }
    else
    {
      user.counter_vendor++;
      console.log("vendor"+user.counter_vendor);
    }

    return this.http.post<any>(this.curl+"register",user);
  }
 adminreqister(admin)
 {
  return this.http.post<any>(this.admincul+"register",admin);
 }
 loinadmin(admin){
  return this.http.post<any>(this.admincul+"login",admin);
}
  loinuser(user){
    return this.http.post<any>(this.curl+"login",user);
  }
  loginedIN()
  {
    return  localStorage.getItem("token");
  }
  getToken()
  {
    return  localStorage.getItem("token");
  }
  logout()
  {
    localStorage.removeItem("token");
    localStorage.removeItem("person");
    this._router.navigate(["/home"]);
  }
  getvendorDetails(id:number){
    console.log(id);
    return this.http.get<any>(this.curl+"detailsvendor/"+id);
  }
  getmaintenanceDetails(id:number){
    console.log(id);
    return this.http.get<any>(this.curl+"detailsmaintenance/"+id);
  }
  getusersDetails(id:number){
    console.log(id);
    return this.http.get<any>(this.curl+"detailsuser/"+id);
  }
  updateprofile(id,user)
  {
    console.log(user);
    return this.http.post<any>(this.curl+"edit/"+id,user);
  }
  getperson()
  {
     return localStorage.getItem("person");
  }
}
