import { TokenService } from './token-service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders  } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const apiUri = "/api";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private auth: TokenService) { }


  criarEscola(data){
    console.log(`${environment.apiBaseUrl + apiUri}/escola`);
    return this.http.post(`${environment.apiBaseUrl + apiUri}/escola`, data).subscribe( x => console.log(x));
  }

  buscarEscola(id){
    return this.http.get(`${environment.apiBaseUrl + apiUri}/${id}`);
  }

  logar(data){

    return this.http.post<any>(`${environment.apiBaseUrl}/login`, data, {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      observe: 'response'
    } ) .subscribe( resp => {
        const token = resp.headers.get('authorization');
        this.auth.storeToken(token);
    });
  }
}
