import { Component, OnInit, ChangeDetectorRef, inject } from '@angular/core';
import { Router } from '@angular/router';
import { usuario } from '../../models/usuario';
import { usuarioservice } from '../../services/usuarioservice';
import { producto } from '../../models/producto';

@Component({
  selector: 'app-usuariocomponent',
  standalone: false,
  styleUrl: './usuariocomponent.css',
  templateUrl: './usuariocomponent.html',
})
export class Usuariocomponent implements OnInit {
  private service = inject(usuarioservice);
  private router = inject(Router);
  private cd = inject(ChangeDetectorRef);

  usuarios: usuario[] = [];

  ngOnInit(): void {
    if (!this.service.leer('token')) {
      this.router.navigate(['/inicio']);
      return;
    }
    this.service.listar().subscribe((lista) => {
      this.usuarios = lista;
      this.cd.detectChanges();
    });
  }
}


