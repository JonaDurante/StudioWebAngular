import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-logo',
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent {
  protected color = signal<string>('white');

  changeColor(): void {
    this.color.set('#ab73ff');
  }

}
