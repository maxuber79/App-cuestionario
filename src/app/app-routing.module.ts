import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth.routing';
import { InicioComponent } from './components/inicio/inicio.component';
import { SharedRoutingModule } from './shared/shared.routing';

const routes: Routes = [

	{ path: '', component: InicioComponent },
	{ path: 'usuario', loadChildren:() => import('./auth/auth.module').then( m => m.AuthModule )},
	{ path: '**', redirectTo: '/', pathMatch: 'full'}





];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthRoutingModule, SharedRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
