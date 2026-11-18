import { Component, ChangeDetectorRef, inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { producto } from '../../models/producto';
import { productoservice } from '../../services/productoservice';

@Component({
  selector: 'app-productocomponent',
  standalone: false,
  styleUrl: './productocomponent.css',
  templateUrl: './productocomponent.html',
})
export class Productocomponent implements OnInit {
  private service = inject(productoservice);
  private cd = inject(ChangeDetectorRef);

  form = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0, [Validators.required, Validators.min(1)]),
    stock: new FormControl(0, [Validators.required, Validators.min(0)]),
    fechaVencimiento: new FormControl<Date | null>(null, Validators.required),
    disponible: new FormControl(true),
    tipo: new FormControl('', Validators.required),
    id: new FormControl(0, [Validators.required, Validators.min(1)]),
    urlImagen: new FormControl('', Validators.required),
  });

  productos: producto[] = [];
  mensaje = '';
  exito = false;

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.service.mostrar().subscribe({
      next: (lista) => {
        this.productos = lista;
        this.cd.detectChanges();
      },
      error: (err) => {
        console.error('Error al cargar productos:', err);
      },
    });
  }


  guardar(): void {
    this.mensaje = '';

    if (this.form.invalid) {
      this.form.markAllAsTouched();
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
          fechaVencimiento: null,
          disponible: true,
        });
        this.cargarProductos();
        this.cd.detectChanges();
      },
      error: (err) => {
        console.error(err);
        this.exito = false;
        this.mensaje = 'No se pudo crear el producto.';
        this.cd.detectChanges();
      },
    });
  }
}
