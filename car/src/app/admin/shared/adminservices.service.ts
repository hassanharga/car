import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserForAdmin } from './user-for-admin';

@Injectable({
  providedIn: 'root'
})
export class AdminservicesService {
  url = "http://localhost:8080/admin/";
  users:UserForAdmin;

  constructor(private http: HttpClient) { }

  getApprovedVendors(){
    return this.http.get<UserForAdmin[]>(this.url +"VendorList");
  }
  getuserCount() {
    return this.http.get<UserForAdmin[]>(this.url + "userCount");
  }
  getWaitinListVendors() {
    return this.http.get<UserForAdmin[]>(this.url + "vendorwaitinglist");
  }

  getBlockedVendors() {
    return this.http.get<UserForAdmin[]>(this.url + "vendorblockedList");
  }

  getApprovedmentainance() {
    return this.http.get<UserForAdmin[]>(this.url + "maintenanceList");
  }

  getWaitinListmentainance() {
    return  this.http.get<UserForAdmin[]>(this.url + "maintenancewaitinglist");
  }

  getBlockedmentainance() {
    return  this.http.get<UserForAdmin[]>(this.url + "maintenanceblockedList");
  }
  ApproveUser(id){
    return this.http.get<any>(this.url +"userapproved/"+id);
  }
  BlockUser(id) {
    return this.http.get<any>(this.url + "userblock/" + id);
  }
}
