import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { MapService } from '../../services/ExtServices/map.service';
import { TokenServicesService } from '../../services/ExtServices/token-services.service';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../services/user/client.service';
import { FormsModule } from '@angular/forms';
import { CreateCommentDTO } from '../../dto/CreateCommentDTO';
import { CommonModule, NgClass } from '@angular/common';
import { ListCommentComponent } from '../list-comment/list-comment.component';
import { PopupService } from '../../services/ExtServices/popup.service';
import { ModalService } from '../../services/ExtServices/modal.service';
import { BusinessToListDTO } from '../../dto/BusinessToListDTO';

@Component({
  selector: 'app-business-datail',
  standalone: true,
  imports: [CarouselComponent, FormsModule, NgClass, ListCommentComponent, CommonModule],
  templateUrl: './business-datail.component.html',
  styleUrl: './business-datail.component.css'
})
export class BusinessDatailComponent implements OnInit{

  photo:string=this.token.getPhoto();
  cod:string = this.token.getCodigo();
  prueba:string='width:'; 
  porcentaje:number=0;
  idBusiness:string='';
  businessDetail:any={};
  array:any[]=[];
  commentMessage:string='';
  qualification:number=0;
  verifyCommentMessage:boolean=false;
  commentList:any[]=[];
  eventList:any[]=[];
  errorComentList:string='';
  constructor(private map:MapService, private token:TokenServicesService, 
    private route:ActivatedRoute, private clients:ClientService, private popup:PopupService, private modal: ModalService){
    this.route.params.subscribe(params=>{
      this.idBusiness = params['idBusiness'];
    });
  }
  ngOnInit(): void {
    this.map.crearMapa();
    this.clients.getBusiness(this.idBusiness).subscribe({
      next:(data)=>{
        this.businessDetail=data.respuesta;
        this.array.push(data.respuesta);
        this.map.pintarMarcadores(this.array);
        this.clients.listComment(this.businessDetail.id).subscribe({
          next:(data)=>{
            this.commentList=data.respuesta;
            for(let comen of this.commentList){
              if(comen.rating !=-1){
                this.porcentaje+=((comen.rating/this.commentList.length)/5)*100;
              }
            }
            this.prueba+=this.porcentaje+'%';
          },
          error:(error)=>{
            this.errorComentList=error.error.respuesta;
          }
        });
        this.clients.listEventBusiness(this.businessDetail.id).subscribe({
          next:(data)=>{
            this.eventList=data.respuesta;
            console.log(this.eventList);
          },
          error:(error)=>{
            console.log(error.error.respuesta);
          }
        });
      },
      error:(error)=>{
        console.log(error.error.respuesta);
      }
    });
  }

  chooseList() {
      this.modal.openChooseList(this.idBusiness);
  }

  addFavorites() {
      const addBusiness = new BusinessToListDTO (this.businessDetail.idClient,"01",this.idBusiness);
      this.clients.addBusinessToList(addBusiness).subscribe({
        next: (data: any) => {

        },
        error: (err: any) => {
           alert(err.error.respuesta);
        }
      });
  }
    
  addComment(){
    const comment:CreateCommentDTO= new CreateCommentDTO('', this.token.getCodigo(), this.businessDetail.id,this.commentMessage);
    if(this.commentMessage==''){
      this.verifyCommentMessage=true;
    }else{
      this.verifyCommentMessage=false;
    }
    if(this.commentMessage!=''){
      this.clients.createComment(comment).subscribe({
        next:(data)=>{
          this.popup.openSnackBar(data.respuesta);
          window.location.reload();
        },
        error:(error)=>{
          console.log(error.error.respuesta);
        }
      });
    }
  }

}
