import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PopupService } from '../../services/ExtServices/popup.service';
import { ModalService } from '../../services/ExtServices/modal.service';
import { accountDetailDTO } from '../../dto/accountDetailDTO';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() client?:accountDetailDTO;
  constructor(private popup:PopupService, private modal:ModalService){
  }
  openSnackBar() {
    this.popup.openSnackBar('aceptar');
  }
  openModal(){
    this.modal.openModal();
  }
}
