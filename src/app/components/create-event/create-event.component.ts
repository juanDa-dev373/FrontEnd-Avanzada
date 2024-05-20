import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
declare var $: any;

@Component({
  selector: 'app-create-list',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule],
  templateUrl: './create-event.component.html',
  providers: [provideNativeDateAdapter()],
  styleUrl: './create-event.component.css'
})
export class CreateEventComponent {
  constructor(private routes: Router, private dialog: MatDialogRef<CreateEventComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  close() {
    this.dialog.close();
  }
  signOut() {
    this.routes.navigate(['']);
    this.dialog.close();
  }
}
