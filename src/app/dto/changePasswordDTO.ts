export class ChangePasswordDTO{
    constructor(
        public password:string,
        public confirmPassword:string
    ){}
}