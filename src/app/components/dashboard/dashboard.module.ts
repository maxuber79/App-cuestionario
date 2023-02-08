import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListCuestionariosComponent } from './list-cuestionarios/list-cuestionarios.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    ListCuestionariosComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
	exports: [
		DashboardComponent,
    NavbarComponent,
    ListCuestionariosComponent
	],
})
export class DashboardModule { }
