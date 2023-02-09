import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
		this.agregar();

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


	agregar() {
		console.log(this.agregarPregunta);
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
