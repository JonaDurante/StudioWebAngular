import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAvatar } from './models/user-avatar';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  public userAvatar = input.required<UserAvatar>();
}
