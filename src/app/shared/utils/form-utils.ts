import { FormGroup, ValidationErrors } from '@angular/forms';

export class FormUtils {

  static isValidField(form: FormGroup, field: string): boolean {
    const control = form.get(field);
    return !!control && control.touched && control.errors !== null;
  }

  static getFieldError(form: FormGroup, field: string): string | null {
    const control = form.get(field);
    if (!control) return null;

    return this.getErrorMessage(control.errors);
  }

  static getErrorMessage(errors: ValidationErrors | null): string | null {
    if (!errors) return null;

    if (errors['required']) return 'Este campo es requerido';
    if (errors['minlength']) return `Mínimo ${errors['minlength'].requiredLength} caracteres`;
    if (errors['min']) return `Debe ser mayor o igual a ${errors['min'].min}`;
    if (errors['email']) return 'Correo inválido';

    return 'Campo inválido';
  }
}