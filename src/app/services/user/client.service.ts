import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensajeDTO } from '../../dto/mensajeDTO';
import { Observable } from 'rxjs';
import { locationDTO } from '../../dto/LocationDTO';
import { TokenServicesService } from '../ExtServices/token-services.service';
import { addBusiness } from '../../dto/addBusinessDTO';
import { enviroments } from '../../../enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient,private local:TokenServicesService) { }

  public getClientById(){
      return this.http.get<MensajeDTO>('http://localhost:8083/api/clients/');
  }

  public getListBusiness():Observable<MensajeDTO> {
      return this.http.get<MensajeDTO>('');
  }

  public getListsBusinesses():Observable<MensajeDTO>{
      return this.http.get<MensajeDTO>('');
  }

  public listClient() {
      return this.http.get<MensajeDTO>('');
  }

  public  createBusinessList():Observable<MensajeDTO>{
      return this.http.post<MensajeDTO>('','');
  }

  public  deleteBusinessList():Observable<MensajeDTO>{
      return this.http.delete<MensajeDTO>('');
  }

  public addBusinessToList():Observable<MensajeDTO> {
      return this.http.post<MensajeDTO>('','');
  }

  public deleteBusinessToList():Observable<MensajeDTO>{
      return this.http.delete<MensajeDTO>('');
  }
  
  public addBusiness(addBusiness:addBusiness):Observable<MensajeDTO>{
      return this.http.post<MensajeDTO>(enviroments.urlApi+'/clients/addBusinessClient' ,addBusiness);
  }

  public deleteBusiness():Observable<MensajeDTO>{
      return this.http.delete<MensajeDTO>('');
  }

  public updateBusiness():Observable<MensajeDTO>{
      return this.http.post<MensajeDTO>('','');
  }
  public getAllBusiness(){
    return this.http.get<MensajeDTO>('http://localhost:8083/api/clients/getAllBusiness');
  }
  
  public listBusinessLocation(locationDTO:locationDTO){
      return this.http.get('');
  }
  
  public listBusinessName():Observable<MensajeDTO> {
      return this.http.get<MensajeDTO>('');
  }
  
  public listBusinessType():Observable<MensajeDTO>{
      return this.http.get<MensajeDTO>('');
  }
  
  public listBusinessOwner():Observable<MensajeDTO>{
    return this.http.get<MensajeDTO>('http://localhost:8083/api/clients/listBusinessOwner');
  }
  
  public getBusiness(idBusiness:string){
      return this.http.get<MensajeDTO>(enviroments.urlApi+'/clients/getBusiness/'+idBusiness);
  }

  public createComment(/*CreateCommentDTO createCommentDTO*/) {
      return this.http.post<MensajeDTO>('','');
  }
  public responseComment( /*ResponseCommentDTO responseCommentDTO*/):Observable<MensajeDTO>{
      return this.http.post<MensajeDTO>('','');
  }
  public listComment(idBusiness:string){
      return this.http.get<MensajeDTO>('');
  }

  public calification(/*CalificationDTO calificationDTO*/):Observable<MensajeDTO>{
      return this.http.post<MensajeDTO>('','');
  }
  public getComment(idComment:string, idBusiness:string){
      return this.http.get<MensajeDTO>('');
  }
  
  public deleteComment(/*DeleteCommentDTO deleteCommentDTO*/){
      return this.http.delete<MensajeDTO>('');
  }
  public createEvent(/*EventDTO eventDTO*/):Observable<MensajeDTO>{
      return this.http.post<MensajeDTO>('','');
  }
  public listEventBusiness(idBusiness:string){
      return this.http.get<MensajeDTO>('');
  }
  public updateEvent(/*UpdateEventDTO updateEventDTO*/) {
      return this.http.post<MensajeDTO>('','');
  }
  public getEvent(/*GetEventDTO getEventDTO*/){
      return this.http.get<MensajeDTO>('');
  }
  public deleteEvent( /*DeleteEventDTO deleteEventDTO*/){
      return this.http.delete<MensajeDTO>('');
  }
  public logOutUser(token:string){
      return this.http.post<MensajeDTO>('','');
  }
}
