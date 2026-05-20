import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormUtils } from '../../../../shared/utils/form-utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './profile-page.html',
})
export class ProfilePage {
  private router = inject(Router);

  private fb = inject(FormBuilder);

  formUtils = FormUtils;

  myForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    edad: [null, [Validators.required, Validators.min(18)]],
    correo: ['', [Validators.required, Validators.email]],
  });

  get nombre() { return this.myForm.get('nombre')!; }
  get edad() { return this.myForm.get('edad')!; }
  get correo() { return this.myForm.get('correo')!; }

  onSubmit() {
    this.myForm.markAllAsTouched();

    if (this.myForm.invalid) return;

    console.log('Formulario enviado:', this.myForm.value);
    this.router.navigate(['/'])
  }
}