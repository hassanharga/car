import { AdminservicesService } from './../shared/adminservices.service';
import { Component, OnInit } from '@angular/core';
import { UserForAdmin } from '../shared/user-for-admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewmintainaceblocklist',
  templateUrl: './viewmintainaceblocklist.component.html',
  styleUrls: ['./viewmintainaceblocklist.component.css']
})
export class ViewmintainaceblocklistComponent implements OnInit {


  usersArr: UserForAdmin[];
  constructor(private adminSer: AdminservicesService,private _router:Router) { }

  ngOnInit() {
    this.getBlockedmentainance();
  }
  getBlockedmentainance() {
    this.adminSer.getBlockedmentainance().subscribe(
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
    this._router.navigate(["/admin/showmaintenance"]);

  }
}
