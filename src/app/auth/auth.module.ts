import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth.routing';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { RecoveryPasswordComponent } from './recovery-password/recovery-password.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    VerifyEmailComponent,
    RecoveryPasswordComponent 
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
		FormsModule, 
		SharedModule,
		ReactiveFormsModule,
		ToastrModule.forRoot(),
  ],
	exports: [
		LoginComponent,
    RegisterComponent,
    VerifyEmailComponent,
    RecoveryPasswordComponent
	],
})
export class AuthModule { }
