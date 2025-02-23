import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, Signal, signal } from '@angular/core';
import { LoadService } from '../../core/services/load/load.service';

@Component({
  selector: 'loading',
  imports: [],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss',
})
export class LoadingComponent {
  private readonly loadingService = inject(LoadService);
  loading: Signal<boolean> = this.loadingService.loading;

  constructor() {
  }
}
