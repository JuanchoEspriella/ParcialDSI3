import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { usuario } from '../../models/usuario';
import { usuarioservice } from '../../services/usuarioservice';


@Component({
  selector: 'app-admincomponent',
  standalone: false,
  styleUrl: './admincomponent.css',
  templateUrl: './admincomponent.html',
})
export class Admincomponent implements OnInit {
  usuarios: usuario[] = [];


  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl(''),
    role: new FormControl('USER'),
  });


  editandoId = 0;

  mensaje = '';
  exito = false;

  constructor(public service: usuarioservice, private router: Router, private cd: ChangeDetectorRef) {}


  ngOnInit(): void {
    if (this.service.leer('rol') !== 'ADMIN') {
      this.router.navigate(['/inicio']);
      return;
    }
    this.cargar();
  }


  cargar(): void {
    this.service.listar().subscribe((lista) => {
      this.usuarios = lista;
      this.cd.detectChanges();
    });
  }


  guardar(): void {
    this.mensaje = '';

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const u = this.form.value as usuario;

    if (this.editandoId === 0) {

      if (!u.password) {
        this.mostrar('Para crear un usuario la contraseña es obligatoria.', false);
        return;
      }
      this.service.crear(u).subscribe({
        next: (texto) => this.terminar(texto),
        error: (e) => this.mostrar(e.error, false),
      });
    } else {

      this.service.actualizar(this.editandoId, u).subscribe({
        next: (texto) => this.terminar(texto),
        error: (e) => this.mostrar(e.error, false),
      });
    }
  }

  editar(u: usuario): void {
    this.editandoId = u.id ?? 0;
    this.form.setValue({ username: u.username, password: '', role: u.role ?? 'USER' });
    this.mensaje = '';
  }

  eliminar(u: usuario): void {
    this.service.eliminar(u.id ?? 0).subscribe({
      next: (texto) => this.terminar(texto),
      error: (e) => this.mostrar(e.error, false),
    });
  }

  cancelar(): void {
    this.editandoId = 0;
    this.form.reset({ username: '', password: '', role: 'USER' });
  }

  terminar(texto: string): void {
    this.cancelar();
    this.mostrar(texto, true);
    this.cargar();
  }

  mostrar(texto: string, exito: boolean): void {
    this.mensaje = texto;
    this.exito = exito;
    this.cd.detectChanges();
  }
}
