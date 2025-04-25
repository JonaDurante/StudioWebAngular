import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MiniFooterComponent } from './mini-footer/mini-footer.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  imports: [RouterOutlet, HeaderComponent, MiniFooterComponent],
})
export class LayoutComponent {}
