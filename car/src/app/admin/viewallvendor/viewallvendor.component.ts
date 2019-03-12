import { AdminservicesService } from './../shared/adminservices.service';
import { Component, OnInit } from '@angular/core';
import { UserForAdmin } from '../shared/user-for-admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewallvendor',
  templateUrl: './viewallvendor.component.html',
  styleUrls: ['./viewallvendor.component.css']
})
export class ViewallvendorComponent implements OnInit {
  usersArr: UserForAdmin[];
  constructor(private adminSer: AdminservicesService,private _router:Router) { }

  ngOnInit() {
    this.getVendorData();
  }
  getVendorData() {
    this.adminSer.getApprovedVendors().subscribe(
      a => this.usersArr = a
    )
  }

  BlockUser(id) {
    this.adminSer.BlockUser(id).subscribe(
      a => alert(a)
    );
    this._router.navigate(["/admin/vendorblocklist"]);

  }
}
