import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensajeDTO } from '../../dto/mensajeDTO';
import { Observable } from 'rxjs';
import { locationDTO } from '../../dto/LocationDTO';
import { TokenServicesService } from '../ExtServices/token-services.service';
import { enviroments } from '../../../enviroments/enviroments';

@Injectable({
    providedIn: 'root'
})
export class ClientService {

    constructor(private http: HttpClient, private local: TokenServicesService) { }

  public getClientById(){
    const token = this.local.getToken();
    console.log(token);
    const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + token
    });
      return this.http.get<MensajeDTO>('http://localhost:8083/api/clients/', {headers:headers});
  }

    public getListBusiness(): Observable<MensajeDTO> {
        return this.http.get<MensajeDTO>('');
    }

    public getListsBusinesses(): Observable<MensajeDTO> {
        return this.http.get<MensajeDTO>('');
    }

    public listClient() {
        return this.http.get<MensajeDTO>('');
    }

    public createBusinessList(name: string): Observable<MensajeDTO> {
        return this.http.post<MensajeDTO>(enviroments.urlApi + '/api/clients/createBusinessList?listName=' + name, undefined);
    }

    public deleteBusinessList(name: string): Observable<MensajeDTO> {
        return this.http.post<MensajeDTO>(enviroments.urlApi + '/api/clients/deleteBusinessLis?listName=' + name, undefined);
    }

    public addBusinessToList(): Observable<MensajeDTO> {
        return this.http.post<MensajeDTO>('', '');
    }

    public deleteBusinessToList(): Observable<MensajeDTO> {
        return this.http.delete<MensajeDTO>('');
    }

    public addBusiness(): Observable<MensajeDTO> {
        return this.http.post<MensajeDTO>('', '');
    }

    public deleteBusiness(): Observable<MensajeDTO> {
        return this.http.delete<MensajeDTO>('');
    }

  public updateBusiness():Observable<MensajeDTO>{
      return this.http.post<MensajeDTO>('','');
  }
  public getAllBusiness(){
    const token = this.local.getToken();
    console.log(token);
    const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + token
    });
    return this.http.get<MensajeDTO>('http://localhost:8083/api/clients/getAllBusiness', {headers:headers});
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
    const token = this.local.getToken();
    console.log(token);
    const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + token
    });
    return this.http.get<MensajeDTO>('http://localhost:8083/api/clients/listBusinessOwner', {headers:headers});
  }
  
  public getBusiness(idBusiness:string){
      return this.http.get<MensajeDTO>('');
  }

    public createComment(/*CreateCommentDTO createCommentDTO*/) {
        return this.http.post<MensajeDTO>('', '');
    }
    public responseComment( /*ResponseCommentDTO responseCommentDTO*/): Observable<MensajeDTO> {
        return this.http.post<MensajeDTO>('', '');
    }
    public listComment(idBusiness: string) {
        return this.http.get<MensajeDTO>('');
    }

    public calification(/*CalificationDTO calificationDTO*/): Observable<MensajeDTO> {
        return this.http.post<MensajeDTO>('', '');
    }
    public getComment(idComment: string, idBusiness: string) {
        return this.http.get<MensajeDTO>('');
    }

    public deleteComment(/*DeleteCommentDTO deleteCommentDTO*/) {
        return this.http.delete<MensajeDTO>('');
    }
    public createEvent(/*EventDTO eventDTO*/): Observable<MensajeDTO> {
        return this.http.post<MensajeDTO>('', '');
    }
    public listEventBusiness(idBusiness: string) {
        return this.http.get<MensajeDTO>('');
    }
    public updateEvent(/*UpdateEventDTO updateEventDTO*/) {
        return this.http.post<MensajeDTO>('', '');
    }
    public getEvent(/*GetEventDTO getEventDTO*/) {
        return this.http.get<MensajeDTO>('');
    }
    public deleteEvent( /*DeleteEventDTO deleteEventDTO*/) {
        return this.http.delete<MensajeDTO>('');
    }
    public logOutUser(token: string) {
        return this.http.post<MensajeDTO>('', '');
    }
}
