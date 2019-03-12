import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/register/auth.service';
import { Contact } from 'src/app/contactus/contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-orders',
  templateUrl: './show-orders.component.html',
  styleUrls: ['./show-orders.component.css']
})
export class ShowfeedbackComponent implements OnInit {

  comlain: Contact[];
  constructor(private _auth: AuthService, private _router: Router) { }

  getallfeedback() {
    this._auth.allcomplain().subscribe(
      a => { console.log(a); this.comlain = a },
      err => { console.log(err) }
    );
  }
  deletefeedback(id) {
    this._auth.deletecomplain(id).subscribe(a => {
      re => console.log("Done");
    }, err => console.log(err)
    );
    setTimeout(() => {
      this.getallfeedback();
    }, 50);

  }
  ngOnInit() {
    this.getallfeedback();
  }

}
