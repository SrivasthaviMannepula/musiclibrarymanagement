import { Component, OnInit } from '@angular/core';
import { MusicPlayerService } from 'src/app/music-player.service';

@Component({
  selector: 'app-musicbar',
  templateUrl: './musicbar.component.html',
  styleUrls: ['./musicbar.component.css']
})
export class MusicbarComponent implements OnInit {
  iconStyles: any = {}; // Object to hold icon styles
  iconColor: string = 'black'; // Initial icon color
  isPlaying: boolean = false;
  playlistName: string = '';
  playlistDescription: string = '';
  playlistImage: string = '';

  constructor(private musicplayerservice: MusicPlayerService) { }

  // This function will be called when the button is clicked
  handleButtonClick(): void {
    // Change the icon color to red
    this.iconStyles = {
      'color': 'red'
    };
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
