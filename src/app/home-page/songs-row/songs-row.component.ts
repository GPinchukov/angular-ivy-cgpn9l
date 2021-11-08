import { Component, OnInit } from '@angular/core';
import {PlaylistService} from "../services/playlist.service";

@Component({
  selector: 'app-songs-row',
  templateUrl: './songs-row.component.html',
  styleUrls: ['./songs-row.component.scss']
})
export class SongsRowComponent implements OnInit {

  constructor(public plServ: PlaylistService) { }

  ngOnInit(): void {
  }

  playAudio( audio: string ) {
    let song = new Audio(audio);
    return song.play();
  }

}
