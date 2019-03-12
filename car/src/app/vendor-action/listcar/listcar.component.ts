import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/vendors/car';
import { CarService } from 'src/app/vendors/car.service';

@Component({
  selector: 'app-listcar',
  templateUrl: './listcar.component.html',
  styleUrls: ['./listcar.component.css']
})
export class ListcarComponent implements OnInit {

  cars:Car[];
  constructor(private carser:CarService ) { }
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
