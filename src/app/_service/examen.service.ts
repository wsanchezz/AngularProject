import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Examen } from './../_model/examen';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {
  urlid;
  url: string = `${environment.HOST}/examenes`;

  constructor(private http: HttpClient) { }

  lista() {
    return this.http.get<Examen[]>(this.url);
  }

  agregar(examen: any) {
    return this.http.post<Examen[]>(this.url, examen);
  }

  borrar(id: string) {
    this.urlid = `${environment.HOST}/examenes/${id}`
    return this.http.delete(this.urlid)
  }
}
