import { Injectable } from '@angular/core';
import {Playlists} from "./interface";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginService} from "./login.service";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  album_data: any
  public back: any

  constructor(private http: HttpClient,
              public logserv: LoginService) { }

  getAlbum(id: string): any {
    return this.http.get<any>(`https://api.spotify.com/v1/albums/${id}`,{
        headers: new HttpHeaders({
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        })
      }
    ).subscribe(adata =>{
     this.album_data = adata
    })
}
}
