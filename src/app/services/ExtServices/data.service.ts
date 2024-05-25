import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private data: any[]=[];
  private message: string="";
  private businessOwner: any=[];

  setBusinesses(data: any[]) {
    this.data = data;
  }

  getBusinesses() {
    return this.data;
  }

  setMessage(message:string){
    this.message=message;
  }

  getMessage(){
    return this.message;
  }

  getBusinessOwner(){
    return this.businessOwner;
  }

  SetBusinessOwner(business: any){
    this.businessOwner=business;
  }
}
