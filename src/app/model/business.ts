import { locationDTO } from "../dto/LocationDTO";
import { historyReview } from "./historyReview";
import { schedule } from "./schedule";
import { stateBusiness } from "./stateBusiness";
import { stateRecord } from "./stateRecord";
import { typeBusiness } from "./typeBusiness";

export class business{
    constructor(
        public id:string='',
        public name:string='',
        public description:string='',
        public idClient:string='',
        public location:locationDTO,
        public images:string[]=[],
        public typeBusiness:typeBusiness,
        public timeSchedules:schedule[]=[],
        public phone:string[]=[],
        public review:historyReview,
        public stateBusiness:stateBusiness,
        public state:stateRecord,
        public open:boolean=false
    ){}
}