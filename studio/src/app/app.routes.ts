import { Routes } from '@angular/router';
import { AuthRouteResolver } from './core/resolvers/auth.resolver';

export const routes: Routes = [
  { path: '', redirectTo: AuthRouteResolver, pathMatch: 'full' },

  //Public routes
  {
    path: 'landing',
    loadComponent: () =>
      import('./pages/public/landing/landing.component').then(
        (m) => m.LandingComponent,
      ),
  },
  {
    path: 'not-found',
    loadComponent: () =>
      import('./pages/public/not-found/not-found.component').then(
        (m) => m.NotFoundComponent,
      ),
  },

  //Private routes
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./pages/profile/profile.component').then(
        (m) => m.ProfileComponent,
      ),
  },
  {
    path: 'videos',
    loadComponent: () =>
      import('./pages/videos/videos.component').then((m) => m.VideosComponent),
  },

  {
    path: '**',
    redirectTo: 'not-found',
  },
];
