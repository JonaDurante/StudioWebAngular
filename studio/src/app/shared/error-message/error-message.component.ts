import { Component, inject } from '@angular/core';
import { ErrorMessageService } from '../../core/services/error/error-message.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'error-message',
  imports: [NgClass],
  templateUrl: './error-message.component.html',
  styleUrl: './error-message.component.scss'
})
export class ErrorMessageComponent {
  private readonly errorService = inject(ErrorMessageService);

  protected message = this.errorService.message;

  protected onClose() {
    this.errorService.clear();
  }
}
