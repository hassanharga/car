import { Component, OnInit } from '@angular/core';
import { CarService } from '../vendors/car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../vendors/car';
import { AuthService } from '../register/auth.service';

@Component({
  selector: 'app-cars-details',
  templateUrl: './cars-details.component.html',
  styleUrls: ['./cars-details.component.css']
})
export class CarsDetailsComponent implements OnInit {

  car:Car;

  constructor(private carser:CarService, private aroute:ActivatedRoute,
    private route:Router,private _auth:AuthService) { }


    buycar(c_id: any, v_id: any) {
      console.log(c_id, v_id);

      this.carser.buyCar(c_id, v_id).subscribe(
        a => console.log("done"),
        er => console.log("error")
      )
      }

  ngOnInit(){
    this.aroute.params.subscribe(
      a=>{
        this.carser.detailsCar(a['id']).subscribe(
          d=>this.car=d
        )
      }

    )}


}
