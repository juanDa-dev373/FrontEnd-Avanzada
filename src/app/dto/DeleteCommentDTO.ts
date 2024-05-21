export class DeleteCommentDTO {
    constructor(
        public id: string,
        public idCliente: string,
        public business: string,
        public idClientOwnerBusiness: string
    ) {}
}
