import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { emailPattern } from 'src/app/shared/pattern';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.scss']
})
export class RecuperarSenhaComponent implements OnInit {

  recuperarForm: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.recuperarForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(emailPattern)]]
    });
  }

  recuperar(){

  }
}
