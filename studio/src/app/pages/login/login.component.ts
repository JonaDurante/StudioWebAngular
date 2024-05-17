import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  private emailRegex: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  protected loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router:Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.email, Validators.required, Validators.minLength(3), Validators.pattern(this.emailRegex),
        ],
      ],
      password: ['', [Validators.required]],
    });
  }

  loginSubmit() {
    console.log(this.loginForm);
  }

  register() {
    // Redirigir a la página de registro
    this.router.navigate(['/register']);
  }
}
