import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

	error(code: string): string {
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

			case 'auth/user-not-found':
				return 'Usuario inválido o no registrado'

			case 'auth/wrong-password':
				return 'La password es inválida'

			default:
				return 'Error desconocido';
		}
	}
}
