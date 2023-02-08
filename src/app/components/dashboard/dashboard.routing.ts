import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCuestionariosComponent } from './list-cuestionarios/list-cuestionarios.component';

const routes: Routes = [
	{ path: '', component: ListCuestionariosComponent },  
	/* { path: '', component: },
	{ path: '', component: },
	{ path: '', component: },
	{ path: '', component: } */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
