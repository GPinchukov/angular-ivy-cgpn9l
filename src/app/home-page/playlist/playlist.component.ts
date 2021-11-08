import {AfterContentChecked, AfterContentInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {PlaylistService} from "../services/playlist.service";
import FastAverageColor from 'fast-average-color';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})


export class PlaylistComponent implements OnInit, AfterContentChecked {


  constructor(private route: ActivatedRoute,
              public playlistserv: PlaylistService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.playlistserv.getPlaylist(params.id)
      console.log(this.playlistserv.playlist_data, 'data of playlist')
    })

  }

  ngAfterContentChecked(): void {
    const fac = new FastAverageColor();
    fac.getColorAsync(this.playlistserv.playlist_data.images[0].url)
      .then(color => {
        this.playlistserv.back = color.hex
      })
  }

}
