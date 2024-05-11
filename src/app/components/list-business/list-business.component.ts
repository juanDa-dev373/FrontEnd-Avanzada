import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { business } from '../../model/business';
import { ClientService } from '../../services/user/client.service';


@Component({
  selector: 'app-list-business',
  standalone: true,
  imports: [CommonModule, CarouselComponent],
  templateUrl: './list-business.component.html',
  styleUrl: './list-business.component.css'
})
export class ListBusinessComponent implements OnInit{
  id:string='';
  negocios:business[]= [];
  carouselIds: string[] = [];
  
  constructor(private clientService:ClientService) {
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
        console.log(error1);
      }
    });
  }

}
