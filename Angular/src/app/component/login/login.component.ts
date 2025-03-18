import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  loginUser() {
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.username === this.username && u.password === this.password);

    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      alert('Login Successful!');
      this.router.navigate(['/home']);
    } else {
      alert('Invalid username or password!');
    }
  }
}
