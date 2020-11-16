import { Consulta } from './../_model/consulta';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  urlid;
  url: string = `${environment.HOST}/consultas`

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Consulta[]>(this.url);
  }

  agregar(consulta: any) {
    return this.http.post<Consulta[]>(this.url, consulta);
  }

  borrar(id: string) {
    this.urlid = `${environment.HOST}/consultas/${id}`
    return this.http.delete(this.urlid)
  }
}
