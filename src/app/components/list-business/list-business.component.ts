import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { Business } from '../../model/Business';
import { ClientService } from '../../services/user/client.service';
import { Router, RouterModule } from '@angular/router';
import { DataService } from '../../services/ExtServices/data.service';
@Component({
  selector: 'app-list-business',
  standalone: true,
  imports: [CommonModule, CarouselComponent, RouterModule],
  templateUrl: './list-business.component.html',
  styleUrl: './list-business.component.css'
})
export class ListBusinessComponent implements OnInit {
  
  constructor(private clientService: ClientService, private routes: Router, public data: DataService) {
    // Genera identificadores únicos para cada carrusel
    if(data.inicio==true){
       this.getAllBusiness();
       data.inicio=false;
    }
    this.carouselIds = this.data.getBusinesses().map(negocio => 'carousel-' + negocio.id);
  }

  id: string = '';
  carouselIds: string[] = [];


  ngOnInit(): void {
  }

  detailsBusiness(id: string) {
    this.routes.navigate(['/home/business-details', id]);
  }

  getAllBusiness(){
    this.clientService.getAllBusiness().subscribe({
      next: (data) => {
        if (data && data.respuesta && Array.isArray(data.respuesta)) {
          this.data.setBusinesses(data.respuesta);
        } else {
          console.error('La respuesta del servidor no tiene el formato esperado:', data);
        }
      },
      error: (error1) => {
        console.log(error1.error.respuesta);
      }
    });
  }

}
