import { Component, OnInit } from '@angular/core';
import { Part } from 'src/app/maintainance/part';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/register/auth.service';
import { CarService } from 'src/app/vendors/car.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PartService } from 'src/app/maintainance/part.service';
@Component({
  selector: 'app-addpart',
  templateUrl: './addpart.component.html',
  styleUrls: ['./addpart.component.css']
})
export class AddpartComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  part: Part = new Part(1,"", "", 1, "", "", "", "", "", 2, 1);

  constructor(private _auth:AuthService, private partser: PartService, private formBuilder: FormBuilder,private _router:Router) {}
   ngOnInit() {
    this.registerForm = this.formBuilder.group({
      category: ['', Validators.required],
      model: ['', Validators.required],
      price: ['', Validators.required],
      brand: ['', Validators.required],
      code: ['', Validators.required],
      manufactor: ['', Validators.required],
      color: ['', Validators.required],
      availability: ['', Validators.required],
      quantity: ['', Validators.required],


  });
  }
  get f() { return this.registerForm.controls; }


  addPart() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    console.log(this.part);
    this.partser
      .addPart(this.part)
      .subscribe(a => console.log(a), err => console.log(err));
this._router.navigate(["/maintenance-action/listpart"]);
  }


}
