import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../components/popups/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modal:MatDialog) { }
  openModal(){
    this.modal.open(DialogComponent);
  }
}
