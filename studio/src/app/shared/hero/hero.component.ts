import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {
  protected imageUrl = signal<string>('');
  protected title = signal<string>('Donde la Danza Cobra Vida');
  protected subtitle = signal<string>('');
  protected isTitleAnimated = signal<boolean>(false);

  ngOnInit(): void {
      setTimeout(() => {
        this.isTitleAnimated.set(true);
      }, 2000);
  }
}
