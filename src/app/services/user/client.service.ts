import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenServicesService } from '../ExtServices/token-services.service';
import { enviroments } from '../../../enviroments/enviroments';
import { MensajeDTO } from '../../dto/mensajeDTO';
import { AddBusinessDTO } from '../../dto/AddBusinessDTO';
import { BusinessToListDTO } from '../../dto/BusinessToListDTO';
import { CalificationDTO } from '../../dto/CalificationDTO';
import { CreateCommentDTO } from '../../dto/CreateCommentDTO';
import { DeleteBusinessDTO } from '../../dto/DeleteBusinessDTO';
import { DeleteCommentDTO } from '../../dto/DeleteCommentDTO';
import { DeleteEventDTO } from '../../dto/DeleteEventDTO';
import { EventDTO } from '../../dto/EventDTO';
import { GetEventDTO } from '../../dto/GetEventDTO';
import { LocationDTO } from '../../dto/LocationDTO';
import { ResponseCommentDTO } from '../../dto/ResponseCommentDTO';
import { UpdateBusinessDTO } from '../../dto/UpdateBusinessDTO';
import { TypeBusiness } from '../../model/typeBusiness';
import { UpdateEventDTO } from '../../dto/UpdateEventDTO';

@Injectable({
    providedIn: 'root'
})
export class ClientService {

    private apiUrl = enviroments.urlApi;

    constructor(private http: HttpClient, private local: TokenServicesService) { }

    public getClientById() {
        return this.http.get<MensajeDTO>(enviroments.urlApi +'/api/clients/');
    }
    public getListBusiness(nameList: string) {
        return this.http.get<MensajeDTO>(`${this.apiUrl}/api/clients/listBusiness`, { params: { nameList } });
    }

    public getListsBusinesses() {
        return this.http.get<MensajeDTO>(`${this.apiUrl}/api/clients/listsBusinesses`);
    }

    public createBusinessList(listName: string) {
        return this.http.post<MensajeDTO>(`${this.apiUrl}/api/clients/createBusinessList`, null, { params: { listName } });
    }

    public deleteBusinessList(listName: string) {
        return this.http.delete<MensajeDTO>(`${this.apiUrl}/api/clients/deleteBusinessList`, { params: { listName } });
    }

    public addBusinessToList(addBusiness: BusinessToListDTO) {
        return this.http.post<MensajeDTO>(`${this.apiUrl}/api/clients/addBusinessToList`, addBusiness);
    }

    public deleteBusinessToList(removeBusiness: BusinessToListDTO) {
        return this.http.delete<MensajeDTO>(`${this.apiUrl}/api/clients/deleteBusinessToList`, { body: removeBusiness });
    }

    public addBusiness(addBusinessDTO: AddBusinessDTO) {
        return this.http.post<MensajeDTO>(`${this.apiUrl}/api/clients/addBusinessClient`, addBusinessDTO);
    }

    public deleteBusiness(deleteBusinessDTO: DeleteBusinessDTO) {
        return this.http.delete<MensajeDTO>(`${this.apiUrl}/api/clients/deleteBusinessClient`, { body: deleteBusinessDTO });
    }

    public updateBusiness(updateBusinessDTO: UpdateBusinessDTO) {
        return this.http.post<MensajeDTO>(`${this.apiUrl}/api/clients/updateBusiness`, updateBusinessDTO);
    }

    public getAllBusiness() {
        return this.http.get<MensajeDTO>(`${this.apiUrl}/api/clients/getAllBusiness`);
    }

    public listBusinessLocation(locationDTO: LocationDTO) {
        // return this.http.get<MensajeDTO<Business[]>>(`${this.apiUrl}/api/clients/listBusinessLocation`, { params: locationDTO });
    }

    public listBusinessName(name: string) {
        return this.http.get<MensajeDTO>(`${this.apiUrl}/api/clients/listBusinessName/${name}`);
    }

    public listBusinessType(type: TypeBusiness) {
        return this.http.get<MensajeDTO>(`${this.apiUrl}/api/clients/listBusinessType/${type}`);
    }

    public listBusinessOwner() {
        return this.http.get<MensajeDTO>(`${this.apiUrl}/api/clients/listBusinessOwner`);
    }

    public getBusiness(idBusiness: string) {
        return this.http.get<MensajeDTO>(`${this.apiUrl}/api/clients/getBusiness/${idBusiness}`);
    }

    public createComment(createCommentDTO: CreateCommentDTO) {
        return this.http.post<MensajeDTO>(`${this.apiUrl}/api/clients/createComment`, createCommentDTO);
    }

    public responseComment(responseCommentDTO: ResponseCommentDTO) {
        return this.http.post<MensajeDTO>(`${this.apiUrl}/api/clients/responseComment`, responseCommentDTO);
    }

    public listComment(idBusiness: string) {
        return this.http.get<MensajeDTO>(`${this.apiUrl}/api/clients/${idBusiness}/listComment`);
    }

    public calification(calificationDTO: CalificationDTO) {
        return this.http.post<MensajeDTO>(`${this.apiUrl}/api/clients/calification`, calificationDTO);
    }

    public getComment(idComment: string, idBusiness: string) {
        return this.http.get<MensajeDTO>(`${this.apiUrl}/api/clients/getComment`, { params: { idComment, idBusiness } });
    }

    public deleteComment(deleteCommentDTO: DeleteCommentDTO) {
        return this.http.delete<MensajeDTO>(`${this.apiUrl}/api/clients/deleteComment`, { body: deleteCommentDTO });
    }

    public createEvent(eventDTO: EventDTO) {
        return this.http.post<MensajeDTO>(`${this.apiUrl}/api/clients/createEvent`, eventDTO);
    }

    public listEventBusiness(idBusiness: string) {
        return this.http.get<MensajeDTO>(`${this.apiUrl}/api/clients/${idBusiness}/listEventBusiness`);
    }

    public updateEvent(updateEventDTO: UpdateEventDTO) {
        return this.http.post<MensajeDTO>(`${this.apiUrl}/api/clients/updateEvent`, updateEventDTO);
    }

    public getEvent(getEventDTO: GetEventDTO) {
        // return this.http.get<MensajeDTO<Event>>(`${this.apiUrl}/api/clients/getEvent`, { body: getEventDTO });
    }

    public deleteEvent(deleteEventDTO: DeleteEventDTO) {
        return this.http.delete<MensajeDTO>(`${this.apiUrl}/api/clients/deleteEvent`, { body: deleteEventDTO });
    }

    public logOutUser() {
        return this.http.post<MensajeDTO>(`${this.apiUrl}/api/clients/logOutUser`, null);
    }
}
