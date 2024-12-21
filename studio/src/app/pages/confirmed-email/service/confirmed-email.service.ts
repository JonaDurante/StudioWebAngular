import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { UserToken } from '../../../core/models/user-token';

@Injectable({
  providedIn: 'root',
})
export class ConfirmedEmailService {
    private baseUrl: string = environment.urlApi;
    private confirmEmailUrl: string = 'Account/ConfirmEmail';

  constructor(private httpClient: HttpClient) {}

    public confirmEmail(confirmationTokenString: string): Observable<UserToken> {
      return this.httpClient.post<UserToken>(
        this.baseUrl + this.confirmEmailUrl,
        confirmationTokenString
      );
    }
}
