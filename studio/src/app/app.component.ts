import { Component, HostListener, OnInit } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { ErrorMessageComponent } from './shared/error-message/error-message.component';
import { NavigationEnd, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { LandingComponent } from './pages/public/landing/landing.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    LayoutComponent,
    LoadingComponent,
    ErrorMessageComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  protected isLandingPage = false;
  protected isScrolled = false;
  private unsubscribe$: Subject<void> = new Subject<void>();

  @HostListener('window:scroll', [])
  protected onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(takeUntil(this.unsubscribe$)).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLandingPage = event.urlAfterRedirects === '/landing';
      }
    });
  }
}
