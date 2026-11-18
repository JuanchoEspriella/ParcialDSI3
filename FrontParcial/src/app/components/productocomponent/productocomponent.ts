import { Component, ChangeDetectorRef, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { producto } from '../../models/producto';
import { productoservice } from '../../services/productoservice';

@Component({
  selector: 'app-productocomponent',
  standalone: false,
  styleUrl: './productocomponent.css',
  templateUrl: './productocomponent.html',
})
export class Productocomponent {

  private service = inject(productoservice);
  private cd = inject(ChangeDetectorRef);


  form = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0, [Validators.required, Validators.min(1)]),
    stock: new FormControl(0, [Validators.required, Validators.min(0)]),
    fechaVencimiento: new FormControl('', Validators.required),
    disponible: new FormControl(true),
  });

  mensaje = '';
  exito = false;


  guardar(): void {
    this.mensaje = '';

    if (this.form.invalid) {
      this.form.markAllAsTouched(); // salta la excep67
      return;
    }

    const p = this.form.value as producto;

    this.service.crear(p).subscribe({
      next: () => {
        this.exito = true;
        this.mensaje = 'Producto creado correctamente.';
        this.form.reset({
          nombre: '',
          precio: 0,
          stock: 0,
          fechaVencimiento: '',
          disponible: true,
        });
        this.cd.detectChanges();
      },
      error: () => {
        this.exito = false;
        this.mensaje = 'No se pudo crear el producto.';
        this.cd.detectChanges();
      },
    });
  }
}
