import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { FormsModule } from '@angular/forms';
import { typeBusiness } from '../../model/typeBusiness';

@Component({
  selector: 'app-create-business',
  standalone: true,
  imports: [CarouselComponent, FormsModule],
  templateUrl: './create-business.component.html',
  styleUrl: './create-business.component.css'
})
export class CreateBusinessComponent {
  images:string[]=[
    'https://res.cloudinary.com/dybshhtw1/image/upload/v1711831808/cld-sample-3.jpg',
    'https://res.cloudinary.com/dybshhtw1/image/upload/v1711831807/cld-sample-2.jpg',
    'https://res.cloudinary.com/dybshhtw1/image/upload/v1711831805/samples/cup-on-a-table.jpg'
  ];
}
