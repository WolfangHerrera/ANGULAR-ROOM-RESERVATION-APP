import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = localStorage.getItem('user');
  if (isLoggedIn) {
    return true;
  } else {
    window.location.href = '/user';
    return false;
  }
};
