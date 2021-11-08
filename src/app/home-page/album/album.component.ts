import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component, DoCheck,
  OnChanges,
  OnInit
} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {PlaylistService} from "../services/playlist.service";
import FastAverageColor from "fast-average-color";
import {AlbumService} from "../services/album.service";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit, AfterContentChecked {

  constructor(private route: ActivatedRoute,
              public albumserv: AlbumService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.albumserv.getAlbum(params.id)
      console.log(this.albumserv.album_data, 'data of album')
    })

  }



  ngAfterContentChecked(): void {
    const col = new FastAverageColor();
    col.getColorAsync(this.albumserv.album_data.images[0].url)
      .then(color => {
        this.albumserv.back = color.hex
      })
  }

}
