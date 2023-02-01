import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

	public error: boolean = false;
	public pin = '';


	constructor() {}
	ngOnInit(): void {}
	ingresar() {
		console.log('click en el boton')
		//Si el usario no ingreso ningun caracter
		if(this.pin == '') {
			this.error = true;
			setTimeout(() => {				
			this.error = false;
			}, 3000);
		}
	}
}
