import { HistoryReview } from "../model/HistoryReview";
import { Schedule } from "../model/schedule";
import { TypeBusiness } from "../model/typeBusiness"
export class AddBusinessDTO {
    constructor(
        public name: string,
        public description: string,
        public idClient: string,
        public location: Location,
        public images: string[],
        public typeBusiness: TypeBusiness,
        public timeSchedules: Schedule[],
        public phone: string[],
        public review?: HistoryReview
    ) {}
}
