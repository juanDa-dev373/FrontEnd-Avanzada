export class DeleteEventDTO {
    constructor(
        public id: string,
        public idBusiness: string,
        public idClient: string
    ) {}
}
