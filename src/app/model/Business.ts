import { Location } from "./Location";
import { HistoryReview } from "./HistoryReview";
import { Schedule } from "./Schedule";
import { StateBusiness } from "./StateBusiness";
import { StateRecord } from "./StateRecord";
import { TypeBusiness } from "./TypeBusiness";

export class Business{
    constructor(
        public id:string='',
        public name:string,
        public description:string,
        public idClient:string,
        public location:Location,
        public images:string[],
        public typeBusiness:TypeBusiness,
        public timeSchedules:Schedule[],
        public phone:string[],
        public review:HistoryReview,
        public stateBusiness:StateBusiness,
        public state:StateRecord,
        public open:boolean=false
    ){}
}