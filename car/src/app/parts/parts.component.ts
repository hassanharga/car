import { Component, OnInit } from '@angular/core';
import { PartService } from '../maintainance/part.service';
import { Part } from '../maintainance/part';
import { Router } from '@angular/router';
import { AuthService } from '../register/auth.service';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class PartsComponent implements OnInit {

  parts:Part[];

  selectedpart:Part=null;
  constructor(private _auth:AuthService,private partser: PartService ) { }

  getAllParts(){
    this.partser.getAllPart().subscribe(
      a=>{console.log(a); this.parts=a;},
      err=>console.log(err)
    )

  }

  sort(e){
    console.log(e.target.value);
    console.log("ssssss");
    if(e.target.value=="Best Seller"){
    this.parts.sort((a:Part,b:Part)=>{
      return a.price - b.price;
    })
  }
    else if(e.target.value=="Featured"){
      this.parts.sort((a:Part,b:Part)=>{
        return a.quantity - b.quantity;
    }

      )}
      else{
      this.parts.sort((a:Part,b:Part)=>{
        return a.p_id - b.p_id;
      }
      )}

}




  ngOnInit() {

    this.getAllParts();
    this.selectedpart=this.parts[0];
  }

}
