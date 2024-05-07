import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SlideBarComponent } from '../slide-bar/slide-bar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SlideBarComponent, RouterModule, FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  client={
    _id: '662c5c15ae2d777d55a7c140',
    listClient: [
        {
            _id: '01',
            listName: 'Favorites',
            idBusiness: []
        }
    ],
    profilePhoto: 'https://res.cloudinary.com/dybshhtw1/image/upload/v1714183133/unilocal/drv9totu7fs9ecz1pb90.jpg',
    city: 'Salento',
    name: 'Juan fonseca',
    password: '$2a$10$bmW0NFcUB3Up15jzhI0RI.FkkSUNzCS6E5Ik6MMzLfvekhSvwNg7i',
    nickname: 'juan-fonseca',
    email: 'teamcracks38@gmail.com',
    state: 'ACTIVE',
    login: 'ACTIVE',
    _class: 'co.edu.uniquindio.proyecto.model.documents.Client'
  }
}
