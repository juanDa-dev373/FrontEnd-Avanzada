import { Location } from "../model/Location";

export class LocationDTO {
    constructor(
        public location: Location=new Location(),
        public maxDistance: number=1000,
        public search: string=""
    ) {}
}