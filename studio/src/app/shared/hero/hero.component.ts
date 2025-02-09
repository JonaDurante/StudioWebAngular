import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {
  protected imageUrl = signal<string>('https://images.unsplash.com/photo-1483481921537-71ee091d87ba?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=M3w2MTg1MTN8MHwxfHNlYXJjaHwyfHxCaWtpbmclMjBpbiUyMHRoZSUyMGNpdHl8ZW58MHwwfHx8MTczOTA1OTY1MHww&ixlib=rb-4.0.3&q=80&w=1200&h=600');
  protected title = signal<string>('Donde la Danza Cobra Vida');
  protected subtitle = signal<string>('');
  protected isTitleAnimated = signal<boolean>(false);

  ngOnInit(): void {
      setTimeout(() => {
        this.isTitleAnimated.set(true);
      }, 2000);
  }
}
