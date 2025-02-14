import { Component } from '@angular/core';
import { ClassesComponent } from '../../shared/classes/classes.component';
import { TestimonialsComponent } from '../../shared/testimonials/testimonials.component';

@Component({
    selector: 'app-home',
    imports: [ClassesComponent, TestimonialsComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {


}
