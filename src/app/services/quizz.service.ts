import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subject } from 'rxjs';
import { Cuestionario } from '../models/Cuestionario';
import { Pregunta } from '../models/Preguntas';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {
	tituloCuestonario: string = '';
	descripcion: string = '';
	private pregunta$ = new Subject<Pregunta>();


  constructor( private _firestore: AngularFirestore ) { }

	agregarPregunta(pregunta: Pregunta) {
		this.pregunta$.next(pregunta);
	}

	getPreguntas(): Observable<Pregunta> {
		return this.pregunta$.asObservable()
	}


	crearCuestionario( cuestionario: Cuestionario ): Promise<any> {
		return this._firestore.collection('cuestionarios').add(cuestionario)
	}













}
