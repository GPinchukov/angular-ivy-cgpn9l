import { Component, OnInit } from '@angular/core';
import {LoginService} from "../services/login.service";
import {from, interval, Observable, of} from "rxjs";
import {filter, map} from "rxjs/operators";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(public logServ: LoginService) { }

  public someProperty: any = 0;

  ngOnInit(): void {

    const timer = interval(1000).pipe(
      filter(value => value % 2 !== 0),
      map(value => value * 2)
    );
    timer.subscribe( next =>{
      this.someProperty = next;
    } )

  }

  login() {
    window.location.href = `${this.logServ.SP_AUTH_EP}?client_id=${this.logServ.CLIENT_ID}&redirect_uri=${this.logServ.RER_AFTER_LOG}&scope=${this.logServ.SC_URL_PARAM}&response_type=token&show_dialog=true`
  }
}
