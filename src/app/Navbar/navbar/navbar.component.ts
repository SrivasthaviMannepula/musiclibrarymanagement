import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService } from 'src/app/AuthService';



@Component({

  selector: 'app-navbar',

  templateUrl: './navbar.component.html',

  styleUrls: ['./navbar.component.css'],

})

export class NavbarComponent {

  isLoggedIn = false; // Initially, the user is not logged in



  constructor(private authService: AuthService, private router: Router) {

    // Check if the user is initially logged in

    this.isLoggedIn = this.authService.isLoggedIn;

  }



  login() {

    this.router.navigate(['/login']);

  }



  register() {

    this.router.navigate(['/register']);

  }



  addMusic() {

    this.router.navigate(['/addMusic']);

  }

  logout() {

    // Implement your logout logic here

    this.authService.logout(); // Invoke the logout method

    this.isLoggedIn = false;

  }

}