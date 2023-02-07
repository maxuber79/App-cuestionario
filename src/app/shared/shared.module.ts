import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared.routing';
import { SpinnerComponent } from './spinner/spinner.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
		SpinnerComponent
	],
  imports: [
    CommonModule,
    SharedRoutingModule,
		FormsModule,
		ReactiveFormsModule
  ],
	exports: [
		ReactiveFormsModule, 
		FormsModule,
		SpinnerComponent		
	]
})
export class SharedModule { }
