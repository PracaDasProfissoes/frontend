import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  hideaux = false;
  hideaux2 = false;
  hide = false;
  escola = {
    nome: String,
    email: String,
    sigla: String,
    cnpj : String,
    telefone: String,
    diretor: String,
    senha: String,
    confSenha: String
  };
  escolaForm: FormGroup;


getErrorMessage() {
  return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Email não é valido' :
          '';
}

  constructor() { }

  ngOnInit() {
    // this.escolaForm = new FormGroup({
    //   nomeEscola: new FormControl( this.escola.nome , [Validators.required] ),
    //   // sigla: new FormControl(this.escola.sigla, [Validators.required]),
    //   // cnpj: new FormControl(this.escola.cnpj, [Validators.required]),
    //   // telefone: new FormControl(this.escola.telefone, [Validators.required]),
    //   nomeDiretor: new FormControl(this.escola.diretor, [Validators.required]),
    //   senha: new FormControl(this.escola.senha, [Validators.required]),
    //   confSenha: new FormControl(this.escola.confSenha, [Validators.required]),

    // });
  }

  registrar(){
    console.log(this.escola);
  }

}
