import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReceivedSong } from './home-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  musicData: ReceivedSong[] = [];

  musicDataEle: ReceivedSong[] = [];

  musicDataHip: ReceivedSong[] = [];



  constructor(private httpClient: HttpClient) { }



  ngOnInit() {







    this.httpClient.get<ReceivedSong[]>('http://localhost:8080/api/search/genre/1')

      .subscribe((data: ReceivedSong[]) => {

        this.musicData = data;

        console.log("music data " + this.musicData)

      });



    this.httpClient.get<ReceivedSong[]>('http://localhost:8080/api/search/genre/1')

      .subscribe((data: ReceivedSong[]) => {

        this.musicDataEle = data;

        console.log("music data " + this.musicData)

      });



    this.httpClient.get<ReceivedSong[]>('http://localhost:8080/api/search/genre/1')

      .subscribe((data: ReceivedSong[]) => {

        this.musicDataHip = data;

        console.log("music data " + this.musicData)

      });



  }
}
