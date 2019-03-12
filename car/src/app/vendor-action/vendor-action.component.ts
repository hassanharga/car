import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../register/auth.service';

@Component({
  selector: 'app-vendor-action',
  templateUrl: './vendor-action.component.html',
  styleUrls: ['./vendor-action.component.css']
})
export class VendorActionComponent implements OnInit {

  user={
    address:{}
  };
  constructor(private aroute:ActivatedRoute,private _auth:AuthService) { }

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
