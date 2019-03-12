import { Component, OnInit } from '@angular/core';
import { AdminservicesService } from '../shared/adminservices.service';
import { UserForAdmin } from '../shared/user-for-admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewallmintainance',
  templateUrl: './viewallmintainance.component.html',
  styleUrls: ['./viewallmintainance.component.css']
})
export class ViewallmintainanceComponent implements OnInit {
  usersArr:UserForAdmin[];
  constructor(private adminSer:AdminservicesService,private _router:Router) { }

  ngOnInit() {
    this.getViewMentanaceData();
  }
  getViewMentanaceData(){
    this.adminSer.getApprovedmentainance().subscribe(
      a=> this.usersArr = a
    )
  }
  BlockUser(id){
    this.adminSer.BlockUser(id).subscribe(
      a=>alert(a)
    );
    this._router.navigate(["/admin/maintenanceblocklist"]);
  }

}
