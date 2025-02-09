import { NgClass } from '@angular/common';
import { Component, OnDestroy, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-navbar',
    imports: [RouterLink, NgClass],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnDestroy {
  protected isLoggedIn = signal(false); ///mover a un store
  protected activeRoute = signal('home');
  protected isDarkMode = signal(false); ///mover a un store


  private unsubscribe$ = new Subject<void>();

  constructor(private router: Router) {
    this.router.events
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeRoute.set(event.url);
      }
    });
  }

  protected toggleDarkMode() {
    this.isDarkMode.set(!this.isDarkMode());
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
