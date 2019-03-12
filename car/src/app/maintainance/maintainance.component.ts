import { Component, OnInit } from '@angular/core';
import { AuthService } from '../register/auth.service';

@Component({
  selector: 'app-maintainance',
  templateUrl: './maintainance.component.html',
  styleUrls: ['./maintainance.component.css']
})
export class MaintainanceComponent implements OnInit {

  constructor(private _auth:AuthService) { }

  ngOnInit() {
  }

}
