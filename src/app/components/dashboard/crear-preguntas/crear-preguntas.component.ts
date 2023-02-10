import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pregunta } from 'src/app/models/Preguntas';
import { Respuesta } from 'src/app/models/Respuesta';
import { QuizzService } from 'src/app/services/quizz.service';

@Component({
  selector: 'app-crear-preguntas',
  templateUrl: './crear-preguntas.component.html',
  styleUrls: ['./crear-preguntas.component.scss']
})
export class CrearPreguntasComponent implements OnInit{
	agregarPregunta: FormGroup;
	mostrarError = false;


	constructor(private _quizzService: QuizzService, private fb:FormBuilder ) {


		
		this.agregarPregunta = this.fb.group({
			titulo: [ '', Validators.required ],
			segundos: [ 10, Validators.required ],
			puntos: [ 1000, Validators.required ],
			respuesta1: this.fb.group({
				titulo: ['', Validators.required],
				esCorrecta: [false, Validators.required]
			}),
			respuesta2: this.fb.group({
				titulo: ['', Validators.required],
				esCorrecta: [false, Validators.required]
			}),
			respuesta3: this.fb.group({
				titulo: '',
				esCorrecta: false
			}),
			respuesta4: this.fb.group({
				titulo: '',
				esCorrecta: false
			}),
		});		

	}
	
	ngOnInit(): void {
		//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
		//Add 'implements OnInit' to the class.
		console.log('titulo >>', this._quizzService.tituloCuestonario);
		console.log('descripcion >>', this._quizzService.descripcion);	
		
	}

	get seg() { return this.agregarPregunta.get('segundos')?.value }
	get puntos() {return this.agregarPregunta.get('puntos')?.value}


	agregarPreg() {
		console.log(this.agregarPregunta);
		
		if(this.agregarPregunta.invalid || this.todasIncorrectas() ) {
			this.error();
		}

		let listRespuesta: Respuesta[] = [];

		// Obtenemos respuesta 1
		const rtaTitulo1 = this.agregarPregunta.get('respuesta1')?.get('titulo')?.value;
		const esCorrecta1 = this.agregarPregunta.get('respuesta1')?.get('esCorrecta')?.value;
		console.log('%c[DEBUG] Accediendo a los valores del FORM  de respuesta 1 >>','background: #d1e7dd; color: #0f5132; padding: 2px 5px;', rtaTitulo1, esCorrecta1);

		const respuesta1: Respuesta = {
			descripcion: rtaTitulo1,
			esCorrecta: esCorrecta1
		}
		console.info('%c[DEBUG] OBJ de respuesta1 >>','background: #d1e7dd; color: #0f5132; padding: 2px 5px;', respuesta1);

		listRespuesta.push(respuesta1)

		// Obtenemos respuesta 2
		const rtaTitulo2 = this.agregarPregunta.get('respuesta2')?.get('titulo')?.value;
		const esCorrecta2 = this.agregarPregunta.get('respuesta2')?.get('esCorrecta')?.value;
		console.log('%c[DEBUG] Accediendo a los valores del FORM  de respuesta 1 >>','background: #d1e7dd; color: #0f5132; padding: 2px 5px;', rtaTitulo2, esCorrecta2);

		const respuesta2: Respuesta = {
			descripcion: rtaTitulo2,
			esCorrecta: esCorrecta2
		}
		console.info('%c[DEBUG] OBJ de respuesta2 >>','background: #d1e7dd; color: #0f5132; padding: 2px 5px;', respuesta2);

		listRespuesta.push(respuesta2)

		// Obtenemos respuesta 3
		const rtaTitulo3 = this.agregarPregunta.get('respuesta3')?.get('titulo')?.value;
		const esCorrecta3 = this.agregarPregunta.get('respuesta3')?.get('esCorrecta')?.value;
		console.log('%c[DEBUG] Accediendo a los valores del FORM  de respuesta 3 >>','background: #d1e7dd; color: #0f5132; padding: 2px 5px;', rtaTitulo3, esCorrecta3);

		const respuesta3: Respuesta = {
			descripcion: rtaTitulo3,
			esCorrecta: esCorrecta3
		}
		console.info('%c[DEBUG] OBJ de respuesta3 >>','background: #d1e7dd; color: #0f5132; padding: 2px 5px;', respuesta3);

		if(rtaTitulo3 !== '') {
			listRespuesta.push(respuesta3)
		}

		// Obtenemos respuesta 3
		const rtaTitulo4 = this.agregarPregunta.get('respuesta4')?.get('titulo')?.value;
		const esCorrecta4 = this.agregarPregunta.get('respuesta4')?.get('esCorrecta')?.value;
		console.log('%c[DEBUG] Accediendo a los valores del FORM  de respuesta 4 >>','background: #d1e7dd; color: #0f5132; padding: 2px 5px;', rtaTitulo4, esCorrecta3);

		const respuesta4: Respuesta = {
			descripcion: rtaTitulo4,
			esCorrecta: esCorrecta4
		}
		console.info('%c[DEBUG] OBJ de respuesta4 >>','background: #d1e7dd; color: #0f5132; padding: 2px 5px;', respuesta4);

		if(rtaTitulo4 !== '') {
			listRespuesta.push(respuesta4)
		}
		
		
		console.info('%c[DEBUG] listRespuesta full >>','background: #6610f2; color: #fff; padding: 2px 5px;', listRespuesta);

		//Creamos pregunta

		const tituloPregunta = this.agregarPregunta.get('titulo')?.value;
		const segundos = this.agregarPregunta.get('segundos')?.value;
		const puntos = this.agregarPregunta.get('puntos')?.value;

		const pregunta: Pregunta = {
			titulo: tituloPregunta,
			segundos: segundos,
			puntos: puntos,
			listRespuestas: listRespuesta
		} 
		console.log('%c[DEBUG] pregunta full >>','background: #0dcaf0; color: #fff; padding: 2px 5px;', pregunta);
		this._quizzService.agregarPregunta(pregunta)
		this.reset();

	}

