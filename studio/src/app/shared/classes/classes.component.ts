import { Component, signal } from '@angular/core';
import { Class } from './models/class.model';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-classes',
  imports: [CardComponent],
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.scss'
})
export class ClassesComponent {
  protected classes = signal<Class[]>([
    { name: 'Ballet',
      description: 'Clases de ballet para todas las edades y niveles.',
      imageUrl: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      imageAlt: 'Ballet class'},
    { name: 'Jazz',
      description: 'Clases de jazz para todas las edades y niveles.',
      imageUrl: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      imageAlt: 'Jazz class'
    },
    { name: 'Hip Hop', description: 'Clases de hip hop para todas las edades y niveles.',
      imageUrl: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      imageAlt: 'Hip hop class'
     },
  ])
}
