import { Injectable } from '@angular/core';
import {Playlists} from "./interface";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginService} from "./login.service";

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  playlists: Playlists[] = [{
  collaborative: false,
  description: '',
  external_urls: {
    spotify: ''
  },
  href: '',
  id: '',
  images: [{
    height: 0,
    url: '',
    width: 0
  }],
  name: '',
  owner: {
    display_name: '',
    external_urls: {
      spotify: ''
    },
    href: '',
    id: '',
    type: '',
    uri: '',
  },
  primary_color: '',
  public: false,
  snapshot_id: '',
  tracks: {
    href: '',
    total: 0
},
  type: '',
  uri: ''
}]
  playlist_data: any
  public back: any

  constructor(private http: HttpClient,
              public logserv: LoginService) { }

  getPlaylist(id: string): any {
    return this.http.get<any>(`https://api.spotify.com/v1/playlists/${id}`,{
        headers: new HttpHeaders({
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        })
      }
    ).subscribe(adata =>{
     this.playlist_data = adata
    })
}
}
