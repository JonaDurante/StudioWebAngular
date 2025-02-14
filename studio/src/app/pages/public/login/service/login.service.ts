import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment.development';
import { UserLogin } from '../../../../core/models/user-login';
import { UserToken } from '../../../../core/models/user-token';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private baseUrl: string = environment.urlApi;
  private loginUrl: string = 'Account/Login';

  constructor(private httpClient: HttpClient) {}

  public login(userLogin: UserLogin): Observable<UserToken> {
    return this.httpClient.post<UserToken>(
      this.baseUrl + this.loginUrl,
      userLogin
    );
  }
}
