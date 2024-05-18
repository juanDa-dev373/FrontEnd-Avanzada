import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { client } from '../../model/client';
import { ClientService } from '../../services/user/client.service';
import { accountDetailDTO } from '../../dto/accountDetailDTO';
import { SlideBarComponent } from '../slide-bar/slide-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SlideBarComponent, RouterModule, FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  client?:accountDetailDTO;
  
  constructor(private clientService:ClientService){}
  
  ngOnInit(): void {
      this.clientService.getClientById().subscribe({
        next:(data)=>{
          if (data && data.respuesta) {
            console.log(data.respuesta);
            this.client = data.respuesta;
          } else {
            console.error('La respuesta del servidor no tiene el formato esperado:', data);
          }
        },
        error:(error)=>{
        }
      });
  }
  
}
