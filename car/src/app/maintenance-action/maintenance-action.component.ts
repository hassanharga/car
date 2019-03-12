import { Component, OnInit } from '@angular/core';
import { AuthService } from '../register/auth.service';

@Component({
  selector: 'app-maintenance-action',
  templateUrl: './maintenance-action.component.html',
  styleUrls: ['./maintenance-action.component.css']
})
export class MaintenanceActionComponent implements OnInit {

  constructor(private _auth:AuthService) { }

  ngOnInit() {
  }

}
