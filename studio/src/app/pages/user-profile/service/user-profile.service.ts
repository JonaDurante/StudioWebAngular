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
  private getProfileUrl: string = 'Account/GetUserDataById/';
  private editProfileUrl: string = 'Account/EditUserData';

  constructor(private httpClient: HttpClient) {}

  public GetProfile(id: string): Observable<UserProfile> {
    return this.httpClient.get<UserProfile>(
      this.baseUrl + this.getProfileUrl + id
    );
  }

  public EditProfile(userProfile: UserProfile, idUser : string): Observable<UserToken> {
    return this.httpClient.post<UserToken>(
      this.baseUrl + this.editProfileUrl, {userProfile, idUser}
    );
  }
}
