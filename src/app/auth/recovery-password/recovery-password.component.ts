import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.scss']
})
export class RecoveryPasswordComponent implements OnInit {
recuperarForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.recuperarForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.email]]
    })
   }

  ngOnInit(): void {
  }

  recuperarPassword() {
    console.log('recuperar Email:', this.recuperarForm.value)
  }
}
