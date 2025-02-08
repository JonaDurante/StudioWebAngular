import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ScrollHeaderDirective } from './core/directives/scroll-header.directive';


@Component({
    selector: 'app-root',
    imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, ScrollHeaderDirective],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: true
})
export class AppComponent implements OnInit {
  constructor(){
  }

  ngOnInit(): void {
  }
}
