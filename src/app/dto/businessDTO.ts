import { Location } from "../model/Location";

export class BusinessDTO{
    constructor(
        public id:string='',
        public name:string='',
        public description:string='',
        public location:Location,
        public images:string[],
        public typeBusiness:string='',
        public open:boolean
    ){}
}