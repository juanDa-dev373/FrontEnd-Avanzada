import { schedule } from "../model/schedule";
import { locationDTO } from "./LocationDTO";

export class addBusiness{
    constructor(
        public name:string='',
        public description:string='',
        public idClient:string='',
        public location:locationDTO,
        public images:string[]=[],
        public typeBusiness:string='',
        public timeSchedules:schedule[]=[],
        public phone:string[]=[]
    ){}
}