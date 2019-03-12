import { Part } from './../maintainance/part';
import { Component, OnInit, Input } from '@angular/core';
import { PartService } from '../maintainance/part.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../register/auth.service';


@Component({
  selector: 'app-parts-details',
  templateUrl: './parts-details.component.html',
  styleUrls: ['./parts-details.component.css']
})
export class PartsDetailsComponent implements OnInit {

  part:Part=new Part(1,"sss","sss",1,"sss","sss","sss","sss","sss",2,1);

  constructor(private _auth:AuthService, private partser:PartService, private aroute:ActivatedRoute,
    private route:Router) { }


  ngOnInit(){
    this.aroute.params.subscribe(
      a=>{
        this.partser.detailsPart(a['id']).subscribe(
          d=>this.part=d
        )
      }

    )}

}
