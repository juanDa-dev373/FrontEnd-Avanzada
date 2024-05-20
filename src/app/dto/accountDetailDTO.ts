import { StateRecord } from "../model/StateRecord";

export class AccountDetailDTO{
    constructor(
       public id:string,
       public name:string,
       public nickname:string,
       public email:string,
       public login:StateRecord
    ){}
}