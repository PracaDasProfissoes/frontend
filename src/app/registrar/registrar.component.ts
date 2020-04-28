import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup, AbstractControl, FormGroupDirective, NgForm } from '@angular/forms';
import { emailValidator, passValidator, cnpjValidator } from 'src/app/shared/validator';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})


export class RegistrarComponent implements OnInit {

  escolaForm: FormGroup

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i ;
  cnpjPattern = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;

  hideaux = false;
  hideaux2 = false;
  hide = false;

  getErrorMessage() {
    // return this.email.hasError('required') ? 'Informe um email valido' :
    //     this.email.hasError('email') ? 'Email não é valido' :   '';
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.escolaForm = this.fb.group({
      // email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      confemail: ['', [Validators.required, Validators.pattern(this.emailPattern), emailValidator]],
      nome: ['', [Validators.required, Validators.minLength(5)]],
      cnpj: ['', [Validators.required, cnpjValidator]],
      sigla: ['', [Validators.required, Validators.minLength(3)]],
      telefone: ['', [Validators.required, Validators.minLength(8)]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confsenha: ['', [Validators.required, Validators.minLength(6), passValidator]],
    });

    this.escolaForm.controls.email.valueChanges
    .subscribe(
      x => this.escolaForm.controls.confemail.updateValueAndValidity()
    )

    this.escolaForm.controls.senha.valueChanges
    .subscribe(
      x => this.escolaForm.controls.confsenha.updateValueAndValidity()
    )

  }
  log() {
    console.log('required: ', this.escolaForm.get('cnpj').hasError('required'));
    console.log('pattern: ', this.escolaForm.get('cnpj').hasError('pattern'));
    console.log('Erros: ', this.escolaForm.get('cnpj').errors);
    }

  emailInvalido(nome: string) {
    return this.escolaForm.get(nome).hasError('pattern') && !this.escolaForm.get(nome).hasError('required');
  }

  equalsToSenha(group: FormGroup): {[key:string]: boolean} {
    const senha = group.get('senha')
    const confsenha = group.get('confsenha')
    if (!senha || !confsenha) {
      return undefined
    }

    if (senha.value !== confsenha.value) {
      return {senhasNotMatch:true}
    }
    return undefined
  }

  equalsTo(group: FormGroup): {[key:string]: boolean} {
    const email = group.get('email')
    const emailConfirmation = group.get('confemail')
    if(!email || !emailConfirmation){
      return undefined
    }

    if(email.value !== emailConfirmation.value){
      return {emailsNotMatch:true}
    }
    return undefined
  }

  async registrar(data) {

    console.log(data);
    // var result = await this.api.criarEscola(data);
    // console.log(result);
  }

  async logar(){
    // let data = {
    //   email: this.email.value,
    //   senha: this.senha.value
    // };
    console.log("logando...");
    // let result = await this.api.logar(data);
    // console.log(result);
  }

}
