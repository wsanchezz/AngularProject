import { PacienteService } from './../../_service/paciente.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Paciente } from 'src/app/_model/paciente';
import { getMatIconFailedToSanitizeLiteralError } from '@angular/material/icon';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  displayedColumns = ['idPaciente','nombres','apellidos','acciones'];
  dataSource: MatTableDataSource<Paciente>

  constructor(private PacienteService : PacienteService ) { }

  ngOnInit() {
    this.PacienteService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

  }

  filtrar(valor : string){
      this.dataSource.filter = valor.trim().toLowerCase();
  }

}
