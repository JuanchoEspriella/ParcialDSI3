import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { productoservice } from '../../services/productoservice';
import { Sinsonservice } from '../../services/sinsonservice';

@Component({
  selector: 'app-simpsoncomponent',
  standalone: false,
  styleUrl: './simpsoncomponent.css',
  templateUrl: './simpsoncomponent.html',
})
export class Simpsoncomponent {
  private service = inject(Sinsonservice);
  private cd = inject(ChangeDetectorRef);
  mostrarSinsoAlAzar(): void {
    this.service.mostrarSinso().subscribe();
  }
}
