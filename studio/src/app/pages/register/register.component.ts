import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RegisterService } from './service/register.service';
import { UserRegister } from '../../core/models/user-register';
import { UserToken } from '../../core/models/user-token';
import { BehaviorSubject, catchError, of, Subject, takeUntil } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  protected registerForm!: FormGroup;
  private readonly unsuscribe$: Subject<void> = new Subject;

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService,
    private toaster: ToastrService,
    private router: Router
  ) {}

  ngOnDestroy(): void {
    this.unsuscribe$.next();
    this.unsuscribe$.complete();
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
    });
  }

  registerSubmit() {
    const dto: UserRegister = {
      userName: this.registerForm.get('username')?.value,
      email: this.registerForm.get('email')?.value,
      password: this.registerForm.get('password')?.value,
      confirmPassword: this.registerForm.get('confirmPassword')?.value,
      birthDate: this.registerForm.get('birthDate')?.value,
    };
    this.registerService
      .register(dto)
      .pipe(
        takeUntil(this.unsuscribe$)
      )
      .subscribe((res) => {
        this.toaster.success("Check your Email")
        this.router.navigate(['home'])
      });
  }
}
