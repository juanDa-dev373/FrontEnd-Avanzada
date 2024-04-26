import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ForgotPasswordService } from '../../services/user/forgot-password.service';
import { FormsModule } from '@angular/forms';
import { error } from 'console';

@Component({
  selector: 'app-password-recovery',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './password-recovery.component.html',
  styleUrl: './password-recovery.component.css'
})
export class PasswordRecoveryComponent {
    constructor(private forgot:ForgotPasswordService){}
    email:string = '';
    confirm(){
      console.log(this.email)
      this.forgot.forgotPassword(this.email).subscribe({
        next:(data)=>{
          alert("se le a enviado un correo a: "+this.email);
          this.email='';
        },
        error:(error)=>{
          alert(error.respuesta);
        }
      });
    }


}
