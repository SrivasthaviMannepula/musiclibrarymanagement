import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/AuthService';
import { User } from 'src/app/user';
import { catchError } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) { }
  user: User = {
    username: '',
    password: ''
  };

  login(): void {
    this.authService.login(this.user).pipe(
      catchError((error) => {
        console.error('Login failed:', error);
        throw error;
      })
    ).subscribe((response) => {
      const token = response.token;
      this.authService.setToken(token);
      this.router.navigate(['/home']);
    });
  }
}
