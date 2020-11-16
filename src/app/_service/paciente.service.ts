import { Paciente } from './../_model/paciente';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  urlid;
  url: string = `${environment.HOST}/pacientes`

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Paciente[]>(this.url);
  }

  agregar(paciente: any) {
    return this.http.post<Paciente[]>(this.url, paciente);
  }

  borrar(id: string) {
    this.urlid = `${environment.HOST}/pacientes/${id}`
    return this.http.delete(this.urlid)
  }
}
