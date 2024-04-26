import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../../dto/mensajeDTO';
import { signUpDTO } from '../../dto/signUpDTO';
import { enviroments } from '../../../enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http:HttpClient) { }
  singUp(sign:signUpDTO):Observable<MensajeDTO>{
    return this.http.post<MensajeDTO>(enviroments.urlApi+"/auth/singUp-client", sign);
  }
}
