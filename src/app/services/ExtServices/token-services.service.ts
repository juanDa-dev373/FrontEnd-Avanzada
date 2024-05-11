import { Injectable } from '@angular/core';
import { AsyncLocalStorage } from 'async_hooks';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TokenServicesService {

  setToken(token:string){
    window.sessionStorage.removeItem("token");
    window.sessionStorage.setItem("token", token);
  }
  getToken():string|null{
    return window.sessionStorage.getItem("token");
  }
}
