import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule ,Validators } from '@angular/forms';
import { UserProfileService } from './service/user-profile.service';

@Component({
    selector: 'app-user-profile',
    imports: [ReactiveFormsModule],
    templateUrl: './user-profile.component.html',
    styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent implements OnInit {
  protected userProfileForm!: FormGroup;
  private userId : string = '75b2120c-7518-47e7-972b-8b266e51ee59';

  constructor(private fb: FormBuilder, private userProfileService: UserProfileService) {}

  ngOnInit(): void {
    this.getUser();
    this.createForm();
  }

  createForm(){
    this.userProfileForm = this.fb.group({
      username:['',[Validators.required]],
      customusername: ['', [Validators.required]],
      dateofbirth: ['', [Validators.required]],
    });
  }

  getUser() {
    this.userProfileService.getProfile(this.userId).subscribe(x => {
      this.userProfileForm.get("username")?.setValue(x.userName)
      this.userProfileForm.get("customusername")?.setValue(x.customUserName)
      this.userProfileForm.get("dateofbirth")?.setValue(x.birthday)
    });
  }
}
