import { Component, OnInit } from '@angular/core';
import { AuthService } from '../register/auth.service';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor(private _auth:AuthService) { }

  ngOnInit() {
  }

}
