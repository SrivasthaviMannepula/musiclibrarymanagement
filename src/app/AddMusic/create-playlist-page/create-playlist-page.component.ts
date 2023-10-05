import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-playlist-page',
  templateUrl: './create-playlist-page.component.html',
  styleUrls: ['./create-playlist-page.component.css']
})
export class CreatePlaylistPageComponent {
  playlistName: string = '';
  description: string = '';

  constructor(private router: Router) { }

  createPlaylist() {
    // Perform playlist creation logic here
    // You can access the playlistName and description values
    // Navigate back to the previous page or perform other actions as needed
    this.router.navigate(['/']); // Example: Navigate back to the home page
  }
}
