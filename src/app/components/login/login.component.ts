import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { loginDTO } from '../../dto/loginDTO';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenServicesService } from '../../services/ExtServices/token-services.service';
import { AuthService } from '../../services/user/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  invalidmail:string="form-control";
  invalidpass:string="form-control";
  Login:loginDTO;
  constructor(private loginService:AuthService, private routes:Router, private local:TokenServicesService){
    this.Login = new loginDTO();
  }
  errorMessage:string='';
  token:string='';
  VerifyPass(event:any){
    this.invalidpass = "form-control ";
  }
  
  VerifyMail(event:any){
    this.invalidmail = "form-control ";
  }
  login(){
    if(this.Login.email == '' ){
      this.invalidmail=this.invalidmail+" is-invalid";
    }
    if(this.Login.password == ''){
      this.invalidpass=this.invalidpass+" is-invalid";
    }
    if(this.Login.password != '' && this.Login.email != '' ){
      //this.modal.open();
      this.loginService.getToken(this.Login).subscribe({
        next: (data:any) => {
          this.local.setToken(data.respuesta.token);
          this.routes.navigate(['/home/list-business']);
        }, 
        error: (err:any) => {
          alert('El error es: '+err.error.respuesta);
        }

      });  
    }
    
  }

  public buscarNumero(lista:number[], numero:number ):boolean{
      
    return false;
  }
}
