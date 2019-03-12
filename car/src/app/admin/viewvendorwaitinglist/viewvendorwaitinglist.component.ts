import { AdminservicesService } from './../shared/adminservices.service';
import { Component, OnInit } from '@angular/core';
import { UserForAdmin } from '../shared/user-for-admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewvendorwaitinglist',
  templateUrl: './viewvendorwaitinglist.component.html',
  styleUrls: ['./viewvendorwaitinglist.component.css']
})
export class ViewvendorwaitinglistComponent implements OnInit {


  usersArr: UserForAdmin[];
  constructor(private adminSer: AdminservicesService,private _router:Router) { }

  ngOnInit() {
    this.getWaitinListVendors();
  }
  getWaitinListVendors() {
    this.adminSer.getWaitinListVendors().subscribe(
      a => this.usersArr = a
    )
  }

  BlockUser(id) {
    this.adminSer.BlockUser(id).subscribe(
      a => alert(a)
    )
    this._router.navigate(["/admin/vendorblocklist"]);
  }
  ApproveUser(id) {
    this.adminSer.ApproveUser(id).subscribe(
      a => alert(a)
    )
    this._router.navigate(["/admin/showvendors"]);

  }
}

