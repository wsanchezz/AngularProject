import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Medico } from './../_model/medico';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  url: string = `${environment.HOST}/medicos`

  constructor(private http : HttpClient) { }

  getJson(url){
    return this.http.get(url)
  }

  lista(){
    return this.http.get<Medico[]>(this.url);
  }
}
