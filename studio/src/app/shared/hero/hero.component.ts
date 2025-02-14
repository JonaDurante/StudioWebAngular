import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {
  protected imageUrl = signal<string>('https://plus.unsplash.com/premium_photo-1682089706055-d5ef14dc14e4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  protected title = signal<string>('Donde la Danza Cobra Vida');
  protected subtitle = signal<string>('');
  protected isTitleAnimated = signal<boolean>(false);

  ngOnInit(): void {
      setTimeout(() => {
        this.isTitleAnimated.set(true);
      }, 2000);
  }
}
