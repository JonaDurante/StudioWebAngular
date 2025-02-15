import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
  @Input({required: true}) public cardTitle!: string;
  @Input({required: true}) public cardText!: string;
  @Input() public imgSrc?: string;
  @Input() public imgAlt!: string;

  protected hasImage: boolean = false;

  ngOnInit(): void {
    this.hasImage = !!this.imgSrc;
  }
}
