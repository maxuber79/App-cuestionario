import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuizzComponent } from './add-quizz/add-quizz.component';
import { CrearPreguntasComponent } from './crear-preguntas/crear-preguntas.component';
import { ListCuestionariosComponent } from './list-cuestionarios/list-cuestionarios.component';

const routes: Routes = [
	{ path: '', component: ListCuestionariosComponent },  
	{ path: 'addquizz', component: AddQuizzComponent },
	{ path: 'crearpreguntas', component: CrearPreguntasComponent },
	/* { path: '', component: } */
	/* { path: '', component: } */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
