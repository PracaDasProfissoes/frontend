import { AbstractControl, ValidatorFn, FormGroup } from '@angular/forms';

/** A hero's name can't match the given regular expression */
export function emailValidator(control: AbstractControl) {

  const email = control.root.get('email');
  const emailConfirmation = control.root.get('confemail');
  if (!email || !emailConfirmation) {
    return null;
  }

  if (email.value !== emailConfirmation.value) {
    return { emailsNotMatch: true };
  }
  return null;
}

export function passValidator(control: AbstractControl) {

  const pass = control.root.get('senha');
  const passConfirmation = control.root.get('confsenha');
  if (!pass || !passConfirmation) {
    return null;
  }

  if (pass.value !== passConfirmation.value) {
    return { passesNotMatch: true };
  }
  return null;
}

export function cnpjValidator(control: AbstractControl) {
  let cnpj = control.value;



  if (!cnpj) {
    return { cnpjValidator: true };
  }

  cnpj = cnpj.replace(/[^\d]+/g, '');
  console.log(cnpj);

  if (cnpj === '') {
    return { cnpjValidator: true };
  }

  if (cnpj.length !== 14) {
      return { cnpjValidator: true };
  }
  if (cnpj === "00000000000000" ||
      cnpj === "11111111111111" ||
      cnpj === "22222222222222" ||
      cnpj === "33333333333333" ||
      cnpj === "44444444444444" ||
      cnpj === "55555555555555" ||
      cnpj === "66666666666666" ||
      cnpj === "77777777777777" ||
      cnpj === "88888888888888" ||
      cnpj === "99999999999999") {
      return { cnpjValidator: true };
  }

     // Valida DVs
  let tamanho = cnpj.length - 2;
  let numeros = cnpj.substring(0, tamanho);
  let digitos = cnpj.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2){
      pos = 9;
    }
  }

  let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

  if (resultado != digitos.charAt(0)) {
    return { cnpjValidator: true };
  }

  tamanho = tamanho + 1;
  numeros = cnpj.substring(0,tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }
  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(1)) {
    return { cnpjValidator: true };
  }
  return null;
}


