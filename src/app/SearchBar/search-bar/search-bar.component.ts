import { Component, OnInit } from '@angular/core';

import { SongDetails } from 'src/app/songDetails';

import { SearchService } from './search.service';

// import { SearchService } from 'src/app/search.service';



import { MusicbarComponent } from 'src/app/MusicPlayer/musicbar/musicbar.component'; // Update the path



@Component({

  selector: 'app-search-bar',

  templateUrl: './search-bar.component.html',

  styleUrls: ['./search-bar.component.css']

})

export class SearchBarComponent implements OnInit {

  searchTitle: string | undefined;

  searchBy: string = 'Song';

  searchResults: any[] | undefined;



  constructor(private searchService: SearchService) { }



  ngOnInit(): void { }



  onSubmit(): void {



    const searchDTO = {

      searchTitle: this.searchTitle,

      searchBy: this.searchBy

    };

    console.log("search working, search by " + searchDTO.searchBy + " title " + searchDTO.searchTitle)



    //Call the search service with the search DTO

    this.searchService.searchBy(searchDTO).subscribe((response) => {

      this.searchResults = response;

      console.log("search result " + this.searchResults);

      this.searchTitle = '';

    });

  }

}

