import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router, private auth: Auth) {}

  login() {
    signInWithEmailAndPassword(this.auth, this.username, this.password)
      .then(() => {
        console.log('Login successful');
        this.router.navigate(['/layout']);
      })
      .catch((error) => {
        console.error('Login error:', error);
        alert(error.message);
      });
  }
}
