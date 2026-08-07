import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-recruitment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './recruitment-form.html',
  styleUrl: './recruitment-form.css'
})
export class RecruitmentFormComponent {
  form: FormGroup;
  isSubmitting = false;
  submitted = false;

  experienceOptions = ['1-3 años', '3-5 años', 'Más de 5 años'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombreCompleto: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      direccion: ['', Validators.required],
      modeloVehiculo: ['', Validators.required],
      anioPlaca: ['', Validators.required],
      experiencia: [this.experienceOptions[0], Validators.required]
    });
  }

  onSubmit(): void {
    if (this.form.invalid || this.isSubmitting) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    // TODO: reemplazar por la llamada real a tu API/backend
    setTimeout(() => {
      this.isSubmitting = false;
      this.submitted = true;
      this.form.reset({ experiencia: this.experienceOptions[0] });

      setTimeout(() => {
        this.submitted = false;
      }, 3000);
    }, 1500);
  }
}