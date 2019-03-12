import { Router } from '@angular/router';
import { AdminservicesService } from './../shared/adminservices.service';
import { Component, OnInit } from '@angular/core';
import { UserForAdmin } from '../shared/user-for-admin';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  usersArr: UserForAdmin[];
  VendorArr: UserForAdmin[];
  mentArr: UserForAdmin[];

  VendorCount :number;
  MentainanceCount: number;
  userCount: number;

  constructor(private adminSer: AdminservicesService, private _router: Router) { }

  ngOnInit() {
    this.getVendorData();
    this.getViewMentanaceData();
    this.getUserData();
  }
  getVendorData() {
    this.adminSer.getApprovedVendors().subscribe(
      a => this.VendorArr = a
    );
    }

  getViewMentanaceData() {
    this.adminSer.getApprovedmentainance().subscribe(
      a => this.mentArr = a
    )
  }

  getUserData(){
    this.adminSer.getuserCount().subscribe(
      a => this.usersArr = a
    )

  }
}
