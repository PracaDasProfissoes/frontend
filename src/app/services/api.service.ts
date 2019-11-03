import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

const apiUri = "/api";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  criarEscola(data){
    console.log(`${environment.apiBaseUrl + apiUri}/escola`);
    return this.http.post(`${environment.apiBaseUrl + apiUri}/escola`, data).subscribe( x => console.log(x));
  }

  buscarEscola(id){
    return this.http.get(`${environment.apiBaseUrl + apiUri}/${id}`);
  }

  logar(data){
    let result = this.http.post(`${environment.apiBaseUrl}/login`, data);
    result.subscribe( res => {
      console.log(res);
    });
  }
}
