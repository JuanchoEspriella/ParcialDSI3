import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { usuario } from '../../models/usuario';
import { usuarioservice } from '../../services/usuarioservice';


@Component({
  selector: 'app-registercomponent',
  standalone: false,
  styleUrl: './registercomponent.css',
  templateUrl: './registercomponent.html',
})
export class Registercomponent {

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmar: new FormControl('', Validators.required),
  });

  mensaje = '';

  constructor(private service: usuarioservice, private router: Router, private cd: ChangeDetectorRef) {}


  registrar(): void {
    this.mensaje = '';

    if (this.form.invalid) {
      this.form.markAllAsTouched(); // muestra los errores de los campos
      return;
    }
    if (this.form.value.password !== this.form.value.confirmar) {
      this.mensaje = 'Las contraseñas no coinciden.';
      return;
    }


    const u = {
      username: this.form.value.username,
      password: this.form.value.password,
    } as usuario;

    this.service.registrar(u).subscribe({
      next: () => {

        this.router.navigate(['/inicio']);
      },
      error: (e) => {
        if (e.status === 409) {
          this.mensaje = 'Ese usuario ya existe.';
        } else {
          this.mensaje = 'No se pudo registrar el usuario.';
        }
        this.cd.detectChanges();
      },
    });
  }
}
