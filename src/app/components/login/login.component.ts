import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { loginDTO } from '../../dto/loginDTO';
import { LoginService } from '../../services/user/login.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';



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
  constructor(private loginService:LoginService, private routes:Router){
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
          this.routes.navigate(['/home']);
        }, 
        error: (err) => {
          alert('El error es: '+err.error.respuesta);
        }

      });  
    }
    
  }

  public buscarNumero(lista:number[], numero:number ):boolean{
      
    return false;
  }
}
