import { Component, OnInit } from '@angular/core';
import { Part } from '../part';
import { PartService } from '../part.service';
import { AuthService } from 'src/app/register/auth.service';

@Component({
  selector: 'app-partlist',
  templateUrl: './partlist.component.html',
  styleUrls: ['./partlist.component.css']
})
export class PartlistComponent implements OnInit {

  parts:Part[];
  constructor( private _auth:AuthService,private partser:PartService) { }

  getAllParts(){
    this.partser.getAllPart().subscribe(
      a=>{console.log(a); this.parts=a;},
      err=>console.log(err)
    )
  }
  delPart(id){
    this.partser.deletePart(id).subscribe(
      a=>{console.log(a)},
      err=>{console.log(err)}

    );
    this.getAllParts();

  }
  updatPart(part){
    this.partser.updatePart(part.p_id,part).subscribe(
      a=>{console.log(a);},
      err=>{console.log(err)}

    )
  }

  ngOnInit() {
    this.getAllParts();
  }

}
