import { Component } from '@angular/core';
import {LoginService} from "./home-page/services/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor( public loserv: LoginService) {
  }

  title = 'my-app';
}
