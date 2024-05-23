import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClientService } from '../../services/user/client.service';
import { BusinessToListDTO } from '../../dto/BusinessToListDTO';
import { TokenServicesService } from '../../services/ExtServices/token-services.service';
import { CommonModule } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-create-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './choose-list.component.html',
  styleUrl: './choose-list.component.css'
})
export class ChooseListComponent {
  constructor(private routes: Router, private dialog: MatDialogRef<ChooseListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any[], private clientService: ClientService, private local: TokenServicesService) {
    this.getListsBusinesses()
  }

  list = this.data;

  close() {
    this.dialog.close();
  }
  signOut() {
    this.routes.navigate(['']);
    this.dialog.close();
  }

  addBusinessToList(list: any) {
    const addBusiness = list;
    this.clientService.addBusinessToList(addBusiness).subscribe({
      next: (data: any) => {
        this.close();
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
  getListsBusinesses() {
    this.clientService.getListsBusinesses().subscribe({
      next: (data) => {
        if (data && data.respuesta && Array.isArray(data.respuesta)) {
          this.list = data.respuesta;
        } else {
          console.error('La respuesta del servidor no tiene el formato esperado:', data);
        }
      },
      error: (error1) => {
        console.log(error1);
      }
    });
  }
}
