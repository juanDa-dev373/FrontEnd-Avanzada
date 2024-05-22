import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PopupService } from '../../services/ExtServices/popup.service';
import { ModalService } from '../../services/ExtServices/modal.service';
import { AccountDetailDTO } from '../../dto/AccountDetailDTO';
import { TokenServicesService } from '../../services/ExtServices/token-services.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/ExtServices/data.service';
import { ClientService } from '../../services/user/client.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private popup: PopupService, private modal: ModalService, private token: TokenServicesService,
    private routes: Router, private data: DataService, private clientService: ClientService
  ) {
  }
  filtro: string = "";
  search: string = "";
  photo = this.token.getPhoto();
  nickname = this.token.getNickName();

  selectFiltro(filtro: string) {
    this.filtro = filtro;
    console.log(this.filtro)
  }
  openSnackBar() {
    this.popup.openSnackBar('aceptar');
  }
  openModal() {
    this.modal.openModalSingOut();
  }
  searchBusiness() {
    
    if (this.search.length != 0 && this.search != " ") {
      
      if (this.filtro == "name") {
        console.log(this.search)
        this.clientService.listBusinessName(this.search).subscribe({
          next: (data) => {
            if (data && data.respuesta && Array.isArray(data.respuesta)) {
              this.data.setBusinesses(data.respuesta);
              this.routes.navigate(['/home/list-business']);
            } 
          },
          error: (error1) => {
            console.error('La respuesta del servidor no tiene el formato esperado:',error1.error.respuesta);
            this.data.setBusinesses([])
            this.routes.navigate(['/home/list-business']);
          }
        });
      } else if (this.filtro == "type") {
        this.clientService.listBusinessType(this.search).subscribe({
          next: (data) => {
            if (data && data.respuesta && Array.isArray(data.respuesta)) {
              this.data.setBusinesses(data.respuesta);
              this.routes.navigate(['/home/list-business']);
            } else {
              console.error('La respuesta del servidor no tiene el formato esperado:', data);
            }
          },
          error: (error1) => {
            console.error('La respuesta del servidor no tiene el formato esperado:',error1.error.respuesta);
            this.data.setBusinesses([])
            this.routes.navigate(['/home/list-business']);
          }
        });
      } else if (this.filtro == "location") {
        // this.clientService.listBusinessLocation(this.search).subscribe({
        //   next: (data) => {
        //     if (data && data.respuesta && Array.isArray(data.respuesta)) {
        //       this.data.setData(data.respuesta);
        //     } else {
        //       console.error('La respuesta del servidor no tiene el formato esperado:', data);
        //     }
        //   },
        //   error: (err) => {
        //     console.log(err.error.respuesta);
        //   }
        // });

      } else {
        this.data.setBusinesses([])
      }
      
    }
  }
}
