import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import {NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent]
})
export class LayoutComponent implements OnInit, OnDestroy {
  protected isMobile = false; /// Checkear si hay que utilizar
  protected isScrolled = false;
  protected isLandingPage = false;
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router) {}

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  ngOnInit() {
    this.router.events.pipe(takeUntil(this.unsubscribe$)).subscribe((event) => {
      if(event instanceof NavigationEnd) {
        this.isLandingPage = event.urlAfterRedirects === '/landing';
      }
    });

    this.breakpointObserver.observe([Breakpoints.Handset]) // Observa el breakpoint 'Handset' (dispositivos móviles)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(result => {
        this.isMobile = result.matches;
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
