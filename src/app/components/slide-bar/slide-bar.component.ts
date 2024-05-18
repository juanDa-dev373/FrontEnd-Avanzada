import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { business } from '../../model/business';
import { ClientService } from '../../services/user/client.service';
import { TokenServicesService } from '../../services/ExtServices/token-services.service';

import { CommonModule } from '@angular/common';

import { ModalService } from '../../services/ExtServices/modal.service';



@Component({
  selector: 'app-slide-bar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './slide-bar.component.html',
  styleUrl: './slide-bar.component.css'
})
export class SlideBarComponent implements OnInit{
  business:business[]=[];
  constructor(private clientService:ClientService, private local:TokenServicesService, private modal:ModalService){}
  ngOnInit(): void {
        this.clientService.listBusinessOwner().subscribe({
          next:(data)=>{
            if (data && data.respuesta && Array.isArray(data.respuesta)) {
              this.business = data.respuesta;
            } else {
              console.error('La respuesta del servidor no tiene el formato esperado:', data);
            }
          },
          error:(error1)=>{
            console.log(error1);
          }
        });
    }
    openCreateList(){
      this.modal.openCreateList();
    }
}
