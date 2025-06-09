import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  signup() {
    if (this.username && this.email && this.password) {
      // You can save to localStorage or use a service later
      alert('Signup successful!');
      this.router.navigate(['/login']);
    } else {
      alert('Please fill all fields');
    }
  }
}
