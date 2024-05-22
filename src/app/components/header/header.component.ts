import { Component, Input, NgZone } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PopupService } from '../../services/ExtServices/popup.service';
import { ModalService } from '../../services/ExtServices/modal.service';
import { TokenServicesService } from '../../services/ExtServices/token-services.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/ExtServices/data.service';
import { ClientService } from '../../services/user/client.service';
import { Location } from '../../model/Location';
import { LocationDTO } from '../../dto/LocationDTO';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private popup: PopupService, private modal: ModalService, private token: TokenServicesService,
    private routes: Router, private data: DataService, private clientService: ClientService, private ngZone:NgZone
  ) {
  }
  filtro: string = "name";
  search: string = "";
  photo = this.token.getPhoto();
  nickname = this.token.getNickName();
  locationDTO = new LocationDTO();

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
              this.search="";
              this.routes.navigate(['/home/list-business']);
            } 
          },
          error: (error1) => {
            this.data.setMessage(error1.error.respuesta);
            this.data.setBusinesses([]);
            this.routes.navigate(['/home/list-business']);
          }
        });
      } else if (this.filtro == "type") {
        this.clientService.listBusinessType(this.search).subscribe({
          next: (data) => {
            if (data && data.respuesta && Array.isArray(data.respuesta)) {
              this.data.setBusinesses(data.respuesta);
              this.search="";
              this.routes.navigate(['/home/list-business']);
            }
          },
          error: (error1) => {
            this.data.setMessage(error1.error.respuesta);
            this.data.setBusinesses([]);
            this.routes.navigate(['/home/list-business']);

          }
        });
      } else if (this.filtro == "location") {
        this.getUserLocation();
        this.locationDTO.search=this.search;
        console.log(this.locationDTO)
        
        this.clientService.listBusinessLocation(this.locationDTO).subscribe({
          next: (data) => {
            if (data && data.respuesta && Array.isArray(data.respuesta)) {
              this.data.setBusinesses(data.respuesta);
              this.search="";
              
            }
          },
          error: (err) => {
            this.data.setMessage(err.error.respuesta);
            this.data.setBusinesses([]);
            this.routes.navigate(['/home/list-business']);
          }
        });

      } else {
        this.data.setBusinesses([])
      }
      
    }
  }

  getUserLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.ngZone.run(() => {
            this.locationDTO.location.latitude = position.coords.latitude;
            this.locationDTO.location.longitude = position.coords.longitude;
          });
        },
        (error) => {
          this.ngZone.run(() => {
            switch (error.code) {
              case error.PERMISSION_DENIED:
                console.log( "User denied the request for Geolocation.");
                break;
              case error.POSITION_UNAVAILABLE:
                console.log("Location information is unavailable.");
                break;
              case error.TIMEOUT:
                console.log("The request to get user location timed out.");
                break;
            }
          });
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
}
