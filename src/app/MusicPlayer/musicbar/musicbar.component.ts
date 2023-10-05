import { Component } from '@angular/core';

@Component({
  selector: 'app-musicbar',
  templateUrl: './musicbar.component.html',
  styleUrls: ['./musicbar.component.css']
})
export class MusicbarComponent {
  iconStyles: any = {}; // Object to hold icon styles
  iconColor: string = 'black'; // Initial icon color
  isPlaying: boolean = false;

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
}
