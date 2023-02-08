import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.scss']
})
export class RecoveryPasswordComponent implements OnInit {
recuperarForm: FormGroup;
loading: boolean = false;

  constructor(
		private fb: FormBuilder,
		private afAuth:AngularFireAuth,
		private router: Router,
		private toastr: ToastrService,
		private _errorservice: ErrorService
		
		) {
    this.recuperarForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.email]]
    })
   }

  ngOnInit(): void {
  }

  recuperarPassword() {
    console.log('recuperar Email:', this.recuperarForm.value);
		//Obtener el correo
		const correo = this.recuperarForm.get('usuario')?.value;
		this.loading = true;
		this.afAuth.sendPasswordResetEmail(correo).then(() => {
			this.toastr.info('Enviamos un correo electrónico para restablecer su password', 'Restablecer contraseña');
			this.router.navigate(['/usuario']);
		}).catch( error => {
			console.error(error);
			this.loading = false;
			this.toastr.error(this._errorservice.error(error.code));
			this.recuperarForm.reset();
		})
  }
}
