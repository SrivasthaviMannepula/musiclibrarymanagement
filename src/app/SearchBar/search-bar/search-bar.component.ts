// search-bar.component.ts
import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service'; 

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchTitle: string | undefined;
  searchBy: string = 'Song'; // Default filter option
  searchResults: any[] | undefined;

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    // Create a search DTO based on the selected options
    const searchDTO = {
      searchTitle: this.searchTitle,
      searchBy: this.searchBy
    };

    // Call the search service with the search DTO
    this.searchService.searchBy(searchDTO).subscribe((response) => {
      this.searchResults = response;
    });
  }
}



// import { Component, OnInit } from '@angular/core';
// import { SongDetails } from 'src/app/songDetails';
// import { SearchService } from 'src/app/search.service';
// import { MusicbarComponent } from 'src/app/MusicPlayer/musicbar/musicbar.component'; // Update the path
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-search-bar',
//   templateUrl: './search-bar.component.html',
//   styleUrls: ['./search-bar.component.css']
// })
// export class SearchBarComponent implements OnInit {
//   searchTitle: string = '';
//   searchResults: any[] = [];
//   allSongs: any[] = [];
//   isSearching: boolean = false; // Add this variable

//   constructor(private http: HttpClient) {}

//   ngOnInit() {
//     // Fetch the list of all songs when the component is initialized
//     this.http.get<any[]>('http://8080/api/search/all').subscribe(
//       (response) => {
//         this.allSongs = response;
//       },
//       (error) => {
//         console.error('Error fetching all songs:', error);
//       }
//     );
//   }

//   search(criteria: string, endpoint: string) {
//     this.isSearching = true; // Set isSearching to true when starting a search
//     const searchDTO = { [criteria]: this.searchTitle };
//     this.http.post<any[]>(endpoint, searchDTO).subscribe(
//       (response) => {
//         this.searchResults = response;
//         this.isSearching = false; // Set isSearching back to false when search is complete
//       },
//       (error) => {
//         console.error(`Error searching ${criteria}:`, error);
//         this.isSearching = false; // Set isSearching to false on error too
//       }
//     );
//   }

//   searchBySong() {
//     this.search('searchTitle', '/api/search/by');
//   }

//   searchByArtist() {
//     this.search('searchArtist', '/api/search/by');
//   }

//   searchByAlbum() {
//     this.search('searchAlbum', '/api/search/by');
//   }
//   searchByDirector() {
//     this.search('searchAlbum', '/api/search/by');
//   }
// }
