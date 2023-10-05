import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicPlayerService {

  private playlistNameSubject = new BehaviorSubject<string>('');
  private playlistDescriptionSubject = new BehaviorSubject<string>('');
  private playlistImageSubject = new BehaviorSubject<string>('');

  playlistName$ = this.playlistNameSubject.asObservable();
  playlistDescription$ = this.playlistDescriptionSubject.asObservable();
  playlistImage$ = this.playlistImageSubject.asObservable();

  setPlaylistData(name: string, description: string, imgsource: string) {
    this.playlistNameSubject.next(name);
    this.playlistDescriptionSubject.next(description);
    this.playlistImageSubject.next(imgsource);
  }
}
