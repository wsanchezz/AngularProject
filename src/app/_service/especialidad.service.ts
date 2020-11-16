import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Especialidad } from './../_model/especialidad';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {
  urlid;
  url: string = `${environment.HOST}/especialidades`;

  constructor( private http : HttpClient  ) { }

  lista(){
    return this.http.get<Especialidad[]>(this.url);
  }

  agregar(esp: any){
    return this.http.post<Especialidad[]>(this.url, esp);
  }

  borrar(id: string){
    this.urlid = `${environment.HOST}/especialidades/${id}`
    return this.http.delete(this.urlid)
  }
}
