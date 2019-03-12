import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../car';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/register/auth.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

form :FormGroup;
imagePreview;
// private model:string;
// private brand:string;
// private body:string;
// private fuel:string;
// private engin:string;
// private transmission:string;
// private color:string;
// private door:number;
// private warranty:number;
// private country:string;
// private price:number;
// private image:File;
// private v_id:number;

 mycar = new FormData();

fileChange(event:Event){
let file=(event.target as HTMLInputElement).files[0];
  this.form.patchValue({image:file});
  this.form.get("image").updateValueAndValidity();
  // console.log(file);
  // console.log(this.form);
  let reader = new FileReader();
  reader.onload=()=>{
    this.imagePreview=reader.result;
  };
  reader.readAsDataURL(file);
}


  car:Car=new Car(0,"","","","","","","",4,2,"",1,"",0);
  constructor(private _auth:AuthService,private carser:CarService) { }

 addCar(){
  //console.log(file);
  console.log(this.car);
   this.carser.addCar(this.car).subscribe(
    a=>{console.log(a);},
    er=>{console.log(er)}
 )
 }
  ngOnInit() {
    this.form=new FormGroup({
      "model":new FormControl(null,{validators:[Validators.required]}),
      "brand":new FormControl(null,{validators:[Validators.required]}),
      "body":new FormControl(null,{validators:[Validators.required]}),
      "fuel":new FormControl(null,{validators:[Validators.required]}),
      "engin":new FormControl(null,{validators:[Validators.required]}),
      "transmission":new FormControl(null,{validators:[Validators.required]}),
      "color":new FormControl(null,{validators:[Validators.required]}),
      "door":new FormControl(null,{validators:[Validators.required]}),
      "warranty":new FormControl(null,{validators:[Validators.required]}),
      "v_id":new FormControl(null,{validators:[Validators.required]}),
      "country":new FormControl(null,{validators:[Validators.required]}),
      "price":new FormControl(null,{validators:[Validators.required]}),
      "image":new FormControl(null,{validators:[Validators.required]})
    })
  }

}
