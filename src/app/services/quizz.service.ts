import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {
	tituloCuestonario: string = '';
	descripcion: string = '';
  constructor() { }
}
