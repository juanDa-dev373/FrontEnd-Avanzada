import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { error } from 'console';
import { AuthService } from '../../services/user/auth.service';

@Component({
  selector: 'app-password-recovery',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './password-recovery.component.html',
  styleUrl: './password-recovery.component.css'
})
export class PasswordRecoveryComponent {
    constructor(private forgot:AuthService){}
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
