import { Component } from '@angular/core';
import { ClassesComponent } from '../../../shared/classes/classes.component';
import { HeroComponent } from '../../../shared/hero/hero.component';

@Component({
  selector: 'app-landing',
  imports: [ClassesComponent, HeroComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  protected imageUrl: string =
    '../../../../assets/images/backgrounds/landing-background-1.jpg';
}
