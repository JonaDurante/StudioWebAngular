import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule ,Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent implements OnInit {
  protected userProfileForm!: FormGroup;

  constructor(private fb: FormBuilder) {}
  
  ngOnInit(): void {
    this.userProfileForm = this.fb.group({
      username:['',[Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      DateOfBirth: ['', [Validators.required]],
    });
  }
}
