import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizzService } from 'src/app/services/quizz.service';

@Component({
  selector: 'app-add-quizz',
  templateUrl: './add-quizz.component.html',
  styleUrls: ['./add-quizz.component.scss']
})
export class AddQuizzComponent implements OnInit {
cuestonarioForm!: FormGroup;
mostrarError: boolean = false;

constructor(private fb: FormBuilder, private router: Router, private _quizzService: QuizzService ) {
	this.cuestonarioForm = this.fb.group({
		titulo: ['', Validators.required],
		descripcion: ['', Validators.required]

	});
}

ngOnInit(): void {
	//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
	//Add 'implements OnInit' to the class.
	
}

siguiente() {
	console.log('Valores >>', this.cuestonarioForm.value);
	if(this.cuestonarioForm.invalid) {
		this.mostrarError = true;

		setTimeout(() => {
			this.mostrarError = false;
		}, 3000);
	} else {
		// Si el formulario es valido
		this._quizzService.tituloCuestonario = this.cuestonarioForm.get('titulo')?.value;
		this._quizzService.descripcion = this.cuestonarioForm.get('descripcion')?.value;
		this.router.navigate(['/dashboard/crearpreguntas']);
	}
}



}
