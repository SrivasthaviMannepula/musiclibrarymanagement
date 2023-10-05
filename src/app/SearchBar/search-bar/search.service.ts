import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { SongDetails } from '../../songDetails'



@Injectable({

  providedIn: 'root'

})

export class SearchService {



  private baseUrl = 'http://localhost:8080/api/search';



  constructor(private http: HttpClient) { }



  getAllSongs(): Observable<any> {

    return this.http.get(`${this.baseUrl}/all`);

  }





  searchBy(searchDTO: any): Observable<any> {

    return this.http.post(`${this.baseUrl}/by`, searchDTO);

  }

}

