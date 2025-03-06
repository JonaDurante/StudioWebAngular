import { Component, signal } from '@angular/core';
import { Testimonial } from './models/testimonial.model';

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  protected testimonials = signal<Testimonial[]>([
    { name: 'Ana Pérez', quote: '¡Pegasus me ha cambiado la vida!' },
    { name: 'Juan Rodríguez', quote: 'Las clases son increíbles.' },
  ]);
}
