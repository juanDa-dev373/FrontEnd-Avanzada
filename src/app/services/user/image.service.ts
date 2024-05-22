import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../../dto/mensajeDTO';
import { enviroments } from '../../../enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor(private http:HttpClient) { }
  saveImageCloudinary(image:FormData):Observable<MensajeDTO>{
    return this.http.post<MensajeDTO>(enviroments.urlApi+"/api/imagenes/update",image);
  }
  public delete(/*ImagenDTO imagenDTO*/):Observable<MensajeDTO>{
      return this.http.delete<MensajeDTO>('');
  }
}
