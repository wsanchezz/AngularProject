import { Component, OnInit } from '@angular/core';
import { ExamenService } from './../../_service/examen.service';
import { MatTableDataSource } from '@angular/material/table';
import { Examen } from 'src/app/_model/examen';
import { getMatIconFailedToSanitizeLiteralError } from '@angular/material/icon';
import { FormBuilder } from '@angular/forms';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-examenes',
  templateUrl: './examenes.component.html',
  styleUrls: ['./examenes.component.css']
})
export class ExamenesComponent implements OnInit {
  checkoutForm;
  url: string = 'http://localhost:8080/examenes';

  displayedColumns = ['idExamen', 'nombre', 'descripcion', 'acciones'];
  dataSource: MatTableDataSource<Examen>

  constructor(
    private ExamenSer: ExamenService,
    private formbuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.checkoutForm = this.formbuilder.group({
      nombre: '',
      descripcion: ''
    });
  }


  ngOnInit() {
    this.ExamenSer.lista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  onSubmit(customerData) {
    this.ExamenSer.agregar(customerData).subscribe(data => /*this.checkoutForm.reset()*/ window.location.reload())
  }

  ondelete(id) {
    this.ExamenSer.borrar(id).subscribe(data => window.location.reload())
  }


}
