import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Business } from '../../model/Business';
import { ClientService } from '../../services/user/client.service';
import { TokenServicesService } from '../../services/ExtServices/token-services.service';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/ExtServices/modal.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
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
  openCreateList() {
    const ref = this.modal.openCreateList(this.listsbusinesses);
    ref.afterClosed().subscribe(() => {
      this.getListsBusinesses();
    });
  }
  openChooseList() {
    this.modal.openChooseList();
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
  // openCreateEvent(){
  //   this.modal.createEvent();
  // }
}
