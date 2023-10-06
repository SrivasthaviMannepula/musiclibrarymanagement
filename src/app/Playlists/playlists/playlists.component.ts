import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistService } from 'src/app/services/PlaylistService.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent {



  playlistName: string = 'test';

  description: string = 'des';

  playlistSongs?: any[];

  recommendSongs?: any[];

  playlistId?: number;



  constructor(private route: ActivatedRoute, private playlistService: PlaylistService) { }



  ngOnInit() {

    this.route.params.subscribe(params => {

      const data: number = params['data'];

      this.playlistId = data;

      this.playlistService.getPlaylistSongs(data).subscribe((response: any[]) => {

        this.playlistSongs = response;

        console.log(response);

        this.playlistService.getRecommendSong().subscribe((response: any[]) => {

          this.recommendSongs = response;

          console.log(response);



        });

      });

    });

  }



  getupdatedData() {

    if (this.playlistId) {

      this.playlistService.getPlaylistSongs(this.playlistId).subscribe((response: any[]) => {

        this.playlistSongs = response;

        console.log(response);

      });

    }

  }



  addSong(songId: number): void {

    if (this.playlistId) {

      this.playlistService.addSongToPlaylist(songId, this.playlistId).subscribe((response) => {



        console.log(response);

        this.getupdatedData();

      });

    }

  }



  removeSong(songId: number): void {

    if (this.playlistId) {

      this.playlistService.removeSongFromPlaylist(songId, this.playlistId).subscribe((response) => {



        console.log(response);

        this.getupdatedData();

      });

    }

  }



}


