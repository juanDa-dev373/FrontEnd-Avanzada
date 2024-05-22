import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';
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
    this.carouselIds = this.data.getBusinesses().map(negocio => 'carousel-' + negocio.id);
  }

  id: string = '';
  carouselIds: string[] = [];


  ngOnInit(): void {
  }

  detailsBusiness(id: string) {
    this.routes.navigate(['/home/business-details', id]);
  }

  isEmpty(){
    if (this.data.getBusinesses().length == 0) {
      return true;
    }
    return false;
  }
}
