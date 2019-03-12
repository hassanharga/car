import { Component, OnInit } from '@angular/core';
import { CarService } from '../vendors/car.service';
import { Car } from '../vendors/car';
import { AuthService } from '../register/auth.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor(private carser:CarService,private _auth:AuthService) { }
cars:Car[];
  getAllCars(){
    this.carser.getAllCars().subscribe(
      a=>{console.log(a); this.cars=a;},
      err=>console.log(err)
    )

  }

  sort(e){
    console.log(e.target.value);
    console.log("ssssss");
    if(e.target.value=="Best Seller"){
    this.cars.sort((a:Car,b:Car)=>{
      return a.price - b.price;
    })
  }
    else if(e.target.value=="Featured"){
      this.cars.sort((a:Car,b:Car)=>{
        return a.warranty - b.warranty;
    }

      )}
      else{
      this.cars.sort((a:Car,b:Car)=>{
        return a.v_id - b.v_id;
      }
      )}

}

  ngOnInit() {
    this.getAllCars();
  }


}
