import { Component, OnInit } from '@angular/core';
import { EspecialidadService } from './../../_service/especialidad.service';
import { MatTableDataSource } from '@angular/material/table';
import { Especialidad } from 'src/app/_model/especialidad';
import { getMatIconFailedToSanitizeLiteralError } from '@angular/material/icon';
import { FormBuilder } from '@angular/forms';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.css']
})
export class EspecialidadesComponent implements OnInit {

  checkoutForm;
  // url: string = 'http://localhost:8080/examenes';

  displayedColumns = ['idEspecialidad', 'nombre', 'acciones'];
  dataSource: MatTableDataSource<Especialidad>

  constructor(
    private EspSer: EspecialidadService,
    private formbuilder: FormBuilder,
  ) {
    this.checkoutForm = this.formbuilder.group({
      nombre: ''
    });
  }

  ngOnInit() {
    this.EspSer.lista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  onSubmit(customerData) {
    if (customerData.nombre != "") {
      this.EspSer.agregar(customerData).subscribe(data => window.location.reload())
    } else {
      alert('Este campo no puede estar vacio')
    }
  }

  ondelete(id) {
    this.EspSer.borrar(id).subscribe(data => window.location.reload())
  }

}