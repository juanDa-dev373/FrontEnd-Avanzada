import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensajeDTO } from '../../dto/mensajeDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModeratorService {

  constructor(private http:HttpClient) { }
  public verifyAndApproveBusiness(/* HistoryReviewDTO reviewDTO*/):Observable<MensajeDTO>{
    return this.http.post<MensajeDTO>('','');
  }
  public rejectBusiness(/*HistoryReviewDTO reviewDTO*/):Observable<MensajeDTO>{
    return this.http.post<MensajeDTO>('','');
  }
  public deactivateUserAccount( moderatorId:string,userId:string){
    return this.http.post<MensajeDTO>('','');
  }
  public getListHistoryReviews(moderatorId:string) {
    return this.http.get<MensajeDTO>('');
  }
}
