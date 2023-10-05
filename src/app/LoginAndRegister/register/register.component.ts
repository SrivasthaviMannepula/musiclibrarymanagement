
import { Component } from '@angular/core';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  userForm: any = {}; 

  constructor(private registrationService: RegistrationService) {}

  registerUser(): void {
    this.registrationService.registerUser(this.userForm).subscribe(
      (response) => {
        console.log('Registration success:', response);
      },
      (error) => {
        console.error('Registration error:', error);
      }
    );
  }
}
