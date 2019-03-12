import { AdminservicesService } from './../shared/adminservices.service';
import { Component, OnInit } from '@angular/core';
import { UserForAdmin } from '../shared/user-for-admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewmentainacewaitinglist',
  templateUrl: './viewmentainacewaitinglist.component.html',
  styleUrls: ['./viewmentainacewaitinglist.component.css']
})
export class ViewmentainacewaitinglistComponent implements OnInit {

  usersArr: UserForAdmin[];
  constructor(private adminSer: AdminservicesService,private _router:Router) { }

  ngOnInit() {
    this.getMentainaceData();
  }
  getMentainaceData() {
    this.adminSer.getWaitinListmentainance().subscribe(
      a => this.usersArr = a
    )
  }

  BlockUser(id) {
    this.adminSer.BlockUser(id).subscribe(
      a => alert(a)
    )
    this._router.navigate(["/admin/maintenanceblocklist"]);
  }
  ApproveUser(id) {
    this.adminSer.ApproveUser(id).subscribe(
      a => alert(a)
    )
    this._router.navigate(["/admin/showmaintenance"]);
  }
}
