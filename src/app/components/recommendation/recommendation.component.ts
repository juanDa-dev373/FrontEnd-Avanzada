import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { Business } from '../../model/Business';
import { ClientService } from '../../services/user/client.service';
import { Router, RouterModule } from '@angular/router';
import { DataService } from '../../services/ExtServices/data.service';
@Component({
  selector: 'app-recommendation',
  standalone: true,
  imports: [CommonModule, CarouselComponent, RouterModule],
  templateUrl: './recommendation.component.html',
  styleUrl: './recommendation.component.css'
})
export class RecommendationComponent {
  
  constructor(private clientService: ClientService, private routes: Router, public data: DataService) {
    this.carouselIds = this.businesses.map(negocio => 'carousel-' + negocio.id);
  }

  id: string = '';
  carouselIds: string[] = [];
  businesses: Business []=[];

  ngOnInit(): void {
    this.getAllBusiness();
  }

  detailsBusiness(id: string) {
    this.routes.navigate(['/home/business-details', id]);
  }

  getAllBusiness(){
    this.clientService.getAllBusiness().subscribe({
      next: (data) => {
        if (data && data.respuesta && Array.isArray(data.respuesta)) {
          this.businesses=data.respuesta;
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
