import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Part } from './part';

@Injectable({
  providedIn: 'root'
})


export class PartService {
  part:Part[];
  purl="http://localhost:8080/parts/";


  constructor( private http: HttpClient) { }


  addPart(part:Part){
      return this.http.post<Part>(this.purl+"add",part);

  }

  getAllPart(){
    return this.http.get<Part[]>(this.purl+"list");


  }

  detailsPart(id){

    return this.http.get<Part>(this.purl+"details/"+id);
  }

  updatePart(id,part:Part){
    return this.http.post<Part>(this.purl+"edit/"+id,part);
  }

  deletePart(id){
    return this.http.get<Part>(this.purl+"delete/"+id)

  }

}
