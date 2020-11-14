import { Paciente } from './../_model/paciente';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  url: string = `${environment.HOST}/pacientes`

  constructor(private http : HttpClient) { }



  listar(){
    return this.http.get<Paciente[]>(this.url);
  }
}
