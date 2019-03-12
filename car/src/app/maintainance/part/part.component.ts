import { Component, OnInit } from "@angular/core";

import { Part } from "../part";
import { PartService } from "../part.service";
import { FormGroup, FormBuilder, Validators} from "@angular/forms";
import { AuthService } from 'src/app/register/auth.service';

@Component({
  selector: "app-part",
  templateUrl: "./part.component.html",
  styleUrls: ["./part.component.css"]
})
export class PartComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  part: Part = new Part(0,"", "", 1, "", "", "", "", "", 2, 1);

  constructor(private _auth:AuthService, private partser: PartService, private formBuilder: FormBuilder) {}



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
      quantity: ['', Validators.required,Validators.maxLength(2)],


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
  }





}
