import { Component, OnInit, signal } from '@angular/core';
import { MiniCardComponent } from '../../../../shared/mini-cards/components/mini-card/mini-card.component';

@Component({
  imports: [MiniCardComponent],
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
})
export class DashboardComponent {
  public activeClasses = signal<number>(0);
  public totalStudents = signal<number>(0);
  public activeInstructors = signal<number>(0);
  public revenue = signal<number>(0);

  constructor() {}
}
