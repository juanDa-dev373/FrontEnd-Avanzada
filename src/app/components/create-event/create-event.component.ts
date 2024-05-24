import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import {MatDatepickerInputEvent, MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import { ClientService } from '../../services/user/client.service';
import { EventDTO } from '../../dto/EventDTO';
import { FormsModule } from '@angular/forms';
import { PopupService } from '../../services/ExtServices/popup.service';
import { GetEventDTO } from '../../dto/GetEventDTO';
import { UpdateEventDTO } from '../../dto/UpdateEventDTO';
declare var $: any;

@Component({
  selector: 'app-create-list',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, FormsModule],
  templateUrl: './create-event.component.html',
  providers: [provideNativeDateAdapter()],
  styleUrl: './create-event.component.css'
})
export class CreateEventComponent implements OnInit {
  constructor(private routes: Router, private dialog: MatDialogRef<CreateEventComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private clients:ClientService, private popup:PopupService) { }

  business:string=this.data.business;
  client:string=this.data.client;
  id:string=this.data.id;
  description:string='';
  title:string='';
  date:string='';
  time:string='';
  dateResive:string='';
  getEvent:any={};
  present:boolean = false;
  dateReal?:Date;
  view:boolean=this.data.view;
  close() {
    this.dialog.close();
  }
  ngOnInit(): void {
    if(this.view == null){
      this.view=false;
    }
    if(this.id!=null){
      this.present=true;
      this.clients.getEvent(new GetEventDTO(this.id,this.client,this.business)).subscribe({
        next:(data)=>{
          this.getEvent=data.respuesta;
          this.description=this.getEvent.description;
          this.title=this.getEvent.title;
          this.dateResive= this.getEvent.date;
          this.date=this.dateResive.split(' ')[0];
          this.dateReal=this.formaterDate(this.date);
          this.time=this.dateResive.split(' ')[1];
        },
        error:(error)=>{
          console.log(error.error.respuesta);
        }
      });
    }
  }
  createEvent(){
    const final = this.date+" "+this.time;
    this.clients.createEvent(new EventDTO('1',this.description,final,this.title,this.client,this.business)).subscribe({
      next:(data)=>{
        this.popup.openSnackBar(data.respuesta);
        window.location.reload();
      },
      error:(error)=>{
        this.popup.openSnackBar(error.error.respuesta);
      }
    });
  }
  dateSelected(event: MatDatepickerInputEvent<Date>){
    const fecha = event.value;
    if(fecha){
      this.date= `${(fecha.getMonth() + 1).toString().padStart(2, '0')}/${fecha.getDate().toString().padStart(2, '0')}/${fecha.getFullYear()}`;
    }
  }
  updateEvent(){
    const final = this.date+' '+this.time;
    this.clients.updateEvent(new UpdateEventDTO(this.id,this.description,final,this.title,this.client, this.business)).subscribe({
      next:(data)=>{
        this.popup.openSnackBar(data.respuesta);
      },
      error:(error)=>{
        this.popup.openSnackBar(error.error.respuesta);
      }
    });
  }
  formaterDate(fechaString:string):Date{
    const parts = fechaString.split('/'); // Divide la cadena en partes utilizando el delimitador '/'
    const fechaDate = new Date(+parts[2], +parts[0] - 1, +parts[1]); // Crea el objeto Date con las partes de la fecha
    return fechaDate;
  }
}
