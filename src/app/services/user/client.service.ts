import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenServicesService } from '../ExtServices/token-services.service';
import { MensajeDTO } from '../../dto/mensajeDTO';
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
import { TypeBusiness } from '../../model/TypeBusiness';
import { UpdateEventDTO } from '../../dto/UpdateEventDTO';
import { enviroments } from '../../../enviroments/enviroments';
import { AddBusinessDTO} from '../../dto/AddBusinessDTO';

@Injectable({
    providedIn: 'root'
})
export class ClientService {

    private apiUrl = enviroments.urlApi;

    constructor(private http: HttpClient, private local: TokenServicesService) { }

    public getClientById(idClient:string) :Observable<MensajeDTO>{
        return this.http.get<MensajeDTO>(this.apiUrl +'/api/clients/getClientId/'+idClient);
    }
    public getListBusiness(nameList: string):Observable<MensajeDTO> {
        return this.http.get<MensajeDTO>(`${this.apiUrl}/api/clients/listBusiness`, { params: { nameList } });
    }

    public getListsBusinesses():Observable<MensajeDTO> {
        return this.http.get<MensajeDTO>(`${this.apiUrl}/api/clients/listsBusinesses`);
    }

    public createBusinessList(listName: string):Observable<MensajeDTO> {
        return this.http.post<MensajeDTO>(`${this.apiUrl}/api/clients/createBusinessList`, null, { params: { listName } });
    }

    public deleteBusinessList(listName: string):Observable<MensajeDTO> {
        return this.http.delete<MensajeDTO>(`${this.apiUrl}/api/clients/deleteBusinessList`, { params: { listName } });
    }

    public addBusinessToList(addBusiness: BusinessToListDTO):Observable<MensajeDTO> {
        return this.http.post<MensajeDTO>(`${this.apiUrl}/api/clients/addBusinessToList`, addBusiness);
    }

    public deleteBusinessToList(removeBusiness: BusinessToListDTO):Observable<MensajeDTO> {
        return this.http.delete<MensajeDTO>(`${this.apiUrl}/api/clients/deleteBusinessToList`, { body: removeBusiness });
    }

    public addBusiness(addBusinessDTO: AddBusinessDTO):Observable<MensajeDTO> {
        return this.http.post<MensajeDTO>(`${this.apiUrl}/api/clients/addBusinessClient`, addBusinessDTO);
    }

    public deleteBusiness(deleteBusinessDTO: DeleteBusinessDTO):Observable<MensajeDTO> {
        return this.http.delete<MensajeDTO>(`${this.apiUrl}/api/clients/deleteBusinessClient`, { body: deleteBusinessDTO });
    }

    public updateBusiness(updateBusinessDTO: UpdateBusinessDTO):Observable<MensajeDTO> {
        return this.http.post<MensajeDTO>(`${this.apiUrl}/api/clients/updateBusiness`, updateBusinessDTO);
    }

    public getAllBusiness():Observable<MensajeDTO> {
        return this.http.get<MensajeDTO>(`${this.apiUrl}/api/clients/getAllBusiness`);
    }

    public listBusinessLocation(locationDTO: LocationDTO) {
        // return this.http.get<MensajeDTO<Business[]>>(`${this.apiUrl}/api/clients/listBusinessLocation`, { params: locationDTO });
    }

    public listBusinessName(name: string):Observable<MensajeDTO> {
        return this.http.get<MensajeDTO>(`${this.apiUrl}/api/clients/listBusinessName/${name}`);
    }

    public listBusinessType(type: TypeBusiness):Observable<MensajeDTO> {
        return this.http.get<MensajeDTO>(`${this.apiUrl}/api/clients/listBusinessType/${type}`);
    }

    public listBusinessOwner():Observable<MensajeDTO> {
        return this.http.get<MensajeDTO>(`${this.apiUrl}/api/clients/listBusinessOwner`);
    }

    public getBusiness(idBusiness: string):Observable<MensajeDTO> {
        return this.http.get<MensajeDTO>(`${this.apiUrl}/api/clients/getBusiness/${idBusiness}`);
    }

    public createComment(createCommentDTO: CreateCommentDTO):Observable<MensajeDTO> {
        return this.http.post<MensajeDTO>(`${this.apiUrl}/api/clients/createComment`, createCommentDTO);
    }

    public responseComment(responseCommentDTO: ResponseCommentDTO):Observable<MensajeDTO> {
        return this.http.post<MensajeDTO>(`${this.apiUrl}/api/clients/responseComment`, responseCommentDTO);
    }

    public listComment(idBusiness: string):Observable<MensajeDTO> {
        return this.http.get<MensajeDTO>(`${this.apiUrl}/api/clients/${idBusiness}/listComment`);
    }

    public calification(calificationDTO: CalificationDTO):Observable<MensajeDTO> {
        return this.http.post<MensajeDTO>(`${this.apiUrl}/api/clients/calification`, calificationDTO);
    }

    public getComment(idComment: string, idBusiness: string):Observable<MensajeDTO> {
        return this.http.get<MensajeDTO>(`${this.apiUrl}/api/clients/getComment`, { params: { idComment, idBusiness } });
    }

    public deleteComment(deleteCommentDTO: DeleteCommentDTO):Observable<MensajeDTO> {
        return this.http.request<MensajeDTO>('delete',`${this.apiUrl}/api/clients/deleteComment`, { body: deleteCommentDTO });
    }

    public createEvent(eventDTO: EventDTO):Observable<MensajeDTO> {
        return this.http.post<MensajeDTO>(`${this.apiUrl}/api/clients/createEvent`, eventDTO);
    }

    public listEventBusiness(idBusiness: string):Observable<MensajeDTO> {
        return this.http.get<MensajeDTO>(`${this.apiUrl}/api/clients/${idBusiness}/listEventBusiness`);
    }

    public updateEvent(updateEventDTO: UpdateEventDTO):Observable<MensajeDTO> {
        return this.http.post<MensajeDTO>(`${this.apiUrl}/api/clients/updateEvent`, updateEventDTO);
    }

    public getEvent(getEventDTO: GetEventDTO):Observable<MensajeDTO>{
        return this.http.request<MensajeDTO>('get',`${this.apiUrl}/api/clients/getEvent`,{body:getEventDTO});
    }

    public deleteEvent(deleteEventDTO: DeleteEventDTO):Observable<MensajeDTO> {
        return this.http.delete<MensajeDTO>(`${this.apiUrl}/api/clients/deleteEvent`, { body: deleteEventDTO });
    }

    public logOutUser():Observable<MensajeDTO> {
        return this.http.post<MensajeDTO>(`${this.apiUrl}/api/clients/logOutUser`, null);
    }
}
