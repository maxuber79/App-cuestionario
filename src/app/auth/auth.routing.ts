import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecoveryPasswordComponent } from './recovery-password/recovery-password.component';
import { RegisterComponent } from './register/register.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

const routes: Routes = [ 
	{ path: '', component: LoginComponent },  
	{ path: 'login', component: LoginComponent },
	{ path: 'recuperarPassword', component: RecoveryPasswordComponent },
	{ path: 'register', component:  RegisterComponent },
	{ path: 'verificaremail', component: VerifyEmailComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
