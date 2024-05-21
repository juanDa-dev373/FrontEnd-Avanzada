export class EventDTO {
    constructor(
        public id: string,
        public description: string,
        public date: string, // Using ISO 8601 string format for date
        public title: string,
        public client: string,
        public business: string
    ) {}
}
