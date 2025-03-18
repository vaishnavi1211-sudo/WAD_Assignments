import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: false
})
export class RegisterComponent {
  email: string = '';
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  registerUser() {
    const user = { email: this.email, username: this.username, password: this.password };

    let users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    alert('User Registered Successfully!');
    this.router.navigate(['/login']);
  }
}
