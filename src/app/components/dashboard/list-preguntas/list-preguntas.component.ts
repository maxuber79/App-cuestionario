import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cuestionario } from 'src/app/models/Cuestionario';
import { QuizzService } from 'src/app/services/quizz.service';
import { Pregunta } from '../../../models/Preguntas';
import { nanoid } from 'nanoid'
import { User } from '../../../../../download/quizz-ang-firebase-master/src/app/interfaces/User';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-preguntas',
  templateUrl: './list-preguntas.component.html',
  styleUrls: ['./list-preguntas.component.scss']
})
export class ListPreguntasComponent implements OnInit {

	listPreguntas: Pregunta[] = [];
	tituloCuestionario: string;
	descripcionCuestionario: string;

	constructor( private _quizzService: QuizzService, private router: Router, private toastr: ToastrService ) {

		this._quizzService.getPreguntas().subscribe( data => {

			this.listPreguntas.push(data);
			console.log('%c[DEBUG] getPreguntas() >>','background: #ffc107; color: #fff; padding: 2px 5px;',this.listPreguntas);
		})

		this.tituloCuestionario = this._quizzService.tituloCuestonario;
		this.descripcionCuestionario = this._quizzService.descripcion;

	}

	ngOnInit(): void {
		//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
		//Add 'implements OnInit' to the class.
		if(this.tituloCuestionario === '' || this.descripcionCuestionario === '') {
			this.router.navigate(['/dashboard']);
		}
	}

	eliminarPregunta(index: number) {
		this.listPreguntas.splice(index, 1)

	}

	finalizarCuestionario() {

		const codigo = this.generarCodigo();
		const usuario: User = JSON.parse(localStorage.getItem('user') || '{}');

		const cuestionario: Cuestionario = {
    uid: usuario.uid,
    titulo: this.tituloCuestionario,
    descripcion: this.descripcionCuestionario,
    codigo: codigo,
    cantPreguntas: this.listPreguntas.length,
    fechaCreacion: new Date(),
    listPreguntas: this.listPreguntas
		}
		console.log(cuestionario);

		// Llamada al firestore por medio de un servicio
		this._quizzService.crearCuestionario(cuestionario).then( data => {
			this.toastr.success('El cuestoniorario fu guardado con exito!', 'Cuestionario registrado');
			this.router.navigate(['/dashboard']);
		}).catch( error => {
			console.error(error);
		});
	}


	generarCodigo(): string {
    return nanoid(6).toUpperCase();
  }
}
