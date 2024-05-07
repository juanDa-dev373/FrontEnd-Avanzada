import { stateBusiness } from "./stateBusiness";

export class historyReview{
    constructor(
        public description:string,
        public stateBusiness:stateBusiness,
        public date:Date,
        public idModerator:string,
        public idBusiness:string
    ){}
}