	reset() {
		this.agregarPregunta.patchValue( {
			titulo: '',
			segundos: 10,
			puntos: 1000,
			respuesta1: {
				titulo: '',
				esCorrecta: false
			},
			respuesta2: {
				titulo: '',
				esCorrecta: false
			},
			respuesta3: {
				titulo: '',
				esCorrecta: false
			},
			respuesta4: {
				titulo: '',
				esCorrecta: false
			},
		})
	}






	todasIncorrectas() {
		/* if(this.agregarPregunta.get('respuesta1')?.get('esCorrecta')?.value == true) {
			return false;
		} */
		const array = ['respuesta1', 'respuesta2', 'respuesta3', 'respuesta4'];

		for (let i = 0; i < array.length; i++) {			
			if(this.agregarPregunta.get(array[i])?.get('esCorrecta')?.value == false) {
				return false;
			}			
		}
		return true;
 }

	error() {
    this.mostrarError = true;

    // Mostramos por tres segundos el error
    setTimeout(() => {
      this.mostrarError = false
    }, 3000);
  }



	sumarRestarSegundo(numero: number) {

		if(this.seg <= 5) {
      return;
    }

    this.agregarPregunta.patchValue({
      segundos: this.seg + numero
    })
	}


	esCorrecta(index: string) {

		let stringRta = 'respuesta';
		let nroRespuesta = stringRta.concat(index);
		this.setFalseRespuesta(nroRespuesta);

		const estadoRta = this.obtenerEstadoRespuesta(nroRespuesta)

		this.agregarPregunta.get(nroRespuesta)?.patchValue({
			 esCorrecta: !estadoRta
		})
	}


	obtenerEstadoRespuesta(nroRespuesta: string): boolean {
		return this.agregarPregunta.get(nroRespuesta)?.get('esCorrecta')?.value;
	}


	setFalseRespuesta(nroRespuestas: string ) {
		const array = ['respuesta1', 'respuesta2', 'respuesta3', 'respuesta4'];

		// Recorremos en array y seteamos todas las respuestas como false MENOS la que el usuario selecciono

		for (let i = 0; i < array.length; i++) {
			
			if(array[i] !== nroRespuestas) {
				this.agregarPregunta.get(array[i])?.patchValue({
					esCorrecta: false
				})
			}
			
		}
	}








}
