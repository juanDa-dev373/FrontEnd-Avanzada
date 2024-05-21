import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { Business } from '../../model/Business';
import { ClientService } from '../../services/user/client.service';
import { Router, RouterModule} from '@angular/router';
@Component({
  selector: 'app-list-business',
  standalone: true,
  imports: [CommonModule, CarouselComponent,RouterModule],
  templateUrl: './list-business.component.html',
  styleUrl: './list-business.component.css'
})
export class ListBusinessComponent implements OnInit{
  id:string='';
  negocios:Business[]= [];
  carouselIds: string[] = [];
  
  constructor(private clientService:ClientService, private routes:Router) {
    // Genera identificadores únicos para cada carrusel
    this.carouselIds = this.negocios.map(negocio => 'carousel-' + negocio.id);
  }
  ngOnInit(): void {
    this.clientService.getAllBusiness().subscribe({
      next:(data)=>{
        if (data && data.respuesta && Array.isArray(data.respuesta)) {
          this.negocios = data.respuesta;
        } else {
          console.error('La respuesta del servidor no tiene el formato esperado:', data);
        }
      },
      error:(error1)=>{
        console.log(error1.error.respuesta);
      }
    });
  }
  detailsBusiness(id:string){
    this.routes.navigate(['/home/business-details',id]);
  }
}
