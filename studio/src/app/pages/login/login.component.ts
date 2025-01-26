import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserLogin } from '../../core/models/user-login';
import { LoginService } from './service/login.service';
import { UserToken } from '../../core/models/user-token';

@Component({
    selector: 'app-login',
    imports: [ReactiveFormsModule, RouterModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  private emailRegex: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  protected loginForm!: FormGroup;
  private userToken !: UserToken;

  constructor(private fb: FormBuilder, private loginService:LoginService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.email,
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(this.emailRegex),
        ],
      ],
      password: ['', [Validators.required]],
    });
  }

  loginSubmit() {
    const dto: UserLogin = {
      userName: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    };
    this.loginService.login(dto).subscribe((res) => {
      if(res){
        this.userToken = res;
      }
    })
  }
}
