import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../car';
import { AuthService } from 'src/app/register/auth.service';

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent implements OnInit {
cars:Car[];
  constructor(private _auth:AuthService,private carser:CarService ) { }
getAllCars(){
  this.carser.getAllCars().subscribe(
    a=>this.cars=a,
  )
}
delCar(id){

  this.carser.deleteCar(id).subscribe(a=>{this.getAllCars()});
}
udpateCar(item){

  this.carser.updateCar(item.c_id,item).subscribe(
    a=>{console.log(a)},
    err=>{console.log(err)}
  )
}

  ngOnInit() {
     this.getAllCars();
  }


}
