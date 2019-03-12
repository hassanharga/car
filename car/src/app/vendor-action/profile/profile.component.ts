import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/register/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

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
    console.log(item);
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
