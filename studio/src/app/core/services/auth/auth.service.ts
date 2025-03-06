import { computed, Injectable, signal } from '@angular/core';
import { UserToken } from '../../models/user-token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSignal = signal<UserToken | null>(null);
  public user = this.userSignal.asReadonly();
  public isLoggedIn = computed(() => !!this.userSignal());

  public setUser(user: UserToken | null): void {
    this.userSignal.set(user);
  }
}
