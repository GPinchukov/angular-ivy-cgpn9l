import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  constructor(public http2: HttpClient) { }

  getSong(): any {
    return this.http2.get<any>(`https://api.spotify.com/v1/me/player/currently-playing`,{
        headers: new HttpHeaders({
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        })
      }
    ).subscribe(adata =>{
      console.log(adata, 'сейчас играет')
    })
  }

  ngOnInit(): void {
   this.getSong()
  }

}
