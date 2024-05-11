import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
declare var $: any;

@Component({
  selector: 'app-create-list',
  standalone: true,
  imports: [],
  templateUrl: './create-list.component.html',
  styleUrl: './create-list.component.css'
})
export class CreateListComponent {
  constructor(private routes: Router, private dialog: MatDialogRef<CreateListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  close() {
    this.dialog.close();
  }
  signOut() {
    this.routes.navigate(['']);
    this.dialog.close();
  }
}
