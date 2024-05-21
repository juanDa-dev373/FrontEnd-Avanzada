import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../../components/popups/dialog/dialog.component';
import { CreateListComponent } from '../../components/create-list/create-list.component';
import { ChooseListComponent } from '../../components/choose-list/choose-list.component';
import { CreateEventComponent } from '../../components/create-event/create-event.component';
import { ClientService } from '../user/client.service';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modal:MatDialog, private cliente:ClientService) { }
  
  openModalSingOut(){
    this.modal.open(DialogComponent, {
      data: { title: 'Sign out', content: 'Are you sure you want to close the section?'},
      panelClass:'modal-dialog"',
      disableClose: true
    });

  }

  openCreateList(list:any[]){
    
    const ref=this.modal.open(CreateListComponent, {
      data: { list },
      disableClose: true
    })
    return ref;
  }

  openChooseList(){
    this.modal.open(ChooseListComponent, {
      disableClose: true
    })
  }

  // createEvent(){
  //   this.modal.open(CreateEventComponent, {
  //     data: {
  //       name: 'Choose List',
  //       animal: 'Choose List'
  //     },
  //   })
  // }

}
