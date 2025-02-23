import { Injectable, signal } from '@angular/core';
import { Message } from '../../models/error-message/message';
import { MessageSeverity } from '../../models/error-message/message-severity';

@Injectable({
  providedIn: 'root'
})
export class ErrorMessageService {
  private messageSignal = signal<Message | null>(null);
  public message = this.messageSignal.asReadonly();

  public showMessage(message: string, severity: MessageSeverity): void {
    this.messageSignal.set({
      message: message,
      severity: severity
    })
  }

  public clear() {
    this.messageSignal.set(null);
  }
}
