import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadService {
  private loadingSignal = signal(false);
  public loading = this.loadingSignal.asReadonly();

  public loadingOn() : void {
    this.loadingSignal.set(true);
  }

  public loadingOff() : void {
    this.loadingSignal.set(false);
  }
}
