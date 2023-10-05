// src/app/search.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private baseUrl = '/api/search';

  constructor(private http: HttpClient) {}

  getAllSongs(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

  searchBy(searchDTO: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/by`, searchDTO);
  }
}




// import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';
// import { SongDetails } from '../../songDetails'

// @Injectable({
//   providedIn: 'root'
// })
// export class SearchService {
//   private data: SongDetails[] = [
//     { song: "NightChanges", artist: "One Direction", music_by: "One Direction", album: "One Direction", playlist: "One Direction" },
//     { song: "AnotherSong", artist: "Another Artist", music_by: "Another Artist", album: "Another Artist", playlist: "Another Artist" },
//   ];

//   getItems(): Observable<SongDetails[]> {
//     return of(this.data);
//   }

//   filterItems(searchTerm: string, filterBy: string): SongDetails[] {
//     searchTerm = searchTerm.toLowerCase().trim();
//     return this.data.filter(item =>
//       item[filterBy].toLowerCase().includes(searchTerm)
//     );
//   }
// }
