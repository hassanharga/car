import { AdminservicesService } from './../shared/adminservices.service';
import { Component, OnInit } from '@angular/core';
import { UserForAdmin } from '../shared/user-for-admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewvendorblocklist',
  templateUrl: './viewvendorblocklist.component.html',
  styleUrls: ['./viewvendorblocklist.component.css']
})
export class ViewvendorblocklistComponent implements OnInit {



  usersArr: UserForAdmin[];
  constructor(private adminSer: AdminservicesService,private _router:Router) { }

  ngOnInit() {
    this.getBlockedVendors();
  }
  getBlockedVendors() {
    this.adminSer.getBlockedVendors().subscribe(
      a => this.usersArr = a
    )
  }

  BlockUser(id) {
    this.adminSer.BlockUser(id).subscribe(
      a => alert(a)
    )
  }
  ApproveUser(id) {
    this.adminSer.ApproveUser(id).subscribe(
      a => alert(a)
    )
    this._router.navigate(["/admin/showvendors"]);
  }
}
