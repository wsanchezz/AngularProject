import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormBuilder } from '@angular/forms';
// import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { MedicosComponent } from './pages/medicos/medicos.component';
import { HttpClientModule } from '@angular/common/http';
import { ExamenesComponent } from './pages/examenes/examenes.component';

@NgModule({
  declarations: [
    AppComponent,
    PacientesComponent,
    MedicosComponent,
    ExamenesComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule, 
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
