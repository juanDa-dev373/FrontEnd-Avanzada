import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private data: any[]=[];
  public inicio:boolean=true;

  setBusinesses(data: any[]) {
    this.data = data;
  }

  getBusinesses() {
    return this.data;
  }

}
