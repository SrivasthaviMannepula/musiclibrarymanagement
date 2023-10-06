import { Component, OnInit } from '@angular/core';
import { MusicPlayerService } from 'src/app/music-player.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-musicbar',
  templateUrl: './musicbar.component.html',
  styleUrls: ['./musicbar.component.css']
})
export class MusicbarComponent implements OnInit {
  isPlaying: boolean = false;
  playlistName: string = '';
  playlistDescription: string = '';
  playlistImage: string = '';
  isLiked = false; // Initialize as not liked

  constructor(private musicplayerservice: MusicPlayerService, private http: HttpClient) { }

  // This function will be called when the button is clicked
  handleButtonClick(): void {
    this.isLiked = !this.isLiked; // Toggle the like state

    this.musicplayerservice.playlistName$.subscribe((songName) => {
      if (songName) { // Check if songName is not null or undefined

        // Make an API request to add the song to favorites with the song name
        this.http.post(`http://localhost:8080/api/user-music/song/${songName}/favourite`, {}).subscribe(
          (response) => {
            console.log('Song added to favorites');
          },
          (error) => {
            console.error('Error adding song to favorites', error);
          }
        );

      } else {
        console.error('Song name is not available');
      }
    });
  }

  togglePlayPause(): void {
    this.isPlaying = !this.isPlaying; // Toggle between play and pause
  }


  ngOnInit() {
    this.musicplayerservice.playlistName$.subscribe((name) => (this.playlistName = name));
    this.musicplayerservice.playlistDescription$.subscribe(
      (description) => (this.playlistDescription = description)
    );
    this.musicplayerservice.playlistImage$.subscribe(
      (imgsource) => (this.playlistImage = imgsource)
    );
  }
}
