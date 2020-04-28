import { Component, OnInit } from '@angular/core'
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms'
import { ApiService } from '../services/api.service'
import { emailPattern } from 'src/app/shared/pattern'
import '../../assets/img/logo.png';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  hideaux = false
  hideaux2 = false
  hide = false


  constructor(private api: ApiService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(emailPattern)]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async registrar() {
    let data = null;
    console.log(data);
    var result = await this.api.criarEscola(data);
    console.log(result);
  }

  async logar(){
    let data = {};
    console.log("logando...");
    let result = await this.api.logar(data);
    console.log(result);
  }

}
