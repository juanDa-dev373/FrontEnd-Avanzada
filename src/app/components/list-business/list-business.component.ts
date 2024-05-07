import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';


@Component({
  selector: 'app-list-business',
  standalone: true,
  imports: [CommonModule, CarouselComponent],
  templateUrl: './list-business.component.html',
  styleUrl: './list-business.component.css'
})
export class ListBusinessComponent {
  id:string='';
  negocios= [
    { nombre: 'Negocio 1', descripcion: 'Descripción del Negocio 1', images:[
      'https://res.cloudinary.com/dybshhtw1/image/upload/v1711831808/cld-sample-3.jpg',
      'https://res.cloudinary.com/dybshhtw1/image/upload/v1711831807/cld-sample-2.jpg',
      'https://res.cloudinary.com/dybshhtw1/image/upload/v1711831805/samples/cup-on-a-table.jpg'
    ] },
    { nombre: 'Negocio 2', descripcion: 'Descripción del Negocio 2', images:[
      'https://res.cloudinary.com/dybshhtw1/image/upload/v1714350096/colombia_ebxiij.jpg',
      'https://res.cloudinary.com/dybshhtw1/image/upload/v1714182576/unilocal/l30ls2cnwjpj4ia2cn68.jpg'
    ] },
    { nombre: 'Negocio 3', descripcion: 'Descripción del Negocio 3' , images:[
      'https://res.cloudinary.com/dybshhtw1/image/upload/v1711831807/cld-sample.jpg'
    ]},
    { nombre: 'Negocio 3', descripcion: 'Descripción del Negocio 3' , images:[
      'https://res.cloudinary.com/dybshhtw1/image/upload/v1711831807/cld-sample.jpg'
    ]},
    { nombre: 'Negocio 2', descripcion: 'Descripción del Negocio 2', images:[
      'https://res.cloudinary.com/dybshhtw1/image/upload/v1714350096/colombia_ebxiij.jpg',
      'https://res.cloudinary.com/dybshhtw1/image/upload/v1714182576/unilocal/l30ls2cnwjpj4ia2cn68.jpg'
    ] }
  ];
  carouselIds: string[] = [];

  constructor() {
    // Genera identificadores únicos para cada carrusel
    this.carouselIds = this.negocios.map((_, index) => 'carousel-' + index);
  }

}
