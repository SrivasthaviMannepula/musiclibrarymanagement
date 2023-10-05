import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Album } from 'src/app/album.model';

@Component({
  selector: 'app-add-music',
  templateUrl: './add-music.component.html',
  styleUrls: ['./add-music.component.css']
})
export class AddMusicComponent {

  constructor(private _http: HttpClient) { }

  album: Album = {
    albumName: '',
    albumLength: 0,
    numOfSongs: 0,
    streams: 0,
    albumSongs: [
      {
        songTitle: '',
        songDuration: 0,
        streams: 0,
        genreId: 1, // Default genre ID, change as needed
        directorName: '',
      },
    ],
  };

  addSong() {
    this.album.albumSongs.push({
      songTitle: '',
      songDuration: 0,
      streams: 0,
      genreId: 1, // Default genre ID, change as needed
      directorName: '',
    });
  }

  onSubmit() {
    const url = `http://localhost:8080/api/music-library/create-album`;

    this._http
      .post(url, this.album, {
        responseType: 'text',
      })
      .subscribe({
        next: (response) => {
          console.log('Album created successfully:', response);
        },
        error: (error) => {
          console.error('Error creating album:', error);
        },
      });
  }
}
