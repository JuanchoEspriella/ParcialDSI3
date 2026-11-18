import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { usuario, respuestalogin } from '../models/usuario';


@Injectable({
  providedIn: 'root'
})
export class usuarioservice {
  private http = inject(HttpClient);
  private url = 'http://localhost:8080';


  login(u: usuario): Observable<respuestalogin> {
    return this.http.post<respuestalogin>(this.url + '/auth/login', u);
  }

  registrar(u: usuario): Observable<string> {
    return this.http.post(this.url + '/auth/register', u, { responseType: 'text' });
  }


  listar(): Observable<usuario[]> {
    return this.http.get<usuario[]>(this.url + '/user/getall', { headers: this.headers() });
  }

  crear(u: usuario): Observable<string> {
    return this.http.post(this.url + '/user/createjson', u, { headers: this.headers(), responseType: 'text' });
  }

  actualizar(id: number, u: usuario): Observable<string> {
    return this.http.put(this.url + '/user/updatejson?id=' + id, u, { headers: this.headers(), responseType: 'text' });
  }

  eliminar(id: number): Observable<string> {
    return this.http.delete(this.url + '/user/deletebyid/' + id, { headers: this.headers(), responseType: 'text' });
  }


  guardar(clave: string, valor: string): void {
    localStorage.setItem(clave, valor);
  }

  leer(clave: string): string | null {
    return localStorage.getItem(clave);
  }

  cerrarSesion(): void {
    localStorage.clear();
  }


  private headers(): HttpHeaders {
    return new HttpHeaders({ Authorization: 'Bearer ' + this.leer('token') });
  }
}
