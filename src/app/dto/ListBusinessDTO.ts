import { BusinessDTO } from './BusinessDTO'; // Importar según la ubicación de BusinessDto

export class ListBusinessDTO {
    constructor(
        public id: string,
        public listName: string,
        public businesses: BusinessDTO[]
    ) {}
}
