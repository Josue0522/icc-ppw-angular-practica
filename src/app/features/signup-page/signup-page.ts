import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { passwordMatchValidator } from './validators/password-match.validator';
import { emailUniqueValidator } from './validators/email-unique.validator';
import { email } from '@angular/forms/signals';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signup-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupPage {

private router = inject(Router);

onSubmit() {
  if (this.form.invalid) {
    // Marcar todos los campos como touched para mostrar errores
    this.form.markAllAsTouched();

    return;
  }

  console.log('Datos del formulario:', this.form.value);
  
  // Por ahora, navegar a home
  this.router.navigate(['/']);
}
  
  /* emailControl = new FormControl(
    '',
    [Validators.required, Validators.email]
  );

  

  get email(){
    return this.emailControl;
  } */
  
  private fb = inject(FormBuilder);

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email],[emailUniqueValidator()]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required]]
  },
  {validators: passwordMatchValidator}
);

  get email() {return this.form.get('email')!;}
  get password() {return this.form.get('password')!;}
  get confirmPassword() {return this.form.get('confirmPassword')!;}
}

