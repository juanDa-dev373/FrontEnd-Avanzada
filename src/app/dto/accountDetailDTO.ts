import { StateRecord } from "../model/stateRecord";

export class accountDetailDTO{
    constructor(
       public id:string,
       public name:string,
       public nickname:string,
       public email:string,
       public login:StateRecord
    ){}
}