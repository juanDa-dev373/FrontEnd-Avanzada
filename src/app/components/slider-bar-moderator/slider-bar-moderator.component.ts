import { Component, OnInit } from '@angular/core';
import { ModeratorService } from '../../services/user/moderator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider-bar-moderator',
  standalone: true,
  imports: [],
  templateUrl: './slider-bar-moderator.component.html',
  styleUrl: './slider-bar-moderator.component.css'
})
export class SliderBarModeratorComponent implements OnInit {
  constructor(private moderator:ModeratorService, private routes:Router){}
  businessPending:any[]=[];
  ngOnInit(): void {
      this.moderator.getAllBusinessPending().subscribe({
        next:(data)=>{
          this.businessPending=data.respuesta;
        },
        error:(error)=>{
          console.log(error.error.respuesta);
        }
      });
  }
  viewBusiness(idBusiness:string){
    this.routes.navigate(['/home/business-details',idBusiness]);
  }
}
