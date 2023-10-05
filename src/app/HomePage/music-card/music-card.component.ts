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
    const playlistNameElement = document.querySelector('.playlist-details h2');
    const playlistDescriptionElement = document.querySelector('.playlist-details p');
    const playlistImageElement = document.querySelector('.playlist-image img');

    const playlistName = playlistNameElement ? playlistNameElement.textContent : '';
    const playlistDescription = playlistDescriptionElement ? playlistDescriptionElement.textContent : '';
    const playlistImageSrc = playlistImageElement ? playlistImageElement.getAttribute('src') || '' : '';


    if (playlistName && playlistDescription && playlistImageSrc) {
      this.musicplayerservice.setPlaylistData(playlistName, playlistDescription, playlistImageSrc);
    }
  }
}
