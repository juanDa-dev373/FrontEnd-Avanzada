import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../../dto/mensajeDTO';
import { enviroments } from '../../../enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor(private http:HttpClient) { }

  forgotPassword(email:string):Observable<MensajeDTO>{
    console.log(email);
    return this.http.post<MensajeDTO>(enviroments.urlApi+"/auth/forgotPassword?email="+email, null);
  }
}
