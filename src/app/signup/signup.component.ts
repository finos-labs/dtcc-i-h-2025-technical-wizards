import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Auth, createUserWithEmailAndPassword, updateProfile } from '@angular/fire/auth';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username = '';
  email = '';
  password = '';

  constructor(private router: Router, private auth: Auth) {}

  signup() {
  if (this.email && this.password && this.username) {
    createUserWithEmailAndPassword(this.auth, this.email, this.password)
      .then(() => {
        localStorage.setItem('username', this.username); // ✅ Store locally
        alert('Signup successful!');
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        alert(error.message);
      });
  } else {
    alert('Please fill all fields');
  }
}


  goToLogin() {
    this.router.navigate(['/login']);
  }
}
