import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [FormsModule,NgClass],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {
  viewAlert:boolean=false;
  password:string='';
  confirmPassword:string='';
  verifyPass:boolean=false;
  verifyConPass:boolean=false;
  message:string='';
  constructor(private routes:Router){}
  changePassword(){

    if(this.password=='' && this.confirmPassword==''){
      this.verifyPass=true;
      this.verifyConPass=true;
      this.viewAlert=true;
      this.message="debe ingresar todos los campos";
    }else{
      this.viewAlert=false;
      this.verifyPass=false;
      this.verifyConPass=false;
      if(this.password==this.confirmPassword){
        this.verifyConPass=false;
        this.viewAlert=false;
      }else{
        this.verifyConPass=true;
        this.viewAlert=true;
        this.message="las contraseñas no coinciden";
      }
    }
  }
  cancel(){
    this.routes.navigate(['']);
  }

}
