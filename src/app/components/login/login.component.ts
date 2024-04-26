import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { loginDTO } from '../../dto/loginDTO';
import { LoginService } from '../../services/user/login.service';
import { HttpClientModule } from '@angular/common/http';



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
  constructor(private loginService:LoginService){
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
      this.loginService.getToken(this.Login).subscribe({
        next: (data) => {
          console.log(data.respuesta);
          alert('Su login es correcto');
        }, 
        error: (err) => {
          alert('El error es: '+err.error.respuesta);
        }

      });
      console.log(this.token)
    
    }
    
  }

  public buscarNumero(lista:number[], numero:number ):boolean{
      
    return false;
  }
}
