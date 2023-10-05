import { Component, OnInit } from '@angular/core';
import { SongDetails } from 'src/app/songDetails';
import { SearchService } from 'src/app/search.service';
import { MusicbarComponent } from 'src/app/MusicPlayer/musicbar/musicbar.component'; // Update the path

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchTerm = '';
  selectedFilter = 'song';
  filteredResults: { [key: string]: SongDetails[] } = {}; // Use an object to store results by property
  Object: any;
  musicData: any[] = [
    {
      title: 'Song 1',
      artist: 'Artist 1',
      imageUrl: 'URL-to-image-1',
    },
    {
      title: 'Song 2',
      artist: 'Artist 2',
      imageUrl: 'URL-to-image-2',
    },
  ];

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.getItems().subscribe(items => {
      // Initialize the filteredResults object
      this.filteredResults = {
        song: items,
        artist: items,
        music_by: items,
        album: items,
        playlist: items
      };
    });
  }
  addToPlaylist(song: SongDetails): void {
    // Here, you can implement your logic to add the song to a playlist
    console.log('Added to playlist:', song.song);
  }
  applyFilter(): void {
    // Filter results for each property separately
    for (const key in this.filteredResults) {
      if (this.filteredResults.hasOwnProperty(key)) {
        this.filteredResults[key] = this.searchService.filterItems(
          this.searchTerm,
          key
        );
      }
    }
  }

  getFilteredResultKeys(): string[] {
    return Object.keys(this.filteredResults);
  }

  selectFilter(filter: string): void {
    this.selectedFilter = filter;
    this.applyFilter();
  }
}
