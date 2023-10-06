import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlaylistService } from 'src/app/services/PlaylistService.service';

@Component({
  selector: 'app-create-playlist-page',
  templateUrl: './create-playlist-page.component.html',
  styleUrls: ['./create-playlist-page.component.css']
})
export class CreatePlaylistPageComponent {

  playlistName: string = '';

  description: string = '';

  playListId?: number;



  constructor(private router: Router, private playlistService: PlaylistService) { }



  createPlaylist() {



    this.playlistService.createPlaylist(this.playlistName, this.playlistName).subscribe((response) => {

      this.playListId = response;

      console.log(this.playListId);

      this.router.navigate(['/playlist', this.playListId]);

    });



  }



}