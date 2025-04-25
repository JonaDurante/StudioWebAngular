import { Component, input } from '@angular/core';
import { MiniCard } from '../../model/mini-card.model';
import { DecimalPipe } from '@angular/common';

@Component({
  imports: [DecimalPipe],
  selector: 'mini-card',
  templateUrl: 'mini-card.component.html',
  styleUrls: ['mini-card.component.scss'],
})
export class MiniCardComponent {
  public card = input.required<MiniCard>();
  constructor() {}
}
