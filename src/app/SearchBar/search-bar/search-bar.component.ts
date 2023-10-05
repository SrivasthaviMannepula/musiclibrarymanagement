import { Component, OnInit } from '@angular/core';
import { SongDetails } from 'src/app/songDetails';
import { SearchService } from 'src/app/search.service'; // Correct the path
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';




@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchTerm = '';
  selectedFilter = 'song'; // Default to 'song'
  filteredItems: SongDetails[] = [];

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchService.getItems().subscribe(items => {
      this.filteredItems = items;
    });
  }

  applyFilter(): void {
    this.filteredItems = this.searchService.filterItems(
      this.searchTerm,
      this.selectedFilter
    );
  }

  selectFilter(filter: string): void {
    this.selectedFilter = filter;
    this.applyFilter();
  }
}
