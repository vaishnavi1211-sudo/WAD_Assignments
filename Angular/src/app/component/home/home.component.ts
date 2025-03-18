import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false
})
export class HomeComponent {
  user: any = null;

  constructor(private router: Router) {}

  ngOnInit() {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    } else {
      alert('No user logged in!');
      this.router.navigate(['/login']);
    }
  }

  logout() {
    localStorage.removeItem('loggedInUser');
    alert('Logged out successfully!');
    this.router.navigate(['/login']);
  }
}
