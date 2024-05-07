import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(mensaje:string) {
    const snackBarRef: MatSnackBarRef<SimpleSnackBar> = this._snackBar.open(mensaje,'Cerrar');
    snackBarRef.onAction().subscribe(() => {
      // Código a ejecutar cuando se hace clic en el botón "Cerrar"
      snackBarRef.dismiss();
    });
  }
}
