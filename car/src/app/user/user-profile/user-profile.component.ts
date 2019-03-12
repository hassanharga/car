import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/register/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user={
    address:{}
  };
  constructor(private aroute:ActivatedRoute,private _auth:AuthService) { }

  updateprofile(item)
  {
    this._auth.updateprofile(item.u_id,item).subscribe(
      res=>console.log(res),
      err=>console.log(err)
    );
  }
  ngOnInit() {
    this.aroute.params.subscribe(
      a=>{
        console.log(a);
        this._auth.getvendorDetails(a['id']).subscribe(
          d=>this.user=d
        )
      }
    )
  }

}
