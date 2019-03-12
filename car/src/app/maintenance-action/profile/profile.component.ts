import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/register/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileMainComponent implements OnInit {

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
