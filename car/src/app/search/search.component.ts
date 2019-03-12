import { Car } from 'src/app/vendors/car';
import { SearchModel } from './shared/search-model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SearchService } from './shared/search.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  carList:Car[];
  modelArray = [];
  @Output() searchEvent = new EventEmitter();
  ser: SearchModel = new SearchModel("-1","-1","-1","-1");
  constructor(private serv:SearchService) { }

  ngOnInit() {
  }

  onSearch(){
    this.serv.getSearchData(this.ser).subscribe(
      a=>{this.carList=a;}
    );
    console.log(this.carList);
    this.searchEvent.emit(this.carList);
  }
  onBrandChange(item){
    if (item == "Ford")
      this.modelArray = ["Fassion","Focused","Suvs","Tuarus"];
    else if (item == "Huyndai"){
      this.modelArray = ["Verrna","Elentra","Accent","Axel","Sonata","Azera"];
    }
    else if (item == "Nissan") {
      this.modelArray = ["Sunny", "Kicks", "GT-s", "Versai"];
    }
    else if (item == "Kia") {
      this.modelArray = ["Serato", "Sportage", "Picanto"];
    }
    else if (item == "Chevrolet"){
      this.modelArray = ["Avio"];
    }
    else if (item == "BMW") {
      this.modelArray = ["ْX-Series", "Bmw 3 Serries","Active Hibared"];
    }
  }
}
