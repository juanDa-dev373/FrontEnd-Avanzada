import { StateBusiness } from "./stateBusiness";

export class HistoryReview {
    constructor(
        public description: string,
        public stateBusiness: StateBusiness,
        public date: string,  // ISO 8601 date string format
        public idModerator: string,
        public idBusiness: string
    ) {}
}
