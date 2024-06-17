import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { UserRegister } from '../../../core/models/user-register';
import { Observable } from 'rxjs';
import { UserToken } from '../../../core/models/user-token';

@Injectable({ providedIn: 'root' })
export class RegisterService {
  private baseUrl: string = environment.urlApi;
  private registerUrl: string = 'Account/Register';

  constructor(private httpClient: HttpClient) {}

  public register(userRegister: UserRegister): Observable<UserToken> {
    return this.httpClient.post<UserToken>(
      this.baseUrl + this.registerUrl,
      userRegister
    );
  }
}