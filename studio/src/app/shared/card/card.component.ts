import { Component, input, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  public cardTitle = input.required<string>();
  public cardText = input.required<string>();
  public imgSrc = input<string>();
  public imgAlt = input<string>();
  public badgeLevel = input<string>();
  public duration = input<number>();
  public instructor = input<string>();

  protected hasImage: boolean = false;
  protected hasBadge: boolean = false;

  private badgeLevelMap: { [key: string]: string } = {
    Principiante: 'bg-primary',
    Intermedio: 'bg-warning',
    Avanzado: 'bg-success',
  };

  protected get badgeClass(): string {
    if (!this.badgeLevel()) return '';

    return this.badgeLevelMap[this.badgeLevel()!];
  }
}
