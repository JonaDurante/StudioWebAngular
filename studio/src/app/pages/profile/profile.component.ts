import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './components/avatar/avatar.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { UserAvatar } from './components/avatar/models/user-avatar';
import { UserData } from './components/user-data/models/user-data';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, AvatarComponent, UserDataComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  protected userProfile = signal({
    username: 'DanceStar123',
    fullName: 'Alice Johnson',
    dateOfBirth: '1990-05-15',
    email: 'alice@example.com',
    address: '123 Dance Street, Rhythm City, RC 12345',
    phone: '+1 (555) 123-4567',
    avatarUrl: 'https://via.placeholder.com/150',
  });

  protected userAvatar = signal<UserAvatar>({
    avatarUrl: this.userProfile().avatarUrl,
    fullName: this.userProfile().fullName,
    userName: this.userProfile().username,
  });

  protected userData = signal<UserData>({
    fullName: this.userProfile().fullName,
    address: this.userProfile().address,
    dateOfBirth: this.userProfile().dateOfBirth,
    email: this.userProfile().email,
    phone: this.userProfile().phone,
  });

  protected onEdit() {}
}
