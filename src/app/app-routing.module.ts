import { MedicosComponent } from './pages/medicos/medicos.component';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { ExamenesComponent} from './pages/examenes/examenes.component'
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { formatPercent } from '@angular/common';

const routes: Routes = [
  {path:'pacientes', component: PacientesComponent},
  {path:'medicos', component: MedicosComponent},
  {path: 'examenes', component: ExamenesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
