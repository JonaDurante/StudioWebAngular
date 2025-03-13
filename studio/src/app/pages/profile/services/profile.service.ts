import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { UserProfile } from '../../../core/models/user-profile';
import { Observable } from 'rxjs';
import { UserToken } from '../../../core/models/user-token';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  private baseUrl: string = environment.urlApi;
  private profileUrl: string = 'Account/UserProfile';

  constructor(private httpClient: HttpClient) {}

  public getProfile(id: string): Observable<UserProfile> {
    return this.httpClient.get<UserProfile>(
      this.baseUrl + 'Account/GetUserDataById/' + id,
    );
  }

  public editProfile(userProfile: UserProfile): Observable<UserToken> {
    return this.httpClient.post<UserToken>(
      this.baseUrl + 'Account/EditUserData',
      userProfile,
    );
  }
}
