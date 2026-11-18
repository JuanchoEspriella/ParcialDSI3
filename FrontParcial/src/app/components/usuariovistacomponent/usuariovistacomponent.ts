import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { productoservice } from '../../services/productoservice';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { producto } from '../../models/producto';

@Component({
  selector: 'app-usuariovistacomponent',
  standalone: false,
  styleUrl: './usuariovistacomponent.css',
  templateUrl: './usuariovistacomponent.html',
})
export class Usuariovistacomponent implements OnInit {
  private service = inject(productoservice);
  private cd = inject(ChangeDetectorRef);

  productos: producto[] = [];
  mensaje = '';
  exito = false;

  form = new FormGroup({
    id: new FormControl<number | null>(null, [Validators.required, Validators.min(1)]),
    cantidad: new FormControl<number>(1, [Validators.required, Validators.min(1)]),
  });

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

  comprarproductos(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const id = Number(this.form.value.id);
    const cantidad = Number(this.form.value.cantidad);

    this.service.comprarPorId(id, cantidad).subscribe({
      next: () => {
        this.exito = true;
        this.mensaje = 'Producto comprado correctamente.';
        this.form.reset({ id: null, cantidad: 1 });
        this.cargarProductos();
        this.cd.detectChanges();
      },
      error: (err) => {
        console.error(err);
        this.exito = false;
        this.mensaje = 'No se pudo comprar el producto. Verifica el stock disponible.';
        this.cd.detectChanges();
      },
    });
  }
}
