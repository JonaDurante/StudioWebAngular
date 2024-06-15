import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserProfileService } from './service/user-profile.service';
import { UserProfile } from '../../core/models/user-profile';
import { UserToken } from '../../core/models/user-token';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [ReactiveFormsModule, NgStyle, NgClass],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent implements OnInit {
  protected userProfileForm!: FormGroup;
  private userId: string = '75b2120c-7518-47e7-972b-8b266e51ee59';
  protected isReadonly: boolean = true;
  private userToken!: UserToken;
  protected userPhoto!: string;

  constructor(
    private fb: FormBuilder,
    private userProfileService: UserProfileService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.getUser();
  }

  createForm() {
    this.userProfileForm = this.fb.group({
      username: ['', [Validators.required]],
      customusername: ['', [Validators.required]],
      dateofbirth: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
    });
  }

  getUser() {
    // this.userProfileForm.get("username")?.setValue('Manolo');
    // this.userProfileForm.get("customusername")?.setValue('Manolito');
    // this.userProfileForm.get("dateofbirth")?.setValue('12/12/2024');
    // this.userProfileForm.get("phoneNumber")?.setValue('11111111');
    // this.userPhoto = '../../../assets/images/UserProfile.webp'

    this.userProfileService.GetProfile(this.userId).subscribe((x) => {
      this.userProfileForm.get('username')?.setValue(x.userName);
      this.userProfileForm.get('customusername')?.setValue(x.customUserName);
      this.userProfileForm.get('dateofbirth')?.setValue(x.birthday);
      this.userProfileForm.get('phoneNumber')?.setValue(x.phoneNumber);
      this.userPhoto = '../../../assets/images/UserProfile.webp';
    });
  }

  changeReadOnly() {
    this.isReadonly = !this.isReadonly;
    console.log('readonly', this.isReadonly);
    if (this.isReadonly) {
      this.getUser();
    }
  }

  userProfileSubmit() {
    const dto: UserProfile = {
      userName: this.userProfileForm.get('username')?.value,
      customUserName: this.userProfileForm.get('customusername')?.value,
      birthday: this.userProfileForm.get('dateofbirth')?.value,
      userPhoto: this.userPhoto,
      phoneNumber: this.userProfileForm.get('phoneNumber')?.value.toString(),
    };

    this.userProfileService.EditProfile(dto, this.userId).subscribe((res) => {
      if (res) {
        this.userToken = res;
        this.getUser();
      }
    });
  }
}
