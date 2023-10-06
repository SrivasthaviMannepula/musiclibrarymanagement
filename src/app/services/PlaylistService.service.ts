import { Injectable } from '@angular/core';

import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable({

    providedIn: 'root',

})

export class PlaylistService {



    private apiUrl = 'http://localhost:8080/api/user-music';



    constructor(private _http: HttpClient) { }



    createPlaylist(playlistName: String, playlistDescription: String): Observable<number> {



        return this._http.post<number>(`${this.apiUrl}/create-playlist`, { "playlistName": playlistName, "playlistDescription": playlistDescription });



    }



    getPlaylistInfo(): Observable<any> {

        return this._http.post<number>(`${this.apiUrl}/create-playlist`, {});

    }



    getPlaylistSongs(playListId: number): Observable<any> {



        return this._http.get(`${this.apiUrl}/${playListId}/get-playlist-songs`);

    }



    getRecommendSong(): Observable<any> {

        return this._http.get(`http://localhost:8080/api/search/genre/1`);

    }



    addSongToPlaylist(songId: number, playlistId: number): Observable<any> {

        return this._http.post<number>(`${this.apiUrl}/song/${songId}/add-to/${playlistId}`, {});

    }



    removeSongFromPlaylist(songId: number, playlistId: number): Observable<any> {

        return this._http.post<number>(`${this.apiUrl}/song/${songId}/remove-from/${playlistId}`, {});

    }

}