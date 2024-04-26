import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginDTO } from '../../dto/loginDTO';
import { enviroments } from '../../../enviroments/enviroments';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../../dto/mensajeDTO';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http:HttpClient) { }

  getToken(login:loginDTO): Observable<MensajeDTO>{
    return this.http.post<MensajeDTO>(enviroments.urlApi+'/auth/login-client', login); 
  }
}
