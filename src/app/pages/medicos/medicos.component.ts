import { Component, OnInit } from '@angular/core';
import { MedicoService } from './../../_service/medico.service';
import { MatTableDataSource } from '@angular/material/table';
import { Medico } from 'src/app/_model/medico';
import { getMatIconFailedToSanitizeLiteralError } from '@angular/material/icon';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {

  displayedColumns = ['idMedico','nombres','apellidos','fotoUrl', 'cmp'];
  dataSource: MatTableDataSource<Medico>

  constructor(private medicoSer : MedicoService) { }

  ngOnInit() {
    this.medicoSer.lista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

  }
}
