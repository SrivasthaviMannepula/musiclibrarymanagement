import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  musicData: any[] = []; // Array to store music data from the API
  musicDataEle: any[] = []; // Array to store music data from the API
  musicDataHip: any[] = []; // Array to store music data from the API

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    // Make an HTTP GET request to the API
    this.httpClient.get('http://localhost:8080/api/search/genre/1')
      .subscribe((data: any) => {
        // Assign the response data to the musicData array
        this.musicData = data;
      });

    this.httpClient.get('http://localhost:8080/api/search/genre/2')
      .subscribe((data: any) => {
        // Assign the response data to the musicData array
        this.musicDataEle = data;
      });

    this.httpClient.get('http://localhost:8080/api/search/genre/3')
      .subscribe((data: any) => {
        // Assign the response data to the musicData array
        this.musicDataHip = data;
      });
  }
}
