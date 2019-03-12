import { Component, OnInit } from '@angular/core';
import { AuthService } from '../register/auth.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  constructor(private _auth:AuthService) { }

  ngOnInit() {
  }

}
