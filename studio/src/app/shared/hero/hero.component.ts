import {
  AfterViewInit,
  Component,
  ElementRef,
  input,
  OnInit,
  Renderer2,
  signal,
  ViewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  imports: [RouterLink],
})
export class HeroComponent implements OnInit, AfterViewInit {
  public imageUrl = input.required<string>();
  protected title = signal<string>('Donde la Danza Cobra Vida');
  protected subtitle = signal<string>('');
  protected isTitleAnimated = signal<boolean>(false);

  @ViewChild('hero', { static: true }) heroSection!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.isTitleAnimated.set(true);
    }, 3000);
  }

  ngAfterViewInit(): void {
    if (this.heroSection) {
      this.renderer.setStyle(
        this.heroSection.nativeElement,
        'background-image',
        `url(${this.imageUrl()})`,
      );
    }
  }
}
