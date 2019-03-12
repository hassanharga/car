import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/vendors/car';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/register/auth.service';
import { CarService } from 'src/app/vendors/car.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent implements OnInit {
  form :FormGroup;
  imagePreview;
  modelArray = [];

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

  onBrandChange(item) {
    if (item == "Ford")
      this.modelArray = ["Fassion", "Focused", "Suvs", "Tuarus"];
    else if (item == "Huyndai") {
      this.modelArray = ["Verrna", "Elentra", "Accent", "Axel", "Sonata", "Azera"];
    }
    else if (item == "Nissan") {
      this.modelArray = ["Sunny", "Kicks", "GT-s", "Versai"];
    }
    else if (item == "Kia") {
      this.modelArray = ["Serato", "Sportage", "Picanto"];
    }
    else if (item == "Chevrolet") {
      this.modelArray = [""];
    }
    else if (item == "BMW") {
      this.modelArray = ["ْX-Series", "Bmw 3 Serries", "Active Hibared"];
    }
  }
  car: Car = new Car(0,"","","","","","","",4,2,"",1,"",0);
    constructor(private _router:Router,private _auth:AuthService,private carser:CarService) { }

   addCar(){
    //console.log(file);
    console.log(this.car);
     this.carser.addCar(this.car).subscribe(
      a=>{console.log(a);},
      er=>{console.log(er)}
   )
  this._router.navigate(["/vendor-action/listcar"]);
   }

  ngOnInit()
  {
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
