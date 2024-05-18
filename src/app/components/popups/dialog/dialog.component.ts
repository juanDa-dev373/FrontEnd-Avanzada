import { Component,Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TokenServicesService } from '../../../services/ExtServices/token-services.service';
declare var $:any;


@Component({
    selector: 'app-dialog',
    standalone: true,
    templateUrl: './dialog.component.html',
    styleUrl: './dialog.component.css',
    imports: [FormsModule]
})
export class DialogComponent {
  constructor(private routes:Router,private dialog:MatDialogRef<DialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any,private local:TokenServicesService){}

  ngOnInit(): void {
  }
  
  close(){
    this.dialog.close();
  }
  signOut(){
    this.local.signUp();
    this.routes.navigate(['']);
    this.dialog.close();
  }
}
