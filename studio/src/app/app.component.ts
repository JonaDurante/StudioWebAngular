import { Component, HostListener, OnInit } from '@angular/core';
import { LoadingComponent } from './shared/loading/loading.component';
import { ErrorMessageComponent } from './shared/error-message/error-message.component';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AuthModalComponent } from './shared/authmodal/components/auth-modal.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    LoadingComponent,
    ErrorMessageComponent,
    AuthModalComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
