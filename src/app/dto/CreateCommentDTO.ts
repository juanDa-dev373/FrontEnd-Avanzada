export class CreateCommentDTO {
    constructor(
        public id: string,
        public date: string, // Using ISO 8601 string format for date
        public idClient: string,
        public idBusiness: string,
        public message: string
    ) {}
}
