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
import { finalize } from 'rxjs';

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
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  protected switchTab(tab: tabValues) {
    this.activeTab = tab;
  }

  protected onLogin() {
    const dto: UserLogin = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    };
    this.loginService
      .login(dto)
      .pipe(
        finalize(() => {
          this.modalService.closeModal();
        }),
      )
      .subscribe((res) => {
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
    };

    this.registerService.register(dto).subscribe((res) => {
      if (res) {
        localStorage.setItem('session-token', res.token);
        this.onLogin();
      }
    });
  }
}
