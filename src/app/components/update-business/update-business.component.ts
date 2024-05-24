import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from '../carousel/carousel.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { MapService } from '../../services/ExtServices/map.service';
import { ImageService } from '../../services/user/image.service';
import { TokenServicesService } from '../../services/ExtServices/token-services.service';
import { ClientService } from '../../services/user/client.service';
import { PopupService } from '../../services/ExtServices/popup.service';
import { Schedule } from '../../model/Schedule';
import { Location } from '../../model/Location';
import { AddBusinessDTO } from '../../dto/AddBusinessDTO';

@Component({
  selector: 'app-update-business',
  standalone: true,
  imports: [CarouselComponent, FormsModule, CommonModule, MatTooltipModule, RouterModule],
  templateUrl: './update-business.component.html',
  styleUrl: './update-business.component.css'
})
export class UpdateBusinessComponent {
  nameAlert: boolean = false;
  descriptionAlert: boolean = false;
  ubicationAlert: boolean = false;
  imagesAlert: boolean = false;
  typeBusinessAlert: boolean = false;
  scheduleListAlert: boolean = false;
  numArrayAlert: boolean = false;
  constructor(private map: MapService, private imageS: ImageService, private token: TokenServicesService, private client: ClientService, private popup: PopupService) {
  }
  viewAlert: boolean[] = [];
  numArray: string[] = [''];
  message: string = '';
  disableScheduleAdd: boolean = false;
  days: string[] = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
  daysSelecionado: string[] = ['MONDAY'];
  scheduleList: Schedule[] = [{ start: '', day: this.days[0], end: '' }];
  ubication: Location = { latitude: 0, longitude: 0 };
  cloudinary?: any;
  isLoading = false;
  images: string[] = [];
  name: string = '';
  description: string = '';
  typeBusiness: string = '';
  ngOnInit(): void {
    this.map.crearMapa();
    this.map.agregarMarcador().subscribe((marcador) => {
      this.ubication.latitude = marcador.lat;
      this.ubication.longitude = marcador.lng;
    });
  }
  public telephonesMore() {
    this.numArray.push('');
  }
  public deletePhone(index: number) {
    this.numArray.splice(index, 1);
    this.viewAlert.splice(index, 1);
  }
  deleteShedule(index: number) {
    this.scheduleList.splice(index, 1);
    this.daysSelecionado.splice(index,1);
    this.disableScheduleAdd = false;
  }
  addSchedule() {
    if (this.scheduleList.length <= 6) {
      for(let dayA of this.days){
        if(!this.daysSelecionado.includes(dayA)) {
          this.scheduleList.push({ start: '', day: dayA, end: '' });
          this.daysSelecionado.push(dayA);
          break;
        }
      }
    } else {
      this.disableScheduleAdd = true;
    }

  }
  changeScheduleStart(i: number, start: string) {
    this.scheduleList[i].start = start;
  }
  changeScheduleDay(i: number, day: string) {
      this.scheduleList[i].day = day; 
      this.daysSelecionado[i]=day;
  }
  changeSheduleEnd(i: number, end: string) {
    this.scheduleList[i].end = end;
  }

  changePhone(i: number, phone: string) {
    this.numArray[i] = phone;
    if (this.numArray[i].length === 10) {
      if (this.numArray.length >= 2) {
        for (let j = 0; j < this.numArray.length - 1; j++) {
          if (this.numArray[i] === this.numArray[j]) {
            this.viewAlert[i] = true;
            this.message = 'no pueden haber numeros repetidos';
            break;
          } else {
            this.viewAlert[i] = false;
          }
        }
      } else {
        this.viewAlert[i] = false;
      }
    } else {
      this.viewAlert[i] = true;
      this.message = 'el numero tien que ser de longitud 10';
    }
    console.log(this.numArray);
  }
  onFileSelected(event: any): void {
    const files: FileList = event.target.files;
    if (!files) {
      console.error('No file selected');
      return;
    }
    this.isLoading = true;
    for (let i = 0; i < files.length; i++) {
      this.convertBase64(files[i], i);
    }

  }
  convertBase64(file: File, i: number) {
    const formData = new FormData();
    formData.append('file', file);
    this.saveImagesCloudinary(formData, i);
  }
  saveImagesCloudinary(formData: FormData, i: number) {
    this.imageS.saveImageCloudinary(formData).subscribe({
      next: (data) => {
        this.cloudinary = data.respuesta;
        if (this.cloudinary.hasOwnProperty('secure_url')) {
          this.images[i] = this.cloudinary['secure_url'];
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error.error.respuesta);
        this.isLoading = false;
      }
    });
  }
  addBusiness() {
    var add = new AddBusinessDTO(this.name, this.description, this.token.getCodigo(), this.ubication, this.images, this.typeBusiness, this.scheduleList, this.numArray);
    if (add.name == '') {
      this.nameAlert = true;
    } else {
      this.nameAlert = false;
    }
    if (add.description == '') {
      this.descriptionAlert = true;
    } else {
      this.descriptionAlert = false;
    }
    if (add.location.latitude === 0 && add.location.longitude === 0) {
      this.ubicationAlert = true;
    } else {
      this.ubicationAlert = false;
    }
    if (add.images.length === 0) {
      this.imagesAlert = true;
    } else {
      this.imagesAlert = false;
    }
    if (add.typeBusiness == '') {
      this.typeBusinessAlert = true;
    } else {
      this.typeBusinessAlert = false;
    }
    if (add.timeSchedules.length === 0) {
      this.scheduleListAlert = true;
    } else {
      this.scheduleListAlert = false;
    }
    if (add.phone.length === 0) {
      this.numArrayAlert = true;
    } else {
      this.numArrayAlert = false;
    }
    console.log('nombre: ' + this.name + ' descripcion: ' + this.description + ' ubicacion: ' + this.ubication + ' images: ' + this.images.length + ' tipo negocio: ' + this.typeBusiness + ' horario: ' + this.scheduleList.length);
    if (this.name !== '' && this.description !== '' && this.ubication.latitude != 0 && this.ubication.longitude != 0 && this.images.length > 0 && this.typeBusiness !== '' && this.scheduleList.length > 0) {
      console.log('entro');
      console.log(add.idClient);
      this.client.addBusiness(add).subscribe({
        next: (data) => {
          this.popup.openSnackBar(data.respuesta);
        },
        error: (error) => {
          this.popup.openSnackBar(error.error.respuesta);
        }
      });
    }
  }
}
