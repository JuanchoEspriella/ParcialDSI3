import { Component, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { usuario } from '../../models/usuario';
import { usuarioservice } from '../../services/usuarioservice';


@Component({
  selector: 'app-iniciosesioncomponent',
  standalone: false,
  styleUrl: './iniciosesioncomponent.css',
  templateUrl: './iniciosesioncomponent.html',
})
export class Iniciosesioncomponent {

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  mensaje = '';

  constructor(public service: usuarioservice, private cd: ChangeDetectorRef) {}


  ingresar(): void {
    this.mensaje = '';

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const u = this.form.value as usuario;

    this.service.login(u).subscribe({
      next: (r) => {
        // 1. Guardar el token y el usuario
        this.service.guardar('token', r.token);
        this.service.guardar('username', u.username);


        this.service.listar().subscribe((lista) => {
          const yo = lista.find((x) => x.username === u.username);
          this.service.guardar('rol', yo?.role ?? 'USER');
          this.cd.detectChanges();
        });
      },
      error: (e) => {
        if (e.status === 401) {
          this.mensaje = 'Usuario o contraseña incorrectos.';
        } else {
          this.mensaje = 'No se pudo conectar con el servidor.';
        }
        this.cd.detectChanges();
      },
    });
  }


  salir(): void {
    this.service.cerrarSesion();
    this.form.reset();
    this.mensaje = '';
  }

  esAdmin(): boolean {
    return this.service.leer('rol') === 'ADMIN';
  }
}
