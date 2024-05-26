import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RegisterService } from './service/register.service';
import { UserRegister } from '../../core/models/user-register';
import { UserToken } from '../../core/models/user-token';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  protected registerForm!: FormGroup;
  private userToken!: UserToken;

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  registerSubmit() {
    const dto: UserRegister = {
      userName: this.registerForm.get('username')?.value,
      email: this.registerForm.get('email')?.value,
      password: this.registerForm.get('password')?.value,
      confirmPassword: this.registerForm.get('confirmPassword')?.value,
      birthdate: '27/02/1995',
    };
    this.registerService.register(dto).subscribe((res) => {
      if (res) {
        this.userToken = res;
        console.log(this.userToken);
      }
    });
  }
}
