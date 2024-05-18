import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { signUpDTO } from '../../dto/signUpDTO';
import { ImageService } from '../../services/user/image.service';
import { error } from 'console';
import { AuthService } from '../../services/user/auth.service';
import { NgClass, NgIf } from '@angular/common';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, RouterModule,NgIf,NgClass],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  // visualisar los warnings
  warningName = true;
  warningNickName = true;
  warningMail = true;
  warningPassword = true;
  warningCity = true;
  isLoading?:boolean;
  // validaciones en los campos de los inputs
  validateName:String="form-control";
  validateNickName:String="form-control";
  validateMail:String="form-control";
  validatePassword:String="form-control";
  validateCity:String="form-select";

  ValidateN(event:any){
    console.log("t")
    this.validateName="form-control";
    this.warningName = true;
  }
  ValidateNN(event:any){
    this.validateNickName="form-control";
    this.warningNickName=true;
  }
  ValidateM(event:any){
    this.validateMail="form-control";
    this.warningMail = true;
  }
  ValidateP(event:any){
    this.validatePassword="form-control";
    this.warningPassword=true;
  }
  ValidateC(event:any){
    this.validateCity="form-select";
    this.warningCity=true;
  }
  cloudinary?:any;
  image:string='https://res.cloudinary.com/dybshhtw1/image/upload/v1714166700/unilocal/perfil_tcaium.gif';
  account:signUpDTO;
  constructor(private imageS:ImageService, private auth:AuthService){
    this.account = new signUpDTO();
  }
  SingUp(event:any){
      if(this.account.name == ""){
        this.validateName = this.validateName+" is-invalid"
        this.warningName = false;
      }
      if(this.account.nickname == ""){
        this.validateNickName = this.validateNickName+" is-invalid"
        this.warningNickName = false;
      }
      if(this.account.email == ""){
        this.validateMail = this.validateMail+" is-invalid"
        this.warningMail = false;
      }
      if(this.account.password == ""){
        this.validatePassword = this.validatePassword+" is-invalid"
        this.warningPassword = false;
      }
      if(this.account.city == "") {
        this.validateCity = this.validateCity+" is-invalid";
        this.warningCity = false;
      }
      if(this.account.name != ""&&this.account.nickname != ""&&this.account.email != ""&&this.account.password != ""&&this.account.city != ""&&this.account.photo!=""){
        console.log(this.account.photo);
        this.auth.signUpClient(this.account).subscribe({
          next:(data)=>{
            alert(data.respuesta);
          },
          error:(error)=>{
            for(let m in error.error.respuesta){
              alert(m);
            } 
          }
        });
      }
  }
  // agregar una imagen
  imagePerfil(event: any) {
    const file: File = event.target.files[0];
    this.isLoading=true;
    if (!file) {
      console.error('No file selected');
      return;
    }
    const formData = new FormData();
    formData.append('file', file);
    this.imageS.saveImageCloudinary(formData).subscribe({
      next:(data)=>{
          this.cloudinary=data.respuesta;
          console.log(this.cloudinary);
          if (this.cloudinary.hasOwnProperty('secure_url')) {
            this.image = this.cloudinary['secure_url'];
            this.account.photo = this.image;
            console.log(this.image)
          } 
          this.isLoading=false;
      },
      error:(error)=>{
        alert(error.respuesta);
        this.isLoading=false;
      }
    });
  }
}
