import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClientService } from '../../services/user/client.service';

@Component({
  selector: 'app-create-list',
  standalone: true,
  imports: [],
  templateUrl: './create-list.component.html',
  styleUrl: './create-list.component.css'
})
export class CreateListComponent {
  constructor(private routes: Router, private dialog: MatDialogRef<CreateListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private clientService: ClientService) { }

  list=this.data.list;
  name: string="";
  close() {
    this.dialog.close();
  }
  
  createBusinessList() {
    this.clientService.createBusinessList(this.name).subscribe({
      next: (data:any) => {
        console.log(data.respuesta);
      }, 
      error: (err:any) => {
        alert('El error es: '+err.error.respuesta);
      }

    });  

  }

}