import { Component,Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClientService } from '../../services/user/client.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './create-list.component.html',
  styleUrl: './create-list.component.css'
})
export class CreateListComponent {
  constructor(private routes: Router, private dialog: MatDialogRef<CreateListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private clientService: ClientService) { }

  list = this.data.list;
  name: string = "";

  close() {
    this.dialog.close();
  }

  createBusinessList() {
    if (this.name != '' && this.name.trim().length > 0) {
      this.clientService.createBusinessList(this.name).subscribe({
        next: (data: any) => {
          this.list.push(data.respuesta)
          this.name=""
        },
        error: (err: any) => {
          alert(err.error.respuesta);
          this.name=""
        }
      });
    }
  }

  deleteBusinessList(index:number) {
      this.clientService.deleteBusinessList(this.list[index+1].listName).subscribe({
        next: (data: any) => {
          this.list.splice(index, 1)
        },
        error: (err: any) => {
          alert('El error es: ' + err.error.respuesta);
        }
      });
  }

}