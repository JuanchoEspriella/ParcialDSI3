import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { productoservice } from '../../services/productoservice';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { producto } from '../../models/producto';

@Component({
  selector: 'app-usuariovistacomponent',
  standalone: false,
  styleUrl: './usuariovistacomponent.css',
  templateUrl: './usuariovistacomponent.html',
})
export class Usuariovistacomponent {
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

  comprarproductos(): void {
    this.service.mostrar().subscribe({})
  }
}
