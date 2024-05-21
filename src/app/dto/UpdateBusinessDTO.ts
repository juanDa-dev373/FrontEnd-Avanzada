import { Location } from '../model/Location';
import { TypeBusiness } from '../model/TypeBusiness';
import { Schedule } from '../model/Schedule'
import { HistoryReview } from '../model/HistoryReview';

export class UpdateBusinessDTO {
    constructor(
        public id: string,
        public idCliente: string,
        public name: string,
        public description: string,
        public location: Location,
        public images: string[],
        public typeBusiness: TypeBusiness,
        public timeSchedules: Schedule[] | null,
        public phone: string[] | null,
        public review: HistoryReview | null
    ) {}
}