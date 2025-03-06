import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  imports: [CommonModule, RouterOutlet],
})
export class LayoutComponent {}
