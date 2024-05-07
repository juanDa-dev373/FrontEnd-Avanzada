import { locationDTO } from "./LocationDTO";

export class businessDTO{
    constructor(
        public id:string='',
        public name:string='',
        public description:string='',
        public location:locationDTO,
        public images:string[],
        public typeBusiness:string='',
        public open:boolean
    ){}
}