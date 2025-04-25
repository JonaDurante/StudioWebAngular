import { Component, input, OnInit } from '@angular/core';
import { MiniCard } from '../../model/mini-card.model';
import { MiniCardComponent } from '../mini-card/mini-card.component';

@Component({
  selector: 'mini-cards',
  templateUrl: 'mini-cards.component.html',
  styleUrls: ['mini-cards.component.scss'],
  imports: [MiniCardComponent],
})
export class MiniCardsComponent {
  public cards = input.required<MiniCard[]>();
}
