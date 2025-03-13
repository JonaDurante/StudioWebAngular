import { Component, input, Input } from '@angular/core';
import { UserData } from './models/user-data';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss'],
})
export class UserDataComponent {
  public userData = input.required<UserData>();
}
