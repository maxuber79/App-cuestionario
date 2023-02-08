import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SharedRoutingModule } from './shared/shared.routing';
import { DashboardModule } from './components/dashboard/dashboard.module';

const routes: Routes = [

	{ path: '', component: InicioComponent },
	{ path: 'usuario', 
		loadChildren:() => import('./auth/auth.module').then( m => m.AuthModule )
	},
	{ path: 'dashboard', component: DashboardComponent,
		loadChildren:() => import('./components/dashboard/dashboard.module').then( m => m.DashboardModule )
	},
	{ path: '**', redirectTo: '/', pathMatch: 'full'} // La ruta si no coincida se va a la raiz


/* 

{ path: '', component: InicioComponent },
  { path: 'usuario', loadChildren: () => import('./components/usuario/usuario.module')
                      .then(m => m.UsuarioModule) },
  { path: '**', redirectTo: '/', pathMatch: 'full' }

*/


];

@NgModule({
  imports: [RouterModule.forRoot(routes),SharedRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
