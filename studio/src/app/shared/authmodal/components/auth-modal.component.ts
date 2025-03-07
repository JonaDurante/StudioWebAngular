import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ModalService } from '../services/modal.service';
import { AsyncPipe } from '@angular/common';
import { RegisterService } from '../../../pages/public/register/service/register.service';
import { UserRegister } from '../../../core/models/user-register';
import { UserLogin } from '../../../core/models/user-login';
import { LoginService } from '../../../pages/public/login/service/login.service';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Router } from '@angular/router';

type tabValues = 'login' | 'register';

@Component({
  selector: 'app-auth-modal',
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.scss',
})
export class AuthModalComponent {
  protected activeTab: tabValues = 'login';
  protected loginForm!: FormGroup;
  protected registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    protected modalService: ModalService,
    private registerService: RegisterService,
    private loginService: LoginService,
    private auth: AuthService,
    private router: Router,
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      birthDate: [''],
    });

    this.loginForm = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
    });
  }

  protected switchTab(tab: tabValues) {
    this.activeTab = tab;
  }

  protected onLogin() {
    const dto: UserLogin = {
      userName: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    };
    this.loginService.login(dto).subscribe((res) => {
      if (res) {
        if (!localStorage.getItem('session-token')) {
          localStorage.setItem('session-token', res.token);
          this.auth.setUser(res);
        }
        this.router.navigateByUrl('home');
      }
    });
  }

  protected onRegister() {
    const dto: UserRegister = {
      userName: this.registerForm.get('username')?.value,
      email: this.registerForm.get('email')?.value,
      password: this.registerForm.get('password')?.value,
      confirmPassword: this.registerForm.get('confirmPassword')?.value,
      birthDate: this.registerForm.get('birthDate')?.value,
    };

    this.registerService.register(dto).subscribe((res) => {
      if (res) {
        localStorage.setItem('session-token', res.token);
        this.onLogin();
      }
    });
  }
}
