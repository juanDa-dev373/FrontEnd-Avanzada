export class ResponseCommentDTO {
    constructor(
        public idComment: string,
        public idResponse: string,
        public idClient: string,
        public idBusiness: string,
        public message: string
    ) {}
}
