import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { enviroments } from '../../../enviroments/enviroments';
import { MensajeDTO } from '../../dto/mensajeDTO';
import { Observable } from 'rxjs';
import { loginDTO } from '../../dto/loginDTO';
import { signUpDTO } from '../../dto/signUpDTO';
import { ChangePasswordDTO } from '../../dto/changePasswordDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient) { }

  public getToken(login:loginDTO): Observable<MensajeDTO>{
    return this.http.post<MensajeDTO>(enviroments.urlApi+'/auth/login-client', login); 
  }
  public loginClient():Observable<MensajeDTO>{
      return this.http.post<MensajeDTO>('', '');
  }
  public loginModerator():Observable<MensajeDTO>{
      return this.http.post<MensajeDTO>('','');
  }

  public signUpClient(sign:signUpDTO):Observable<MensajeDTO>{
    return this.http.post<MensajeDTO>(enviroments.urlApi+"/auth/singUp-client", sign);
  }

  public passwordRecovery(changePasswordDTO:ChangePasswordDTO, tokenRecovery:string):Observable<MensajeDTO>{
    return this.http.post<MensajeDTO>('http://localhost:8083/api/auth/passwordRecovery/'+tokenRecovery,changePasswordDTO);
  }

  public forgotPassword(email:string):Observable<MensajeDTO>{
    return this.http.post<MensajeDTO>(enviroments.urlApi+"/auth/forgotPassword?email="+email, null);
  }
}
