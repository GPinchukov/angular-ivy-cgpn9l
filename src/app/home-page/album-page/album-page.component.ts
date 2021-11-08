import { Component, OnInit } from '@angular/core';
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.scss']
})
export class AlbumPageComponent implements OnInit {

  constructor(public logServ: LoginService ) { }

  ngOnInit(): void {
  }

  login() {
    window.location.href = `${this.logServ.SP_AUTH_EP}?client_id=${this.logServ.CLIENT_ID}&redirect_uri=${this.logServ.RER_AFTER_LOG}&scope=${this.logServ.SC_URL_PARAM}&response_type=token&show_dialog=true`
  }
}
