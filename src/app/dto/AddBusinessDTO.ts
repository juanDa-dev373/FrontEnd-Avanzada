import { Schedule } from "../model/Schedule";
import { Location } from "../model/Location";

export class AddBusinessDTO{
    constructor(
        public name:string='',
        public description:string='',
        public idClient:string='',
        public location:Location,
        public images:string[]=[],
        public typeBusiness:string='',
        public timeSchedules:Schedule[]=[],
        public phone:string[]=[]
    ){}
}