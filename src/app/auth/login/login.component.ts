import { Component, OnInit  } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { ErrorService } from 'src/app/services/error.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm: FormGroup;
loading: boolean = false;

  constructor(
		private fb: FormBuilder,
		private afAuth:AngularFireAuth,
		private router: Router,
		private toastr: ToastrService,
		private _errorservice: ErrorService
		) { 
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  login() {
    console.log(this.loginForm);
		const usuario = this.loginForm.get('usuario')?.value;
		const password = this.loginForm.get('password')?.value;
		console.log('[DEBUG] info formulario >>', '[EMAIL] >>',usuario,'[PASS] >>', password);

		this.loading = true;
		this.afAuth.signInWithEmailAndPassword(usuario, password).then( (resp) => {
			console.log('%cHTTP request completed.','background: #d1e7dd; color: #0f5132; padding: 2px 5px;', resp);

			if(resp.user?.emailVerified == false) {
				this.router.navigate(['/usuario/verificaremail'])
			} else {
				//lo redireccionamos al dashboard
				this.setLocalStorage(resp.user);
				this.router.navigate(['/dashboard']);
			}
			this.loading = false;
 
			//this.toastr.success('El usuario fue registrado con éxito!', 'Usuario registrado!');
		}).catch( error => {
			console.error(error);
			this.toastr.error(this._errorservice.error(error.code),'Error');
			this.loginForm.reset();
			this.loading = false;
		})
  }

	/* error(code: string): string {
		switch(code) {
			// Email ya registrado
			case 'auth/email-already-in-use':
				return 'El correo ya esta registrado'

			//Correo invalido
			case 'auth/invalid-email':
				return 'El email es inválido'
			
				//Contraseña debil
			case 'auth/weak-password':
				return 'La contraseña es muy debil'

			default:
				return 'Error desconocido';
		}
	} */

	setLocalStorage(user: any) {
		const usuario: User = {
			uid: user.uid,
			email: user.email,
			token: user.auth.currentUser.accessToken
		}

		localStorage.setItem('user', JSON.stringify(usuario));
	}
}
