import { Injectable } from '@angular/core';
import {Car} from "./car"
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CarService {
 car:Car[];
 curl="http://localhost:8080/cars/";
 vurl="http://localhost:8080/vendors/";
  getAllOrders(){
    console.log("ooooo");
    return this.http.get(this.vurl+"orders/");
  }
  constructor(private http:HttpClient) { }
  addCar(car:Car){
    return this.http.post<Car>(this.curl+"add",car);
  }

 buyCar(c_id,v_id){
  console.log("eeee");
  let vv={v_id:v_id};
      return this.http.post<Car>(this.curl+"buyCar/"+c_id,vv);

 }
  getAllCars(){
    return this.http.get<Car[]>(this.curl+"list");
  }

  updateCar(id,car:Car){
    return this.http.post<Car>(this.curl+"edit/"+id,car);
  }

  deleteCar(id){
    return this.http.get<Car>(this.curl+"delete/"+id);

  }

  detailsCar(id){
    return this.http.get<Car>(this.curl+"details/"+id);

  }

}
