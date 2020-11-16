import { PacienteService } from './../../_service/paciente.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Paciente } from 'src/app/_model/paciente';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { getMatIconFailedToSanitizeLiteralError } from '@angular/material/icon';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {
  checkoutForm;
  url: string = 'http://localhost:8080/pacientes';

  displayedColumns = ['idPaciente', 'nombres', 'apellidos', 'dni', 'direccion', 'telefono', 'acciones'];
  dataSource: MatTableDataSource<Paciente>

  constructor(
    private PacienteService: PacienteService,
    private formbuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.checkoutForm = this.formbuilder.group({
      nombres: '',
      apellidos: '',
      dni: '',
      direccion: '',
      telefono: '',
    });
  }

  ngOnInit() {
    this.PacienteService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

  }

  filtrar(valor: string) {
    this.dataSource.filter = valor.trim().toLowerCase();
  }

  onSubmit(customerData) {
    this.PacienteService.agregar(customerData).subscribe(data => window.location.reload())
  }

  ondelete(id) {
    this.PacienteService.borrar(id).subscribe(data => window.location.reload())
  }

}
