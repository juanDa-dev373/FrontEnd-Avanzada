import { Component, Input, OnInit } from '@angular/core';
import { ClientService } from '../../services/user/client.service';
import { TokenServicesService } from '../../services/ExtServices/token-services.service';
import { FormsModule } from '@angular/forms';
import { CalificationDTO } from '../../dto/CalificationDTO';

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
  constructor(private clients:ClientService, private token:TokenServicesService){}
  photo:string = this.token.getPhoto();
  limite:boolean=true;
  number:number=0;
  ngOnInit(): void {
    this.clients.getClientById(this.comment.idClient).subscribe({
      next:(data)=>{
        this.client=data.respuesta;
      },
      error:(error)=>{
        console.log(error.error.respuesta);
      }
    });
  }
  addResponse(){
    if(this.number>-1 && this.number<6){
      this.clients.calification(new CalificationDTO(this.comment.id,this.comment.idClient, this.comment.idBusiness, this.number)).subscribe({
        next:(data)=>{
          console.log(data.respuesta);
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
