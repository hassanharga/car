import { Car } from './../vendors/car';
import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from '../register/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _auth:AuthService) { }

  ngOnInit() {
  }
   carList: Car[];

  GetSearchData(data){
    console.log(data);
    this.carList = data;
  }
}
