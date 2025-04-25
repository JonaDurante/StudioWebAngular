import { Component, HostListener } from '@angular/core';
import { ClassesComponent } from '../../../shared/classes/classes.component';
import { HeroComponent } from '../../../shared/hero/hero.component';
import { HeaderComponent } from '../../../layout/header/header.component';
import { BigFooterComponent } from '../../../layout/big-footer/big-footer.component';

@Component({
  selector: 'app-landing',
  imports: [ClassesComponent, HeroComponent, HeaderComponent, BigFooterComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  protected isScrolled = false;
  protected imageUrl: string =
    '../../../../assets/images/backgrounds/landing-background-1.jpg';

  @HostListener('window:scroll', [])
  protected onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}
