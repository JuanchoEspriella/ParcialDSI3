import { inject, Injectable, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sinso } from '../models/sinso';

@Injectable({
  providedIn: 'root',
})
export class Sinsonservice {
  private http = inject(HttpClient);
  private url = 'http://localhost:8080';

  mostrarSinso(): Observable<Sinso> {
    return this.http.get<Sinso>(this.url + '/lossinso' )
  }
}
