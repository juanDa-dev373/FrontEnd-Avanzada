import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Business } from '../../model/Business';
import { ClientService } from '../../services/user/client.service';
import { TokenServicesService } from '../../services/ExtServices/token-services.service';

import { CommonModule } from '@angular/common';

import { ModalService } from '../../services/ExtServices/modal.service';



import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { BusinessToListDTO } from '../../dto/BusinessToListDTO';
@Component({
  selector: 'app-slide-bar',
  standalone: true,
  imports: [RouterModule, CommonModule, MatTooltipModule, FormsModule],
  templateUrl: './slide-bar.component.html',
  styleUrl: './slide-bar.component.css'
})
export class SlideBarComponent implements OnInit {
  business: Business[] = [];
  listsbusinesses: any[] = []
  constructor(private clientService: ClientService, private local: TokenServicesService, private modal: ModalService) { }
  ngOnInit(): void {
    this.clientService.listBusinessOwner().subscribe({
      next: (data) => {
        if (data && data.respuesta && Array.isArray(data.respuesta)) {
          this.business = data.respuesta;
        } else {
          console.error('La respuesta del servidor no tiene el formato esperado:', data);
        }
      },
      error: (error1) => {
        console.log(error1);
      }
    });
    this.getListsBusinesses();
  }
  viewMessage(): boolean {
    if (this.business.length == 0) {
      return true;
    }
    return false;
  }

  viewMessageFavorites(): boolean {
    return this.listsbusinesses && this.listsbusinesses[0] && this.listsbusinesses[0].idBusiness.length > 0;
  }

  openCreateList() {
    const ref = this.modal.openCreateList(this.listsbusinesses);
    ref.afterClosed().subscribe(() => {
      this.getListsBusinesses();
    });
  }
  
  getListsBusinesses(){
    this.clientService.getListsBusinesses().subscribe({
      next: (data) => {
        if (data && data.respuesta && Array.isArray(data.respuesta)) {
          this.listsbusinesses = data.respuesta;
        } else {
          console.error('La respuesta del servidor no tiene el formato esperado:', data);
        }
      },
      error: (error1) => {
        console.log(error1);
      }
    });
  }

  deleteBusinessToList(list: string, idBusiness:string) {
    const removeBusiness = new BusinessToListDTO (this.local.getCodigo(),list,idBusiness);
    this.clientService.deleteBusinessToList(removeBusiness).subscribe({
      next: (data: any) => {
        this.getListsBusinesses();
      },
      error: (err: any) => {
        let mensaje="";
        for (let e of err.error.respuesta) {
          mensaje+="Campo: "+ e.campo+"  Error: " +e.error+"\n";

        }
         alert(mensaje);
      }
    });
  }

  // openCreateEvent(){
  //   this.modal.createEvent();
  // }
}
