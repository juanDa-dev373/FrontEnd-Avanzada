import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { MapService } from '../../services/ExtServices/map.service';
import { TokenServicesService } from '../../services/ExtServices/token-services.service';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../services/user/client.service';
import { businessDTO } from '../../dto/businessDTO';

@Component({
  selector: 'app-business-datail',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './business-datail.component.html',
  styleUrl: './business-datail.component.css'
})
export class BusinessDatailComponent implements OnInit{
  photo:string=this.token.getPhoto();
  prueba:string='width:'; 
  porcentaje:number=0;
  sum:number=0;
  j:number=0;
  idBusiness:string='';
  businessDetail:any={};
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
        console.log(this.businessDetail);
      },
      error:(error)=>{

      }
    });
    for(let i=0; i<=6; i++){
      this.sum=this.sum+i;
      this.j=i;
    }
    this.porcentaje=((this.sum/this.j)/this.j)*100;
    this.prueba+=this.porcentaje+'%;'
  }

}
