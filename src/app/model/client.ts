import { locationDTO } from "../dto/LocationDTO";
import { listBusiness } from "./listBusiness";

export class client{
    constructor(
        public id:string,
        public listClient:listBusiness[],
        public profilePhoto:string,
        public city:string,
        public location:locationDTO
    ){}
}