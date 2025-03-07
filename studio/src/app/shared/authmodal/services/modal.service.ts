import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private isModalOpen = new BehaviorSubject<boolean>(false);
  public currentModalState = this.isModalOpen.asObservable();

  public openModal() {
    this.isModalOpen.next(true);
  }

  public closeModal() {
    this.isModalOpen.next(false);
  }
}
