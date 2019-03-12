import { SearchModel } from './search-model';
import { Car } from './../../vendors/car';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url = "http://localhost:8080/cars/";

  constructor(private http: HttpClient) { }

  getSearchData(ser:SearchModel) {
    return this.http.post<Car[]>(this.url + "Search",ser);
  }
}
