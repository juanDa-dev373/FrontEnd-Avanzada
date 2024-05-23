import { Component, Input, OnInit } from '@angular/core';
import { ClientService } from '../../services/user/client.service';
import { TokenServicesService } from '../../services/ExtServices/token-services.service';
import { FormsModule } from '@angular/forms';
import { CalificationDTO } from '../../dto/CalificationDTO';
import { PopupService } from '../../services/ExtServices/popup.service';
import { NgClass } from '@angular/common';
import { ResponseCommentDTO } from '../../dto/ResponseCommentDTO';
import { DeleteCommentDTO } from '../../dto/DeleteCommentDTO';

@Component({
  selector: 'app-list-comment',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './list-comment.component.html',
  styleUrl: './list-comment.component.css'
})
export class ListCommentComponent implements OnInit {
  @Input()comment:any={};
  client:any={};
  business:any={};
  clientOwner:any={};
  constructor(private clients:ClientService, private token:TokenServicesService, private poupup:PopupService){}
  photo:string = this.token.getPhoto();
  cod:string=this.token.getCodigo();
  limite:boolean=true;
  number:number=0;
  verifyCalifycation:boolean=true;
  verifyClient:boolean=false;
  ngOnInit(): void {
    this.clients.getClientById(this.comment.idClient).subscribe({
      next:(data)=>{
        this.client=data.respuesta;
      },
      error:(error)=>{
        console.log(error.error.respuesta);
      }
    });
    this.clients.getBusiness(this.comment.idBusiness).subscribe({
      next:(data)=>{
        this.business= data.respuesta;
        this.clients.getClientById(this.business.idClient).subscribe({
          next:(data)=>{
            this.clientOwner=data.respuesta;
          },
          error:(error)=>{
            console.log(error.error.respuesta)
          }
        });
        if(this.business.idClient==this.token.getCodigo()){
          this.verifyClient=false;
          console.log('creador: '+this.business.idClient+ 'cliente logeado: '+this.token.getCodigo());
        }else{
          this.verifyClient=true;
          console.log('no entro');
        }
      },
      error:(error)=>{
        console.log(error.error.respuesta);
      }
    });
    if(this.comment.rating == -1){
      this.verifyCalifycation=false;
      this.number = this.comment.rating;
    }
  }
  addCalification(){
    if(this.number>-1 && this.number<6){
      this.clients.calification(new CalificationDTO(this.comment.id,this.comment.idClient, this.comment.idBusiness, this.number)).subscribe({
        next:(data)=>{
          this.poupup.openSnackBar(data.respuesta);
          window.location.reload();
        },
        error:(error)=>{
          console.log(error.error.respuesta);
        }
      });
      this.limite=true;
    }else{
      this.limite=false;
    }
  }
  messageAnswer:string='';
  verifyAnswer:boolean=false;
  addAnswer(){
    if(this.messageAnswer!=''){
      this.verifyAnswer=false;
      this.clients.responseComment(new ResponseCommentDTO(this.comment.id, '',this.token.getCodigo(),this.comment.idBusiness,this.messageAnswer)).subscribe({
        next:(data)=>{
          this.poupup.openSnackBar(data.respuesta);
          window.location.reload();
        },
        error:(error)=>{
          console.log(error.error.respuesta);
        }
      });
    }else{
      this.verifyAnswer=true;
    }
  }
  deleteComment(){
    console.log(this.comment);
    this.clients.deleteComment(new DeleteCommentDTO(this.comment.id, this.comment.idClient, this.comment.idBusiness, this.comment.idClient)).subscribe({
      next:(data)=>{
        this.poupup.openSnackBar(data.respuesta);
        window.location.reload();
      },
      error:(error)=>{
        console.log(error.error.respuesta);
      }
    });
  }
}
