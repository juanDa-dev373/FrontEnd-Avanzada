import { Location } from "../model/Location";

export class LocationDTO {
    constructor(
        public location: Location,
        public maxDistance: number
    ) {}
}