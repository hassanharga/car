import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../register/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user={
    address:{}
  };
  constructor(private aroute:ActivatedRoute,private _auth:AuthService) { }

  ngOnInit() {
    this.aroute.params.subscribe(
      a=>{
        console.log(a);
        this._auth.getmaintenanceDetails(a['id']).subscribe(
          d=>this.user=d
        )
      }
    )
  }

}
