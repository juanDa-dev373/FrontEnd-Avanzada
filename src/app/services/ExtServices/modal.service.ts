import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../components/popups/dialog/dialog.component';
import { CreateListComponent } from '../../components/create-list/create-list.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modal:MatDialog) { }
  
  openModalSingOut(){
    this.modal.open(DialogComponent, {
      data: { title: 'Sing out', content: 'Are you sure you want to close the section?'},
      panelClass:'modal-dialog"'
    });
  }

  openCreateList(){
    this.modal.open(CreateListComponent, {
      data: {
        name: 'Create List',
        animal: 'Create List'
      },
    })
  }

}
