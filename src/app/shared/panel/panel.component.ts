import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent {
  user: string;
  constructor(private readonly router: Router) {
    this.user = localStorage.getItem('user') || 'NOT USER';
    this.user = this.user.toUpperCase();
  }

  logOut() {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }
}
