import { StateBusiness } from "../model/StateBusiness";

export class ReviewDTO {
    constructor(
        public stateBusiness: StateBusiness,
        public moderatorId: string,
        public idBusiness: string,
        public nameBusiness?: string,
    ) {}
}
