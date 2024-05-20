import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensajeDTO } from '../../dto/mensajeDTO';
import { Observable } from 'rxjs';
import { HistoryReviewDTO } from '../../dto/HistoryReviewDTO';
import { enviroments } from '../../../enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class ModeratorService {

  private apiUrl = enviroments.urlApi;

    constructor(private http: HttpClient) { }

    public verifyAndApproveBusiness(reviewDTO: HistoryReviewDTO) {
        return this.http.post<MensajeDTO>(`${this.apiUrl}/api/moderator/verifyAndApproveBusiness`, reviewDTO);
    }

    public rejectBusiness(reviewDTO: HistoryReviewDTO) {
        return this.http.post<MensajeDTO>(`${this.apiUrl}/api/moderator/rejectBusiness`, reviewDTO);
    }

    public deactivateUserAccount(moderatorId: string, userId: string) {
        return this.http.post<MensajeDTO>(`${this.apiUrl}/api/moderator/deactivateUserAccount`, null, { params: { moderatorId, userId } });
    }

    public getListHistoryReviews(moderatorId: string) {
        return this.http.get<MensajeDTO>(`${this.apiUrl}/api/moderator/getListHistoryReviews`, { params: { moderatorId } });
    }

    public getAllBusinessPending() {
        return this.http.get<MensajeDTO>(`${this.apiUrl}/api/moderator/getAllBusinessPending`);
    }

    public logOutUser() {
        return this.http.post<MensajeDTO>(`${this.apiUrl}/api/moderator/logOutUser`, null);
    }
  }