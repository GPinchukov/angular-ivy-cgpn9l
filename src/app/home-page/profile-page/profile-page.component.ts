import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Params, Router} from "@angular/router";
import {Observable} from "rxjs";
import { map } from 'rxjs/operators';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../services/interface";
import {LoginService} from "../services/login.service";
import {PlaylistService} from "../services/playlist.service";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})


export class ProfilePageComponent implements OnInit {

  ddata: any


  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              public logserv: LoginService,
              public playlists: PlaylistService
             ){


  }

  fetchData(): any {
    return this.http.get<User>('https://api.spotify.com/v1/me',{
        headers: new HttpHeaders({
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        })
      }
    ).subscribe(data =>{
      console.log(data.display_name)
      this.logserv.user = data;
      console.log(data.images,'картинка' )
      // this.user = data;
      // this.user.id = data.id;
    })
  }

  fetchPlaylistData(): any {
    return this.http.get<any>('https://api.spotify.com/v1/me/playlists?limit=16',{
        headers: new HttpHeaders({
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        })
      }
    ).subscribe(pdata =>{
       this.playlists.playlists = pdata.items;
      console.log(this.playlists.playlists, 'playlists2')
    })
  }

  fetchAlbumsData(): any {
    return this.http.get<any>('https://api.spotify.com/v1/me/albums?limit=16',{
        headers: new HttpHeaders({
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        })
      }
    ).subscribe(adata =>{
      this.ddata = adata.items
      console.log(adata, 'albums')
    })
  }


  ngOnInit(): void {
      this.route.fragment.subscribe((data: any) => {
        this.logserv.token = data.match(/access_token=(.*?)&/)[1];
        localStorage.setItem('token', this.logserv.token);
      })

    this.fetchData();
    this.fetchPlaylistData();
    this.fetchAlbumsData();
    }

}
