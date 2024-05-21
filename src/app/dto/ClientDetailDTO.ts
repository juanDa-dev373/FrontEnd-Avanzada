import { StateRecord } from "../model/StateRecord";

export class ClientDetailDTO {
    constructor(
        public id: string,
        public name: string,
        public nickname: string,
        public email: string,
        public login: StateRecord,
        public city: string,
        public profilePhoto: string
    ) {}
}