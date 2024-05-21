import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { MapService } from '../../services/ExtServices/map.service';
import { TokenServicesService } from '../../services/ExtServices/token-services.service';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../services/user/client.service';
import { FormsModule } from '@angular/forms';
import { CreateCommentDTO } from '../../dto/CreateCommentDTO';
import { NgClass } from '@angular/common';
import { ListCommentComponent } from '../list-comment/list-comment.component';

@Component({
  selector: 'app-business-datail',
  standalone: true,
  imports: [CarouselComponent, FormsModule, NgClass, ListCommentComponent],
  templateUrl: './business-datail.component.html',
  styleUrl: './business-datail.component.css'
})
export class BusinessDatailComponent implements OnInit{
  photo:string=this.token.getPhoto();
  prueba:string='width:'; 
  porcentaje:number=50;
  sum:number=0;
  j:number=0;
  idBusiness:string='';
  businessDetail:any={};
  array:any[]=[];
  commentMessage:string='';
  qualification:number=0;
  verifyCommentMessage:boolean=false;
  commentList:any[]=[];
  errorComentList:string='';
  constructor(private map:MapService, private token:TokenServicesService, private route:ActivatedRoute, private clients:ClientService){
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
      },
      error:(error)=>{

      }
    });
    this.clients.listComment(this.businessDetail.id).subscribe({
      next:(data)=>{
        this.commentList=data.respuesta;
      },
      error:(error)=>{
        this.errorComentList=error.error.respuesta;
      }
    });
    //this.map.pintarMarcadores(this.array);

    // for(let i=0; i<=6; i++){
    //   this.sum=this.sum+i;
    //   this.j=i;
    // }
    // this.porcentaje=((this.sum/this.j)/this.j)*100;
    this.prueba+=this.porcentaje+'%;'
  }
  addComment(){
    const date:Date = new Date();
    const dateString = date.getFullYear().toString()+'/'+(date.getMonth()+1)+'/'+date.getDay()+'--'+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
    const comment:CreateCommentDTO= new CreateCommentDTO('', dateString, this.token.getCodigo(), this.businessDetail.id,this.commentMessage);
    if(this.commentMessage==''){
      this.verifyCommentMessage=true;
    }else{
      this.verifyCommentMessage=false;
    }
    
    if(this.commentMessage!=''){
      this.clients.createComment(comment).subscribe({
        next:(data)=>{
          console.log(data.respuesta);
        },
        error:(error)=>{
  
        }
      });
    }
  }

}
