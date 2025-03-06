import { Component, HostListener } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
    selector: 'app-header',
    imports: [NavbarComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {

   isScrolled = false;

    @HostListener("window:scroll", [])
    onWindowScroll() {
      this.isScrolled = window.scrollY > 50;
    }

}
