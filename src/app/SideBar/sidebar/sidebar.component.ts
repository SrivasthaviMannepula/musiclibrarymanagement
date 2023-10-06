import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { sidebarService } from 'src/app/services/sidebarService.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  names: any[] = [];

  constructor(private router: Router, private sidebarService: sidebarService) { }

  navigateToCreatePlaylistPage() {
    this.router.navigate(['/createplaylistpage']);
  }

  ngOnInit(): void {
    this.getNames();
  }

  getNames(): void {
    this.sidebarService.getNames().subscribe({
      next: (data) => {
        this.names = data;
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      }
    });
  }

  // Handle name click event
  onNameClick(id: number): void {
    // Navigate to a new page or perform any desired action here
    this.router.navigate(['/playlist', id]);
  }
}
