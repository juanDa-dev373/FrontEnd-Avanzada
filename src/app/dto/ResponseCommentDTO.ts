export class ResponseCommentDTO {
    constructor(
        public idComment: string,
        public idResponse: string,
        public date: string, // Using ISO 8601 string format for date
        public idClient: string,
        public idBusiness: string,
        public message: string
    ) {}
}
