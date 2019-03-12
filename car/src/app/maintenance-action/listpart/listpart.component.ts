import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/register/auth.service';
import { PartService } from 'src/app/maintainance/part.service';
import { Part } from 'src/app/maintainance/part';

@Component({
  selector: 'app-listpart',
  templateUrl: './listpart.component.html',
  styleUrls: ['./listpart.component.css']
})
export class ListpartComponent implements OnInit {

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
