import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListCuestionariosComponent } from './list-cuestionarios/list-cuestionarios.component';
import { AddQuizzComponent } from './add-quizz/add-quizz.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearPreguntasComponent } from './crear-preguntas/crear-preguntas.component';
import { ListPreguntasComponent } from './list-preguntas/list-preguntas.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    ListCuestionariosComponent,
    AddQuizzComponent,
    CrearPreguntasComponent,
    ListPreguntasComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
		FormsModule,
		ReactiveFormsModule
  ],
	exports: [
		DashboardComponent,
    NavbarComponent,
    ListCuestionariosComponent
	],
})
export class DashboardModule { }
