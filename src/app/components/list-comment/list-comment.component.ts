import { Component, Input, OnInit } from '@angular/core';
import { ClientService } from '../../services/user/client.service';
import { TokenServicesService } from '../../services/ExtServices/token-services.service';
import { FormsModule } from '@angular/forms';
import { CalificationDTO } from '../../dto/CalificationDTO';
import { PopupService } from '../../services/ExtServices/popup.service';

@Component({
  selector: 'app-list-comment',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './list-comment.component.html',
  styleUrl: './list-comment.component.css'
})
export class ListCommentComponent implements OnInit {
  @Input()comment:any={};
  client:any={};
  constructor(private clients:ClientService, private token:TokenServicesService, private poupup:PopupService){}
  photo:string = this.token.getPhoto();
  limite:boolean=true;
  number:number=0;
  verifyCalifycation:boolean=true;
  ngOnInit(): void {
    this.clients.getClientById(this.comment.idClient).subscribe({
      next:(data)=>{
        this.client=data.respuesta;
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
  addResponse(){
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
}
