import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, signOut } from 'firebase/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  username: string | null = '';

  constructor(private router: Router) {
    this.username = localStorage.getItem('username'); // get name from localStorage
  }

  newChat() {
    window.location.reload(); // hard refresh the page
  }

  
  goToLogin() {
    this.router.navigate(['/login']);
  }
}

  

