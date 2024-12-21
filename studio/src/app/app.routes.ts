import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {RegisterComponent} from './pages/register/register.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { ConfirmedEmailComponent } from './pages/confirmed-email/confirmed-email.component';
import { VideosComponent } from './pages/videos/videos.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: 'profile',
    component: UserProfileComponent,
  },
  {
    path: 'videos',
    component: VideosComponent,
  },
  {
    path: 'confirmed-email',
    component: ConfirmedEmailComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];
