import { Component, OnInit } from '@angular/core';
import {PlaylistService} from "../services/playlist.service";
import {AlbumService} from "../services/album.service";

@Component({
  selector: 'app-songs-colum',
  templateUrl: './songs-colum.component.html',
  styleUrls: ['./songs-colum.component.scss']
})
export class SongsColumComponent implements OnInit {

  constructor(public albumServ: AlbumService,
              public playlists: PlaylistService) { }

  ngOnInit(): void {
  }

  playAudio( audio: string ) {
    let song = new Audio(audio);
    return song.play();
  }

}
