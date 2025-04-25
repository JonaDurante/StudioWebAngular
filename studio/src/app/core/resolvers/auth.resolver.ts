import { RedirectFunction } from '@angular/router';

export const AuthRouteResolver: RedirectFunction = () => {
  const isLoggedIn = localStorage.getItem('token');
  const isAdmin = true;

  if (isLoggedIn) {
    if (isAdmin) {
      return '/dashboard';
    }
    return '/home';
  } else {
    return '/landing';
  }
};
