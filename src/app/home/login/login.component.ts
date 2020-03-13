import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  nome =  new FormControl( '' , [Validators.required] );
  sigla =  new FormControl( '' , [Validators.required] );
  telefone = new FormControl( '' , [Validators.required] );
  diretor = new FormControl( '' , [Validators.required] );
  senha = new FormControl( '' , [Validators.required] );
  cnpj = new FormControl( '' , [Validators.required] );
  cpf = new FormControl( '' , [Validators.required] );
  rua = new FormControl( '' , [Validators.required] );
  cep = new FormControl( '' , [Validators.required] );
  bairro = new FormControl( '' , [Validators.required] );
  estado = new FormControl( '' , [Validators.required] );
  numero = new FormControl( '' , [Validators.required] );
  cidade = new FormControl( '' , [Validators.required] );

  hideaux = false;
  hideaux2 = false;
  hide = false;

getErrorMessage() {
  return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Email não é valido' :
          '';
}

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  async registrar() {
    var data = {
      "nome": this.nome.value,
      "diretor": this.diretor.value,
      "cpf": this.cpf.value,
      "sigla": this.sigla.value,
      "email": this.email.value,
      "senha": this.senha.value,
      "telefone": this.telefone.value,
      "cnpj": this.cnpj.value,
      "rua": this.rua.value,
      "numero": this.numero.value,
      "cep": this.cep.value,
      "bairro": this.bairro.value,
      "cidade": this.cidade.value,
      "estado": this.estado.value,
    };
    console.log(data);
    var result = await this.api.criarEscola(data);
    console.log(result);
  }

  async logar(){
    let data = {
      email: this.email.value,
      senha: this.senha.value
    };
    console.log("logando...");
    let result = await this.api.logar(data);
    console.log(result);
  }

}
