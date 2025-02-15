import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserProfile } from '../../../core/models/user-profile';
import { Observable } from 'rxjs';
import { UserToken } from '../../../core/models/user-token';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  private baseUrl: string = 'https://localhost:7253/';
  private registerUrl: string = 'Account/GetUserData';

  constructor(private httpClient: HttpClient) {}

  public getProfile(id: string): Observable<UserProfile> {
    return this.httpClient.get<UserProfile>(
      this.baseUrl + 'Account/GetUserDataById/' + id
    );
  }

  public editProfile(userProfile: UserProfile): Observable<UserToken> {
    return this.httpClient.post<UserToken>(
      this.baseUrl + 'Account/EditUserData', userProfile
    );
  }
}
