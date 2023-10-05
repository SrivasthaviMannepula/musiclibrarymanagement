import { Component, Input } from '@angular/core';
import { MusicPlayerService } from 'src/app/music-player.service';

@Component({
  selector: 'app-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.css']
})
export class MusicCardComponent {
  @Input() music: any;
  constructor(private musicplayerservice: MusicPlayerService) { }

  onClick() {
    const playlistName = (document.querySelector('.playlist-details h2') || {}).textContent;
    const playlistDescription = (document.querySelector('.playlist-details p') || {}).textContent;
    const playlistImageSrc = document.querySelector('.playlist-image img')?.getAttribute('src') || '';


    if (playlistName && playlistDescription && playlistImageSrc) {
      this.musicplayerservice.setPlaylistData(playlistName, playlistDescription, playlistImageSrc);
    }
  }
}
