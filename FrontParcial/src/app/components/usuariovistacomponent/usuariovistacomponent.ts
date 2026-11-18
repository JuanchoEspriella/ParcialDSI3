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


  productos: producto[] = [];
  cantidad:number = 0;
  id: number = 0;
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
    this.service.comprarPorId(this.id,this.cantidad).subscribe({
      next:() => {

        this.exito=true;
        this.mensaje = 'Producto comprado correctamente.';
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
