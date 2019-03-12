import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/vendors/car.service';
import { AuthService } from 'src/app/register/auth.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private carser:CarService,private _auth:AuthService) { }
  public orderlist={};
order(){
  this.carser.getAllOrders().subscribe(
    a=>{console.log(a);this.orderlist=a},
    b=>console.log(b)
  )
}
  ngOnInit() {
    // this.carser.getAllOrders().subscribe(
    //   a=>{console.log(a);this.orderlist=a},
    //   b=>console.log(b)
    // )
  }

}
