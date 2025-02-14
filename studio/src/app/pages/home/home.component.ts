import { Component } from '@angular/core';
import { ClassesComponent } from '../../shared/classes/classes.component';
import { TestimonialsComponent } from '../../shared/testimonials/testimonials.component';
import { HeroComponent } from "../../shared/hero/hero.component";

@Component({
    selector: 'app-home',
    imports: [ClassesComponent, TestimonialsComponent, HeroComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {


}
