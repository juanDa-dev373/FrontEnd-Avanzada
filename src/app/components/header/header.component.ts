import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PopupService } from '../../services/ExtServices/popup.service';
import { ModalService } from '../../services/ExtServices/modal.service';
import { accountDetailDTO } from '../../dto/AccountDetailDTO';
import { TokenServicesService } from '../../services/ExtServices/token-services.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {  
  constructor(private popup:PopupService, private modal:ModalService, private token:TokenServicesService){
  }
  // photo=this.token.getPhoto();
  // nickname=this.token.getNickName();
  openSnackBar() {
    this.popup.openSnackBar('aceptar');
  }
  openModal(){
    this.modal.openModalSingOut();
  }
}
