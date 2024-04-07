import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  user: string;
  constructor(private readonly router: Router) {
    this.user = localStorage.getItem('user') || 'NOT USER';
    this.user = this.user.toUpperCase();
  }

  logOut() {
    localStorage.removeItem('user');
    this.router.navigate(['/reservation']);
  }
}
