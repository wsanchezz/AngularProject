import { Component, OnInit } from '@angular/core';
import { MedicoService } from './../../_service/medico.service';
import { MatTableDataSource } from '@angular/material/table';
import { Medico } from 'src/app/_model/medico';
import { FormBuilder } from '@angular/forms';

import { getMatIconFailedToSanitizeLiteralError } from '@angular/material/icon';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {
  checkoutForm;
  displayedColumns = ['idMedico', 'nombres', 'apellidos', 'fotoUrl', 'cmp', 'acciones'];
  dataSource: MatTableDataSource<Medico>

  constructor(
    private medicoSer: MedicoService,
    private formbuilder: FormBuilder,
  ) {
    this.checkoutForm = this.formbuilder.group({
      nombres: '',
      apellidos: '',
      cmp: ''
    });
  }

  ngOnInit() {
    this.medicoSer.lista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  filtrar(valor: string) {
    this.dataSource.filter = valor.trim().toLowerCase();
  }

  onSubmit(customerData) {
    this.medicoSer.agregar(customerData).subscribe(data => window.location.reload())
  }

  ondelete(id) {
    this.medicoSer.borrar(id).subscribe(data => window.location.reload())
  }

}