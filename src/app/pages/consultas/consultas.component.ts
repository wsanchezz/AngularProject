import { ConsultaService } from './../../_service/consulta.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Consulta } from 'src/app/_model/consulta';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { getMatIconFailedToSanitizeLiteralError } from '@angular/material/icon';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css'],
})
export class ConsultasComponent implements OnInit {

  checkoutForm;
  url: string = 'http://localhost:8080/consultas';

  displayedColumns = ['idConsulta', 'fecha', 'numConsultorio', 'idEspecialidad', 'idMedico', 'idPaciente', 'acciones'];
  dataSource: MatTableDataSource<Consulta>

  constructor(
    private ConsultaService: ConsultaService,
    private formbuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.checkoutForm = this.formbuilder.group({
      fecha: '',
      numConsultorio: '',
      idEspecialidad: '',
      idMedico: '',
      idPaciente: '',
    });
  }

  ngOnInit() {
    this.ConsultaService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

  }

  filtrar(valor: string) {
    this.dataSource.filter = valor.trim().toLowerCase();
  }

  onSubmit(customerData) {
    this.ConsultaService.agregar(customerData).subscribe(data => window.location.reload())
  }

  ondelete(id) {
    this.ConsultaService.borrar(id).subscribe(data => window.location.reload())
  }

}
