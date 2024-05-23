export class EventDTO {
    constructor(
        public id: string,
        public description: string,
        public title: string,
        public client: string,
        public business: string
    ) {}
}
