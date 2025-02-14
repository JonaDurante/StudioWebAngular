import { RedirectFunction } from "@angular/router";

export const AuthRouteResolver: RedirectFunction = () => {
  const isLoggedIn = localStorage.getItem('token');

  if(isLoggedIn) {
   return '/home';
  }else{
   return '/landing';
  }
};
