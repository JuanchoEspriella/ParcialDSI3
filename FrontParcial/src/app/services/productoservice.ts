import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { usuario, respuestalogin } from '../models/usuario';
import { producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class usuarioservice {
  private http = inject(HttpClient);
  private url = 'http://localhost:8080/api/productos';


  crear(p: producto): Observable<string> {
    return this.http.post(this.url + '/create', p, { headers: this.headers(), responseType: 'text' });
  }

  mostrar(): Observable<producto[]> {
    return this.http.get<producto[]>(this.url + '/getall', { headers: this.headers() });
  }

  private headers(): HttpHeaders {
    return new HttpHeaders({ Authorization: 'Bearer ' + localStorage.getItem('token') });
  }
}
