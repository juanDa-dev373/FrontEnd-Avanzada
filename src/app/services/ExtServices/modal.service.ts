import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../../components/popups/dialog/dialog.component';
import { CreateListComponent } from '../../components/create-list/create-list.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modal:MatDialog) { }
  
  openModalSingOut(){
    this.modal.open(DialogComponent, {
      data: { title: 'Sign out', content: 'Are you sure you want to close the section?'},
      panelClass:'modal-dialog"',
      disableClose: true
    });
  }

  openCreateList(list:any){
    this.modal.open(CreateListComponent, {
      data: { list: list },
      disableClose: true
    })
    
  }

}
