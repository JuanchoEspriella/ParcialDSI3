import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class productoservice {
  private http = inject(HttpClient);
  private url = 'http://localhost:8080/api/productos';

  crear(p: producto): Observable<string> {
    return this.http.post(this.url + '/crear', p, {
      headers: this.headers(),
      responseType: 'text',
    });
  }

  mostrar(): Observable<producto[]> {
    return this.http.get<producto[]>(this.url + '/getall', { headers: this.headers() });
  }

  private headers(): HttpHeaders {
    return new HttpHeaders({ Authorization: 'Bearer ' + localStorage.getItem('token') });
  }

  comprarPorId(id: number, cantidad: number): Observable<string> {
    return this.http.put(this.url + '/comprar/' + id + '/' + cantidad, null, {
      headers: this.headers(),
      responseType: 'text',
    });
  }

  actualizarPorId(id: number): Observable<producto> {
    return this.http.put<producto>(this.url + '/update/{id}' + id, {
      headers: this.headers(),
    });
  }
  eliminarPorId(id: number): Observable<void> {
    return this.http.delete<void>(this.url + '/delete/{id}' + id);
  }
}
